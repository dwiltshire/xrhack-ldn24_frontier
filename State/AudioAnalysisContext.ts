import { Context, ContextManager, Observable } from "@zcomponent/core";
import { HUME_AI } from "../secrets";
import {
  base64ToBlob,
  checkForAudioTracks,
  createSocketConfig,
  getAudioStream,
  getSupportedMimeType,
  MimeType,
  VoiceClient,
} from "@humeai/voice";

interface ConstructionProps {}

type AnalysisState =
  | "Pending"
  | "Ready"
  | "Authentication Error"
  | "Listening"
  | "Authenticating";

/**
 * @zui
 * @zcontext
 */
export class AudioAnalysisContext extends Context<ConstructionProps> {
  protected accessToken;
  protected client: VoiceClient;
  protected audioStream: MediaStream;
  protected currentAudio: HTMLAudioElement | null;
  protected audioQueue: Blob[] = [];
  protected mimeType: MimeType | "audio/webm";
  protected recorder: MediaRecorder;
  protected isPlaying: boolean;

  /** @zui */
  public analysisState = new Observable<AnalysisState>("Pending");

  /** @zui */
  public nextActionLabel = new Observable<string>("Connect");

  constructor(
    contextManager: ContextManager,
    constructorProps: ConstructionProps
  ) {
    super(contextManager, constructorProps);

    const mimeSupportCheckResponse = getSupportedMimeType();
    this.mimeType = mimeSupportCheckResponse.success
      ? mimeSupportCheckResponse.mimeType
      : "audio/webm";

    this.analysisState.addListener((value) => {
      console.log(value);

      switch (value) {
        case "Pending":
          this.nextActionLabel.value = "Authenticate";
          break;
        case "Authentication Error":
          this.nextActionLabel.value = "Retry authentication";
          break;
        case "Listening":
          this.nextActionLabel.value = "Stop";
          break;
        case "Ready":
          this.nextActionLabel.value = "Start";
          break;
      }
    });
  }

  /** @zui */
  triggerNextAction() {
    switch (this.analysisState.value) {
      //   case "Pending":
      //     this.authenticate();
      //     break;
      case "Authentication Error":
        this.authenticate();
        break;
      case "Listening":
        this.stopAudio();
        break;
      case "Pending":
      case "Ready":
        this.connect();
        break;
    }
  }

  async authenticate(): Promise<void> {
    const authString = `${HUME_AI.API_KEY}:${HUME_AI.SECRET_KEY}`;
    const encoded = btoa(authString);

    try {
      this.analysisState.value = "Authenticating";
      // see proxy configuration within the vite.config.js file
      const res = await fetch("https://api.hume.ai/oauth2-cc/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${encoded}`,
        },
        body: new URLSearchParams({
          grant_type: "this.client_credentials",
        }).toString(),
        cache: "no-cache",
      });
      const data = (await res.json()) as { access_token: string };
      this.accessToken = String(data["access_token"]);

      // update ui state
      this.analysisState.value = "Ready";
    } catch (e) {
      console.error("Failed to authenticate:", e);
      this.analysisState.value = "Authentication Error";
    }
  }

  async connect(): Promise<void> {
    // creates minimal EVI configuration
    const config = createSocketConfig({
      auth: {
        // type: "accessToken",
        // value: this.accessToken,
        type: "apiKey",
        value: HUME_AI.API_KEY,
      },
    });
    // instantiates the VoiceClient with configuration
    this.client = VoiceClient.create(config);
    // handler for Web Socket open event, triggered when connection is first established
    this.client.on("open", async () => {
      console.log("Web socket connection opened");
      await this.captureAudio();
    });
    // handler for Web Socket message event, triggered whenever a message is received from the server through the Web Socket
    this.client.on("message", async (message) => {
      console.log("message", message);
      switch (message.type) {
        case "user_message":
        case "assistant_message":
          const { role, content } = message.message;
          this.onMessageReceived(role, content);
          break;

        case "audio_output":
          const audioOutput = message.data;
          const blob = base64ToBlob(audioOutput, this.mimeType);
          this.audioQueue.push(blob);
          if (this.audioQueue.length <= 1) {
            await this.playAudio();
          }
          break;

        case "user_interruption":
          this.stopAudio();
          break;
      }
    });
    // handler for Web Socket close event, triggered when connection is closed
    this.client.on("close", () => {
      console.log("Web socket connection closed");
    });
    // establish secure Web Socket connection
    this.client.connect();

    // update ui state
    this.analysisState.value = "Listening";
  }

  /**
   * captures and records audio stream
   */
  async captureAudio(): Promise<void> {
    this.audioStream = await getAudioStream();
    // ensure there is only one audio audio track in the stream
    checkForAudioTracks(this.audioStream);

    this.recorder = new MediaRecorder(this.audioStream, {
      mimeType: this.mimeType,
    });

    this.recorder.ondataavailable = async ({ data }) => {
      if (data.size > 0 && this.client?.readyState === WebSocket.OPEN) {
        // convert Blob to binary
        const buffer = await data.arrayBuffer();
        // Send binary (audio input) through the Web Socket
        this.client?.sendAudio(buffer);
      }
    };
    // capture audio input at a rate of 100ms (recommended)
    this.recorder.start(100);
  }

  /**
   * play the audio within the playback queue, converting each Blob into playable HTMLAudioElements
   */
  playAudio(): void {
    if (this.audioQueue.length > 0 && !this.isPlaying) {
      // update isPlaying state
      this.isPlaying = true;
      // pull next audio output from the queue
      const audioBlob = this.audioQueue.shift();

      if (audioBlob) {
        const audioUrl = URL.createObjectURL(audioBlob);
        // converts Blob to AudioElement for playback
        this.currentAudio = new Audio(audioUrl);
        // play audio
        this.currentAudio.play();
        // callback for when audio finishes playing
        this.currentAudio.onended = async () => {
          // update isPlaying state
          this.isPlaying = false;
          // attempt to pull next audio output from queue
          if (this.audioQueue.length) this.playAudio();
        };
      }
    }
  }

  /**
   * stops audio playback
   */
  stopAudio(): void {
    this.recorder.stop();
    this.currentAudio?.pause();
    this.currentAudio = null;
    this.isPlaying = false;
    this.audioQueue.length = 0;
  }

  onMessageReceived(role: "assistant" | "system" | "user", content: string) {}
}

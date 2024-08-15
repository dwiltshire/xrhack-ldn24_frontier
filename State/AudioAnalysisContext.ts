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

type Emotion =
  | "Admiration"
  | "Adoration"
  | "Aesthetic Appreciation"
  | "Amusement"
  | "Anger"
  | "Anxiety"
  | "Awe"
  | "Awkwardness"
  | "Boredom"
  | "Calmness"
  | "Concentration"
  | "Confusion"
  | "Contemplation"
  | "Contempt"
  | "Contentment"
  | "Craving"
  | "Desire"
  | "Determination"
  | "Disappointment"
  | "Disgust"
  | "Distress"
  | "Doubt"
  | "Ecstasy"
  | "Embarrassment"
  | "Empathic Pain"
  | "Entrancement"
  | "Envy"
  | "Excitement"
  | "Fear"
  | "Guilt"
  | "Horror"
  | "Interest"
  | "Joy"
  | "Love"
  | "Nostalgia"
  | "Pain"
  | "Pride"
  | "Realization"
  | "Relief"
  | "Romance"
  | "Sadness"
  | "Satisfaction"
  | "Shame"
  | "Surprise (negative)"
  | "Surprise (positive)"
  | "Sympathy"
  | "Tiredness"
  | "Triumph";

export type Prosody = Record<Emotion, number>;

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

  /** @zui */
  public lastMessage = new Observable<string>("...");

  /** @zui */
  public lastSentiment = new Observable<Prosody | undefined>(undefined);

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
          this.nextActionLabel.value = "Connect";
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
    console.log("triggerNextAction", this.analysisState.value);
    switch (this.analysisState.value) {
      case "Pending":
        this.connect();
        break;
      case "Listening":
        this.stopCapture();
        break;
      case "Ready":
        this.captureAudio();
        break;
    }
  }

  async connect(): Promise<void> {
    // creates minimal EVI configuration
    const config = createSocketConfig({
      auth: {
        type: "apiKey",
        value: HUME_AI.API_KEY,
      },
    });
    // instantiates the VoiceClient with configuration
    this.client = VoiceClient.create(config);

    // handler for Web Socket open event, triggered when connection is first established
    this.client.on("open", async () => {
      console.log("Web socket connection opened");
      this.analysisState.value = "Ready";
    });

    // handler for Web Socket message event, triggered whenever a message is received from the server through the Web Socket
    this.client.on("message", async (message) => {
      console.log("message", message);
      switch (message.type) {
        // case "assistant_message":
        case "user_message":
          const { role, content } = message.message;

          this.lastSentiment.value = message.models.prosody?.scores as Prosody;

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
          this.stopPlayback();
          break;
      }
    });
    // handler for Web Socket close event, triggered when connection is closed
    this.client.on("close", () => {
      console.log("Web socket connection closed");
    });
    // establish secure Web Socket connection
    this.client.connect();
  }

  /**
   * captures and records audio stream
   */
  async captureAudio(): Promise<void> {
    // update ui state
    this.analysisState.value = "Listening";

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

  stopCapture() {
    this.recorder.stop();
    this.analysisState.value = "Ready";
    this.stopPlayback();
  }

  /**
   * stops audio playback
   */
  stopPlayback(): void {
    this.currentAudio?.pause();
    this.currentAudio = null;
    this.isPlaying = false;
    this.audioQueue.length = 0;
  }

  onMessageReceived(role: "assistant" | "system" | "user", content: string) {
    if (role === "assistant") {
      this.lastMessage.value = content;
    }
  }
}

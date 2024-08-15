import {
  Component,
  Behavior,
  BehaviorConstructorProps,
  ContextManager,
  registerBehaviorRunAtDesignTime,
  useOnBeforeRender,
} from "@zcomponent/core";
import { AppContext } from "../State/AppContext";
import Button from "../Components/UI/Button/Button.zcomp";

interface ConstructionProps {
  // Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior
 **/
export class AudioAnalyser extends Behavior<Button> {
  private appContext: AppContext;
  protected timeout: number;
  protected audioContext: AudioContext;
  protected analyser: AnalyserNode;

  constructor(
    contextManager: ContextManager,
    instance: Button,
    protected constructorProps: ConstructionProps
  ) {
    super(contextManager, instance);

    this.appContext = this.contextManager.get(AppContext);
    this.appContext.isRecording.addListener(() => this.updateButtonLabel());

    this.register(this.instance.nodes.Button_Group.onClick, () =>
      this.toggleRecording()
    );
    this.register(useOnBeforeRender(contextManager), this.frame);
  }

  updateButtonLabel() {
    this.instance.nodes.Button_Text.text.value = this.appContext.isRecording
      .value
      ? "Stop"
      : "Start";
  }

  toggleRecording() {
    this.appContext.isRecording.value = !this.appContext.isRecording.value;

    if (this.appContext.isRecording) {
      this.start();
      // this.timeout = setInterval(this.start.bind(this), 5000)
    } else {
      this.stop();
    }
  }

  async start() {
    this.audioContext = new window.AudioContext();

    // Get access to the microphone
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Create a microphone source
      const microphone = this.audioContext.createMediaStreamSource(stream);

      // Create an analyser node
      this.analyser = this.audioContext.createAnalyser();

      // Connect the microphone to the analyser and the analyser to the destination
      microphone.connect(this.analyser);

      // Configure the analyser
      this.analyser.fftSize = 32;

      // Start visualizing the microphone input
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  }

  stop() {
    clearTimeout(this.timeout);
  }

  private frame = () => {
    if (!this.analyser) {
      return;
    }

    const bufferLength = this.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    this.analyser.getByteTimeDomainData(dataArray);

    this.appContext.latestText.value = (dataArray[0] / 128.0).toString();
  };

  dispose() {
    // Clean up any resources
    // ...
    return super.dispose();
  }
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(AudioAnalyser);

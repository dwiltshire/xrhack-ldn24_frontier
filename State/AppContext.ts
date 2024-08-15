import { Context, ContextManager, Observable } from "@zcomponent/core";

interface ConstructionProps {}

/**
 * @zui
 * @zcontext
 */
export class AppContext extends Context<ConstructionProps> {
  public isRecording = new Observable<boolean>(false);

  /** @zui */
  public recordingButtonLabel = new Observable<string>("Start");

  public latestText = new Observable<string>("");

  constructor(
    contextManager: ContextManager,
    constructorProps: ConstructionProps
  ) {
    super(contextManager, constructorProps);
  }

  /** @zui **/
  public toggleRecording() {
    this.isRecording.value = !this.isRecording.value;
    this.recordingButtonLabel.value = this.isRecording.value ? "Stop" : "Start";
  }
}

import {
  Component,
  ContextManager,
  Observable,
  registerLoadable,
} from "@zcomponent/core";
import { AudioAnalysisContext } from "../AudioAnalysisContext";

interface ConstructorProps {}

/**
 * @zcomponent
 * @zicon favorite
 */
export class ContextSetup extends Component {
  constructor(
    contextManager: ContextManager,
    constructorProps: ConstructorProps
  ) {
    super(contextManager, constructorProps);

    this.contextManager.get(AudioAnalysisContext);
  }

  public dispose() {
    // Clean up any resources that have been created here

    return super.dispose();
  }
}

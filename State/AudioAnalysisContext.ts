import { Context, ContextManager, Observable } from "@zcomponent/core";
import { HUME_AI } from "../secrets";

interface ConstructionProps {}

type AnalysisState = "Pending" | "Ready" | "Authentication Error";

/**
 * @zui
 * @zcontext
 */
export class AudioAnalysisContext extends Context<ConstructionProps> {
  protected accessToken;

  /** @zui */
  public analysisState = new Observable<string>("Pending");

  constructor(
    contextManager: ContextManager,
    constructorProps: ConstructionProps
  ) {
    super(contextManager, constructorProps);
  }

  /** @zui */
  async authenticate(): Promise<void> {
    const authString = `${HUME_AI.API_KEY}:${HUME_AI.SECRET_KEY}`;
    const encoded = btoa(authString);

    try {
      // see proxy configuration within the vite.config.js file
      const res = await fetch("https://api.hume.ai/oauth2-cc/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${encoded}`,
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
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
}

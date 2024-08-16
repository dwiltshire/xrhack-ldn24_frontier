# Frontier

A WebXR experience, created and built at [XRHack London](https://www.xrhack.com/london) in August 2024 using Mattercraft by [Zapworks](https://zap.works/mattercraft/).

## Team:

- @Wilty (David Wiltshire)
- @kevlar1737 (Kevin Doherty)
- @hiddenlake (Yiguan Liu)
- @raianknight (Petr Leontev)
- @TheSpectacle (Michael Turkington)

## Setup

- Clone the repo into a new folder
- Sign-up for a [zap.works](https://zap.works/) account (14 day free trial available)
- Sign-up for a [Hume](https://dev.hume.ai/) account and follow the instructions for ["Getting your API key"](https://dev.hume.ai/docs/introduction/api-key)
- Create a `secrets.ts` file in the root of your project (this file will be visible to Mattercraft, but not to git) and populare it with the code below.
- Visit: https://app.mattercraft.io/ and select _"Open project from your computer"_ and navigate to your local copy of this repo.

Create the following `secrets.ts` file in the root of the project.

```
// secrets.ts
export const HUME_AI = {
  API_KEY: "your-api-key-here",
  SECRET_KEY: "your-secret-key-here",
};
```

## Voice Anaylsis

Voice analysis is provided by [Hume](https://platform.hume.ai/), please familiarise yourself with their [Terms & Conditions](https://platform.hume.ai/policies/terms-of-use) and pricing before sharing/deploying this project.

To enable Voice Analyis you must make use of the `ContextSetup` component (see 'gotchas' below). This will ensure that the analysis tools are availble to link to scene entities.

Once enabled, you should be able to link the following properties and methods to your entities:

### Properties

| Property        | Type   | Description                                                                                                                                                                              | Example                                                                                                         |
| --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| analysisState   | String | Current state of the anaylsis process                                                                                                                                                    | `Pending` (connecting to hume)<br />`Ready` (ready to record input)<br />`Listening` (actively recording input) |
| nextActionLabel | String | The anaylsis flow follows a simple sequence of connect > start > stop. This field provided a label to describe what the next action will be.                                             | `Connect`<br />`Stop`<br />`Start`                                                                              |
| lastMessage     | String | A text transcript of the last audio recording that the Hume platform was able to analyse                                                                                                 | `"I am feeling great"`                                                                                          |
| lastSentiment   | String | An object representing the detected emotions in the last audio recording as detected by the Hume platform. There are 61 emotions and they are each assigned a value between `0` and `1`. | `{"Admiration": 0.1, "Adoration": 0.2, "Anger": 0.3, "etc": "..etc"}`<br />                                     |

![connecting-to-context](Documentation/images/connecting-to-context-property.png)

### Methods

| Method            | Parameters | Description                                                                                                |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| triggerNextAction | (None)     | Will trigger the next action in the analysis sequence e.g. connect to hume/start recording/stop recording. |

![connecting-to-context](Documentation/images/calling-a-context-method.png)

## Gotchas

_Context Links_
There was an issue with Context registration timings which can cause fields to not link to their values when mapping using the "link to context value" feature. To work around this, make sure the `ContextSetup.ts` component is included in your scene.

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

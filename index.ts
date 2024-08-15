import { initialize } from "@zcomponent/three";
import { default as Scene } from "./SceneVis.zcomp";

initialize(Scene, {}, {
    launchButton: document.getElementById('launchButton'),
    xrCompatible: true
});

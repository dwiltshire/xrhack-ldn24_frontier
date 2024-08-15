import { ContextManager, Observable } from "@zcomponent/core";
import { Group } from "@zcomponent/three/lib/components/Group";
import * as THREE from "three";
import {useOnBeforeRender } from "@zcomponent/core";
import { EmotionMeshComponent } from "./EmotionMeshComponent";


interface ConstructorProps {

}

/**
 * @zcomponent
 * @zicon favorite
 */
export class EmotionMeshSystem extends Group {
    /**
    * @zui
    * @zdefault 3
    */
    public numberOfMeshes = new Observable(0, () => {
        this._load();
    });

    clock: THREE.Clock | undefined;

    constructor(contextManager: ContextManager, constructorProps: ConstructorProps) {
        super(contextManager, constructorProps);

        this.clock = new THREE.Clock();

        this.register(useOnBeforeRender(contextManager), dt => {

           
        });
    }

    private async _load() {

    }

    public dispose() {

        // Clean up any resources that have been created here

        return super.dispose();
    }
}
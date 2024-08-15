import { ContextManager, Observable, registerLoadable, ZComponent } from '@zcomponent/core';
import { Group } from "@zcomponent/three/lib/components/Group";
import * as THREE from "three";
import {useOnBeforeRender } from "@zcomponent/core";

import vertexShader from "./shaders_v2/vertexShader";
import fragmentShader from "./shaders_v2/fragmentShader";


interface ConstructorProps {
    groupElement: THREE.Group;
}

/**
 * @zcomponent
 * @zicon favorite
 */
export class EmotionMeshComponent extends Group {
     /**
    * @zui
    * @zdefault 1
    */
    public rateOfChange: number;

    /**
    * @zui
    * @zdefault 1
    */
    public shapeScale: number;
    /**
    * @zui
    * @zdefault 1
    */
    public spikeFrequency: number;

    /**
    * @zui
    * @zdefault 1
    */
    public opacity: number;
    /**
    * @zui
    * @ztype color-norm-rgb
    * */
    public shapeColor: THREE.Color;
    
    mesh: THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial>;
    parentGroupElement: THREE.Group;
    clock: THREE.Clock | undefined;

    constructor(contextManager: ContextManager, constructorProps: ConstructorProps) {
        super(contextManager, constructorProps);

        this.parentGroupElement = constructorProps.groupElement;

        this.clock = new THREE.Clock();
        this.shapeScale = 2;
        this.spikeFrequency = 2;
        this.rateOfChange = 1;
        this.opacity = 1;
        this.shapeColor = new THREE.Color(0, 255, 0);

        registerLoadable(contextManager, this._load());

        // console.log('EmotionMeshComponent::constructor');

        this.register(useOnBeforeRender(contextManager), dt => {
            if (this.mesh) {
                const elapsedTime = this.clock!.getElapsedTime() * this.rateOfChange;

                this.mesh.material.uniforms.u_time.value = elapsedTime;
          
                this.mesh.material.uniforms.u_intensity.value = THREE.MathUtils.lerp(
                    this.mesh.material.uniforms.u_intensity.value,
                    this.shapeScale,
                    0.02
                );

                this.mesh.material.uniforms.u_spikeFactor.value = Math.sin(elapsedTime) + 0.5;
                this.mesh.material.uniforms.u_frequency.value = this.spikeFrequency;
                this.mesh.material.uniforms.u_color.value = this.shapeColor;
                this.mesh.material.uniforms.u_opacity.value = this.opacity;
            }
        });
        
    }

    private async _load() {
        
        // console.log('EmotionMeshComponent::_load');

        this.createEmotionMesh();
    }

    private createEmotionMesh() {
        // console.log('EmotionMeshComponent::createEmotionMesh');

        const geometry = new THREE.IcosahedronGeometry(2, 20);

        // console.log(this.shapeScale);
        // console.log(this.spikeFrequency);

        var material = new THREE.ShaderMaterial(
            {
                vertexShader,
                fragmentShader,
                uniforms: {
                    u_time: { value: 0 },
                    u_intensity: { value: 0.5 },
                    u_spikeFactor: { value: this.shapeScale },
                    u_frequency: { value: this.spikeFrequency },
                    u_color: { value: new THREE.Color(0x00ff00) }, // Example: Green color
                    u_opacity: { value: 1.0 }
                }
            }
        );

        material.transparent = true;

        this.mesh = new THREE.Mesh(
            geometry,
            material,
        );

        this.element.add(this.mesh);
    }

    public dispose() {

        this.dispose();

        return super.dispose();
    }
}
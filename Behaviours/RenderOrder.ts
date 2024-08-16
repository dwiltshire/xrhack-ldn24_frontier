import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, Observable } from "@zcomponent/core";
import { Object3D } from "@zcomponent/three";
import { Image as Image } from "@zcomponent/three/lib/components/Image";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents three/Object3D
 **/
export class RenderOrder extends Behavior<Object3D> {

	/**
	 * @zui
	 * @zdefault 0
	 */
	public renderOrder = new Observable(0);

	constructor(contextManager: ContextManager, instance: Object3D, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		/*
		// You can register handlers for events on the node that this behavior
		// is attached to like this:

		this.register(this.instance.onPointerDown, evt => {
			// Code to handle event
		});

		
		*/

		this.register(this.renderOrder, v => {
			this.instance.element.traverse(obj => {
				obj.renderOrder = v;
			});
		});
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Run at design time
registerBehaviorRunAtDesignTime(RenderOrder);

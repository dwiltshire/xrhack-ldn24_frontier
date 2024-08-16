import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Image as Image_0 } from "@zcomponent/three/lib/components/Image";
import { ToggleLayerClips as ToggleLayerClips_1 } from "@zcomponent/core/lib/behaviors/ToggleLayerClips";
import { Image360 as Image360_2 } from "@zcomponent/three/lib/components/Image360";
import { Text as Text_3 } from "@zcomponent/three/lib/components/text/Text";

interface ConstructorProps {
	/**
	 * If true, the scene's environment map will be set to this HDR image
	 * 
	 * @zprop
	 * @zdefault true
	 */
	ToggleEnvironment: boolean;
}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Image: Image_0 & {
			behaviors: {
				0: ToggleLayerClips_1,
				ToggleLayerClips: ToggleLayerClips_1,
			}
		},
		Image360: Image360_2 & {
			behaviors: {

			}
		},
		Text: Text_3 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		Environment: Layer & { clips: {
			Turn360On0: LayerClip;
			Turn360OF0: LayerClip;
		}};
	}};

	/**
	 * @zprop
	 */
	public _On360ButtonPressed: Event<[]>;

	/**
	 * @zprop
	 * @zdefault "icon_text"
	 */
	public icon_text: Observable<string>;

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;

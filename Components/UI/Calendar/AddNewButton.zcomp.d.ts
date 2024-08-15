import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Image as Image_0 } from "@zcomponent/three/lib/components/Image";
import { PlayLayerClip as PlayLayerClip_1 } from "@zcomponent/core/lib/behaviors/PlayLayerClip";
import { Text as Text_2 } from "@zcomponent/three/lib/components/text/Text";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		add_button: Image_0 & {
			behaviors: {

			}
		},
		background: Image_0 & {
			behaviors: {
				0: PlayLayerClip_1,
				PlayLayerClip: PlayLayerClip_1,
			}
		},
		date: Text_2 & {
			behaviors: {

			}
		},
		emotion_back: Image_0 & {
			behaviors: {

			}
		},
		emotion_sample: Image_0 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		OnButtonClick: Layer & { clips: {
			Press0: LayerClip;
		}};
	}};

	/**
	 * @zprop
	 * @zdefault false
	 */
	public Add: Observable<boolean>;

	/**
	 * @zprop
	 * @zdefault 0
	 */
	public Date: Observable<number>;

	/**
	 * @zprop
	 * @zdefault false
	 */
	public HasEmotion: Observable<boolean>;

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

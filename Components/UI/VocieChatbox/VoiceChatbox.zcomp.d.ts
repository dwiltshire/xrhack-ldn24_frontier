import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Image as Image_0 } from "@zcomponent/three/lib/components/Image";
import { Text as Text_1 } from "@zcomponent/three/lib/components/text/Text";
import { Group as Group_2 } from "@zcomponent/three/lib/components/Group";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		voice_bar0: Image_0 & {
			behaviors: {

			}
		},
		AI0: Image_0 & {
			behaviors: {

			}
		},
		record: Image_0 & {
			behaviors: {

			}
		},
		Text: Text_1 & {
			behaviors: {

			}
		},
		Chatbox: Group_2 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		VoiceBarPressed: Layer & { clips: {
			Pressed0: LayerClip;
		}};
		AI_Button: Layer & { clips: {
			pressed0: LayerClip;
		}};
		AudioButton: Layer & { clips: {
			Pressed: LayerClip;
		}};
	}};

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;

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
	 * @zprop
	 * @zdefault "Hey, how are you doing today?"
	 * @zgroup Text
	 * @zgrouppriority 21
	 * @ztype text-multiline
	 */
	public InputText: Observable<string>;
}

export default Comp;

import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { default as CalendarMenu_zcomp_0 } from "./Components/UI/Calendar/CalendarMenu.zcomp";
import { default as DockBarMenu_zcomp_1 } from "./Components/UI/DockBar/DockBarMenu.zcomp";
import { ToggleLayerClips as ToggleLayerClips_2 } from "@zcomponent/core/lib/behaviors/ToggleLayerClips";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { default as VoiceChatbox_zcomp_4 } from "./Components/UI/VocieChatbox/VoiceChatbox.zcomp";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		CalendarMenu: CalendarMenu_zcomp_0 & {
			behaviors: {

			}
		},
		DockBarMenu: DockBarMenu_zcomp_1 & {
			behaviors: {
				0: ToggleLayerClips_2,
				ToggleLayerClips: ToggleLayerClips_2,
				1: ToggleLayerClips_2,
				ToggleLayerClips0: ToggleLayerClips_2,
			}
		},
		UI: Group_3 & {
			behaviors: {

			}
		},
		VoiceChatbox: VoiceChatbox_zcomp_4 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		OpenCalendar: Layer & { clips: {
			CloseCalendar0: LayerClip;
			OpenCalendar0: LayerClip;
		}};
		OpenChatbox: Layer & { clips: {
			CloseChatbox0: LayerClip;
			OpenChatbox0: LayerClip;
		}};
	}};

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

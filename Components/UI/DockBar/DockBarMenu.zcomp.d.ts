import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { default as CalendarButton_zcomp_0 } from "./CalendarButton.zcomp";
import { default as CreateButton_zcomp_1 } from "./CreateButton.zcomp";
import { Group as Group_2 } from "@zcomponent/three/lib/components/Group";
import { default as Dock_zcomp_3 } from "./Dock.zcomp";
import { default as ShareButton_zcomp_4 } from "./ShareButton.zcomp";
import { default as UserAccount_zcomp_5 } from "./UserAccount.zcomp";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		CalendarButton: CalendarButton_zcomp_0 & {
			behaviors: {

			}
		},
		CreateButton: CreateButton_zcomp_1 & {
			behaviors: {

			}
		},
		Dock: Group_2 & {
			behaviors: {

			}
		},
		Dock_2: Dock_zcomp_3 & {
			behaviors: {

			}
		},
		ShareButton: ShareButton_zcomp_4 & {
			behaviors: {

			}
		},
		UserAccount: UserAccount_zcomp_5 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

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

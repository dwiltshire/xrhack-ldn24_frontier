import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { default as CalendarButton_zcomp_0 } from "./CalendarButton.zcomp";
import { EmitComponentPropEvent as EmitComponentPropEvent_1 } from "@zcomponent/core/lib/behaviors/EmitComponentPropEvent";
import { default as CreateButton_zcomp_2 } from "./CreateButton.zcomp";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { default as Dock_zcomp_4 } from "./Dock.zcomp";
import { default as EnvironmentButton_zcomp_5 } from "../Button/EnvironmentButton.zcomp";
import { default as ShareButton_zcomp_6 } from "./ShareButton.zcomp";
import { default as UserAccount_zcomp_7 } from "./UserAccount.zcomp";
import { default as Button_zcomp_8 } from "../Button/Button.zcomp";

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
				0: EmitComponentPropEvent_1,
				EmitComponentPropEvent: EmitComponentPropEvent_1,
			}
		},
		CreateButton: CreateButton_zcomp_2 & {
			behaviors: {
				0: EmitComponentPropEvent_1,
				EmitComponentPropEvent: EmitComponentPropEvent_1,
			}
		},
		Dock: Group_3 & {
			behaviors: {

			}
		},
		Dock_2: Dock_zcomp_4 & {
			behaviors: {

			}
		},
		EnvironmentButton: EnvironmentButton_zcomp_5 & {
			behaviors: {

			}
		},
		ShareButton0: ShareButton_zcomp_6 & {
			behaviors: {

			}
		},
		UserAccount: UserAccount_zcomp_7 & {
			behaviors: {

			}
		},
		Start: Button_zcomp_8 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

	}};

	/**
	 * @zprop
	 */
	public OnCreateButtonPressed: Event<[]>;

	/**
	 * @zprop
	 */
	public onCalendarPressed: Event<[]>;

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

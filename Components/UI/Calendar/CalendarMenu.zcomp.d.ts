import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { default as AddNewButton_zcomp_0 } from "./AddNewButton.zcomp";
import { default as DateComponentCard_zcomp_1 } from "./DateComponentCard.zcomp";
import { Group as Group_2 } from "@zcomponent/three/lib/components/Group";
import { default as CalendarMonthYear_zcomp_3 } from "./CalendarMonthYear.zcomp";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		AddNewButton: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		DateComponentCard: DateComponentCard_zcomp_1 & {
			behaviors: {

			}
		},
		AddNewButton0: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton1: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton2: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton3: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton4: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton5: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		week_1: Group_2 & {
			behaviors: {

			}
		},
		week_10: Group_2 & {
			behaviors: {

			}
		},
		AddNewButton6: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_7: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_6: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_5: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_4: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_3: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_2: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		week_11: Group_2 & {
			behaviors: {

			}
		},
		AddNewButton7: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_70: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_60: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_50: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_40: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_30: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_20: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		week_12: Group_2 & {
			behaviors: {

			}
		},
		AddNewButton8: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_71: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_61: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_51: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_41: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_31: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_21: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		week_13: Group_2 & {
			behaviors: {

			}
		},
		AddNewButton9: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_72: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_62: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_52: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_42: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_32: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_22: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		all_weeks: Group_2 & {
			behaviors: {

			}
		},
		CalendarMonthYear_2: CalendarMonthYear_zcomp_3 & {
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

import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { default as AddNewButton_zcomp_0 } from "./AddNewButton.zcomp";
import { ShadowPlane as ShadowPlane_1 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { DirectionalLight as DirectionalLight_2 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { XRRigVRPassthrough as XRRigVRPassthrough_3 } from "@zcomponent/three-webxr/lib/components/XRRigVRPassthrough";
import { XRController as XRController_4 } from "@zcomponent/three-webxr/lib/components/XRController";
import { XRCamera as XRCamera_5 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { TeleportManager as TeleportManager_6 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TurnManager as TurnManager_7 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { XRManager as XRManager_8 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { XRDefaultLoader as XRDefaultLoader_9 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { Group as Group_10 } from "@zcomponent/three/lib/components/Group";
import { HDREnvironment as HDREnvironment_11 } from "@zcomponent/three/lib/components/environments/HDREnvironment";
import { default as DockBarMenu_zcomp_12 } from "../DockBar/DockBarMenu.zcomp";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		AddNewButton0: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton1: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_1 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_2 & {
			behaviors: {

			}
		},
		AddNewButton_3: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_4: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_40: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_41: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_42: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_2: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_30: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_43: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_8: AddNewButton_zcomp_0 & {
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
		XRRigVRPassthrough: XRRigVRPassthrough_3 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_4 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_4 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_5 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_6 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_7 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_8 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_9 & {
			behaviors: {

			}
		},
		Base: Group_10 & {
			behaviors: {

			}
		},
		CalendarUI: Group_10 & {
			behaviors: {

			}
		},
		HDREnvironment: HDREnvironment_11 & {
			behaviors: {

			}
		},
		DockBarMenu: DockBarMenu_zcomp_12 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

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
}

export default Comp;

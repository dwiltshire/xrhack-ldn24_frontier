import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { default as AddNewButton_zcomp_0 } from "./AddNewButton.zcomp";
import { Group as Group_1 } from "@zcomponent/three/lib/components/Group";
import { DirectionalLight as DirectionalLight_2 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { HDREnvironment as HDREnvironment_3 } from "@zcomponent/three/lib/components/environments/HDREnvironment";
import { XRController as XRController_4 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_5 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { Sphere as Sphere_6 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { ShadowPlane as ShadowPlane_7 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { TeleportManager as TeleportManager_8 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TurnManager as TurnManager_9 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { XRRigVRPassthrough as XRRigVRPassthrough_10 } from "@zcomponent/three-webxr/lib/components/XRRigVRPassthrough";
import { XRCamera as XRCamera_11 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_12 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_13 } from "@zcomponent/three-webxr/lib/components/XRManager";

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
		AddNewButton_2: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_3: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_30: AddNewButton_zcomp_0 & {
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
		AddNewButton_43: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_5: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_6: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_7: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		AddNewButton_8: AddNewButton_zcomp_0 & {
			behaviors: {

			}
		},
		Base: Group_1 & {
			behaviors: {

			}
		},
		CalendarUI: Group_1 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_2 & {
			behaviors: {

			}
		},
		HDREnvironment: HDREnvironment_3 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_4 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_5 & {
			behaviors: {

			}
		},
		PlaceholderSphere: Sphere_6 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_4 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_7 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_8 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_9 & {
			behaviors: {

			}
		},
		XRRigVRPassthrough: XRRigVRPassthrough_10 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_11 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_12 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_13 & {
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

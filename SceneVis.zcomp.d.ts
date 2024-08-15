import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Group as Group_0 } from "@zcomponent/three/lib/components/Group";
import { DefaultCookieConsent as DefaultCookieConsent_1 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_2 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_3 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_4 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { XRController as XRController_5 } from "@zcomponent/three-webxr/lib/components/XRController";
import { EmitComponentPropEvent as EmitComponentPropEvent_6 } from "@zcomponent/core/lib/behaviors/EmitComponentPropEvent";
import { PerspectiveCamera as PerspectiveCamera_7 } from "@zcomponent/three/lib/components/cameras/PerspectiveCamera";
import { CallFunction as CallFunction_8 } from "@zcomponent/core/lib/behaviors/CallFunction";
import { UserPlacementManager as UserPlacementManager_9 } from "@zcomponent/three-webxr/lib/components/UserPlacementManager";
import { XRRigARUserPlacement as XRRigARUserPlacement_10 } from "@zcomponent/three-webxr/lib/components/XRRigARUserPlacement";
import { XRCamera as XRCamera_11 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_12 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_13 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { EmotionMeshComponent as EmotionMeshComponent_14 } from "./Components/Visualization/EmotionMeshComponent";
import { ExtrudedText as ExtrudedText_15 } from "@zcomponent/three/lib/components/meshes/ExtrudedText";
import { MeshStandardMaterial as MeshStandardMaterial_16 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Content_Group: Group_0 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_1 & {
			behaviors: {

			}
		},
		DefaultEnvironment: DefaultEnvironment_2 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_3 & {
			behaviors: {

			}
		},
		Defaults: Group_0 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_4 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_5 & {
			behaviors: {
				0: EmitComponentPropEvent_6,
				EmitComponentPropEvent: EmitComponentPropEvent_6,
			}
		},
		PerspectiveCamera: PerspectiveCamera_7 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_5 & {
			behaviors: {
				0: CallFunction_8,
				Call_UserPlacementManager_restartPlacement: CallFunction_8,
			}
		},
		User_PlacementManager: UserPlacementManager_9 & {
			behaviors: {

			}
		},
		XRRigARUserPlacement0: XRRigARUserPlacement_10 & {
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
		EmotionAnger: EmotionMeshComponent_14 & {
			behaviors: {

			}
		},
		EmotionFear: EmotionMeshComponent_14 & {
			behaviors: {

			}
		},
		EmotionJoy: EmotionMeshComponent_14 & {
			behaviors: {

			}
		},
		EmotionSurprise: EmotionMeshComponent_14 & {
			behaviors: {

			}
		},
		EmotionLove: EmotionMeshComponent_14 & {
			behaviors: {

			}
		},
		EmotionInterest: EmotionMeshComponent_14 & {
			behaviors: {

			}
		},
		EmotionSadness: EmotionMeshComponent_14 & {
			behaviors: {

			}
		},
		EmotionAmusement: EmotionMeshComponent_14 & {
			behaviors: {

			}
		},
		ExtrudedText: ExtrudedText_15 & {
			behaviors: {

			}
		},
		ExtrudedText0: ExtrudedText_15 & {
			behaviors: {

			}
		},
		ExtrudedText_2: ExtrudedText_15 & {
			behaviors: {

			}
		},
		ExtrudedText_3: ExtrudedText_15 & {
			behaviors: {

			}
		},
		ExtrudedText_30: ExtrudedText_15 & {
			behaviors: {

			}
		},
		ExtrudedText_5: ExtrudedText_15 & {
			behaviors: {

			}
		},
		ExtrudedText_31: ExtrudedText_15 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
		ExtrudedText_7: ExtrudedText_15 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_3: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_4: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_5: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_6: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_7: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_8: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		Placement: Layer & { clips: {
			Placed0: LayerClip;
			Placing0: LayerClip;
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

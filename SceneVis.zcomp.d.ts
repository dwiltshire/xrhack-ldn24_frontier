import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Group as Group_0 } from "@zcomponent/three/lib/components/Group";
import { DefaultCookieConsent as DefaultCookieConsent_1 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_2 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_3 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_4 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { XRController as XRController_5 } from "@zcomponent/three-webxr/lib/components/XRController";
import { PerspectiveCamera as PerspectiveCamera_6 } from "@zcomponent/three/lib/components/cameras/PerspectiveCamera";
import { CallFunction as CallFunction_7 } from "@zcomponent/core/lib/behaviors/CallFunction";
import { UserPlacementManager as UserPlacementManager_8 } from "@zcomponent/three-webxr/lib/components/UserPlacementManager";
import { XRRigARUserPlacement as XRRigARUserPlacement_9 } from "@zcomponent/three-webxr/lib/components/XRRigARUserPlacement";
import { XRCamera as XRCamera_10 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_11 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_12 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { EmotionMeshComponent as EmotionMeshComponent_13 } from "./Components/Visualization/EmotionMeshComponent";

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

			}
		},
		PerspectiveCamera: PerspectiveCamera_6 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_5 & {
			behaviors: {
				0: CallFunction_7,
				Call_UserPlacementManager_restartPlacement: CallFunction_7,
			}
		},
		User_PlacementManager: UserPlacementManager_8 & {
			behaviors: {

			}
		},
		XRRigARUserPlacement0: XRRigARUserPlacement_9 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_10 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_11 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_12 & {
			behaviors: {

			}
		},
		EmotionAnger: EmotionMeshComponent_13 & {
			behaviors: {

			}
		},
		EmotionFear: EmotionMeshComponent_13 & {
			behaviors: {

			}
		},
		EmotionJoy: EmotionMeshComponent_13 & {
			behaviors: {

			}
		},
		EmotionSurprise: EmotionMeshComponent_13 & {
			behaviors: {

			}
		},
		EmotionLove: EmotionMeshComponent_13 & {
			behaviors: {

			}
		},
		EmotionInterest: EmotionMeshComponent_13 & {
			behaviors: {

			}
		},
		EmotionSadness: EmotionMeshComponent_13 & {
			behaviors: {

			}
		},
		EmotionAmusement: EmotionMeshComponent_13 & {
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

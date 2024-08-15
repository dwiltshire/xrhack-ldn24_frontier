import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Group as Group_0 } from "@zcomponent/three/lib/components/Group";
import { DefaultCookieConsent as DefaultCookieConsent_1 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_2 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_3 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_4 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmotionMeshComponent as EmotionMeshComponent_5 } from "./Components/Visualization/EmotionMeshComponent";
import { XRController as XRController_6 } from "@zcomponent/three-webxr/lib/components/XRController";
import { CallFunction as CallFunction_7 } from "@zcomponent/core/lib/behaviors/CallFunction";
import { UserPlacementManager as UserPlacementManager_8 } from "@zcomponent/three-webxr/lib/components/UserPlacementManager";
import { XRRigARUserPlacement as XRRigARUserPlacement_9 } from "@zcomponent/three-webxr/lib/components/XRRigARUserPlacement";
import { XRCamera as XRCamera_10 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_11 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_12 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { PerspectiveCamera as PerspectiveCamera_13 } from "@zcomponent/three/lib/components/cameras/PerspectiveCamera";

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
		Emotion1: EmotionMeshComponent_5 & {
			behaviors: {

			}
		},
		Emotion10: EmotionMeshComponent_5 & {
			behaviors: {

			}
		},
		Emotion2: EmotionMeshComponent_5 & {
			behaviors: {

			}
		},
		Emotion3: EmotionMeshComponent_5 & {
			behaviors: {

			}
		},
		Emotion4: EmotionMeshComponent_5 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_6 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_6 & {
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
		PerspectiveCamera: PerspectiveCamera_13 & {
			behaviors: {

			}
		},
		Emotion5: EmotionMeshComponent_5 & {
			behaviors: {

			}
		},
		Emotion50: EmotionMeshComponent_5 & {
			behaviors: {

			}
		},
		Emotion6: EmotionMeshComponent_5 & {
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

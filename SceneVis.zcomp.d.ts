import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { default as Button_zcomp_0 } from "./Components/UI/Button/Button.zcomp";
import { CallFunction as CallFunction_1 } from "@zcomponent/core/lib/behaviors/CallFunction";
import { Group as Group_2 } from "@zcomponent/three/lib/components/Group";
import { EmotionAnalyzer as EmotionAnalyzer_3 } from "./Behaviours/EmotionAnalyzer";
import { ContextSetup as ContextSetup_4 } from "./ContextSetup";
import { DefaultCookieConsent as DefaultCookieConsent_5 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_6 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_7 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_8 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmotionMeshComponent as EmotionMeshComponent_9 } from "./Components/Visualization/EmotionMeshComponent";
import { ExtrudedText as ExtrudedText_10 } from "@zcomponent/three/lib/components/meshes/ExtrudedText";
import { XRController as XRController_11 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_12 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { Text as Text_13 } from "@zcomponent/three/lib/components/text/Text";
import { UserPlacementManager as UserPlacementManager_14 } from "@zcomponent/three-webxr/lib/components/UserPlacementManager";
import { XRRigARUserPlacement as XRRigARUserPlacement_15 } from "@zcomponent/three-webxr/lib/components/XRRigARUserPlacement";
import { XRCamera as XRCamera_16 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_17 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_18 } from "@zcomponent/three-webxr/lib/components/XRManager";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Button: Button_zcomp_0 & {
			behaviors: {
				0: CallFunction_1,
				CallFunction: CallFunction_1,
			}
		},
		Content_Group: Group_2 & {
			behaviors: {
				0: EmotionAnalyzer_3,
				EmotionAnalyzer: EmotionAnalyzer_3,
			}
		},
		ContextSetup: ContextSetup_4 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_5 & {
			behaviors: {

			}
		},
		DefaultEnvironment: DefaultEnvironment_6 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_7 & {
			behaviors: {

			}
		},
		Defaults: Group_2 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_8 & {
			behaviors: {

			}
		},
		EmotionAmusement: EmotionMeshComponent_9 & {
			behaviors: {

			}
		},
		EmotionAnger: EmotionMeshComponent_9 & {
			behaviors: {

			}
		},
		EmotionFear: EmotionMeshComponent_9 & {
			behaviors: {

			}
		},
		EmotionInterest: EmotionMeshComponent_9 & {
			behaviors: {

			}
		},
		EmotionJoy: EmotionMeshComponent_9 & {
			behaviors: {

			}
		},
		EmotionLove: EmotionMeshComponent_9 & {
			behaviors: {

			}
		},
		EmotionSadness: EmotionMeshComponent_9 & {
			behaviors: {

			}
		},
		EmotionSurprise: EmotionMeshComponent_9 & {
			behaviors: {

			}
		},
		ExtrudedText: ExtrudedText_10 & {
			behaviors: {

			}
		},
		ExtrudedText0: ExtrudedText_10 & {
			behaviors: {

			}
		},
		ExtrudedText_2: ExtrudedText_10 & {
			behaviors: {

			}
		},
		ExtrudedText_3: ExtrudedText_10 & {
			behaviors: {

			}
		},
		ExtrudedText_30: ExtrudedText_10 & {
			behaviors: {

			}
		},
		ExtrudedText_31: ExtrudedText_10 & {
			behaviors: {

			}
		},
		ExtrudedText_5: ExtrudedText_10 & {
			behaviors: {

			}
		},
		ExtrudedText_7: ExtrudedText_10 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_11 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_3: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_4: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_5: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_6: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_7: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_8: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_11 & {
			behaviors: {
				0: CallFunction_1,
				Call_UserPlacementManager_restartPlacement: CallFunction_1,
			}
		},
		Text: Text_13 & {
			behaviors: {

			}
		},
		UI: Group_2 & {
			behaviors: {

			}
		},
		User_PlacementManager: UserPlacementManager_14 & {
			behaviors: {

			}
		},
		XRRigARUserPlacement0: XRRigARUserPlacement_15 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_16 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_17 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_18 & {
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

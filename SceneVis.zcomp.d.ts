import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { ExtrudedText as ExtrudedText_0 } from "@zcomponent/three/lib/components/meshes/ExtrudedText";
import { default as Button_zcomp_1 } from "./Components/UI/Button/Button.zcomp";
import { CallFunction as CallFunction_2 } from "@zcomponent/core/lib/behaviors/CallFunction";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { EmotionAnalyzer as EmotionAnalyzer_4 } from "./Behaviours/EmotionAnalyzer";
import { ContextSetup as ContextSetup_5 } from "./State/utils/ContextSetup";
import { DefaultCookieConsent as DefaultCookieConsent_6 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_7 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_8 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_9 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmotionMeshComponent as EmotionMeshComponent_10 } from "./Components/Visualization/EmotionMeshComponent";
import { XRController as XRController_11 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_12 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { Text as Text_13 } from "@zcomponent/three/lib/components/text/Text";
import { XRRigARUserPlacement as XRRigARUserPlacement_14 } from "@zcomponent/three-webxr/lib/components/XRRigARUserPlacement";
import { XRCamera as XRCamera_15 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_16 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_17 } from "@zcomponent/three-webxr/lib/components/XRManager";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		AmusementLabel: ExtrudedText_0 & {
			behaviors: {

			}
		},
		AngerLabel: ExtrudedText_0 & {
			behaviors: {

			}
		},
		Button: Button_zcomp_1 & {
			behaviors: {
				0: CallFunction_2,
				CallFunction: CallFunction_2,
			}
		},
		Content_Group: Group_3 & {
			behaviors: {
				0: EmotionAnalyzer_4,
				EmotionAnalyzer: EmotionAnalyzer_4,
			}
		},
		ContextSetup: ContextSetup_5 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_6 & {
			behaviors: {

			}
		},
		DefaultEnvironment: DefaultEnvironment_7 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_8 & {
			behaviors: {

			}
		},
		Defaults: Group_3 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_9 & {
			behaviors: {

			}
		},
		EmotionAmusement: EmotionMeshComponent_10 & {
			behaviors: {

			}
		},
		EmotionAnger: EmotionMeshComponent_10 & {
			behaviors: {

			}
		},
		EmotionFear: EmotionMeshComponent_10 & {
			behaviors: {

			}
		},
		EmotionInterest: EmotionMeshComponent_10 & {
			behaviors: {

			}
		},
		EmotionJoy: EmotionMeshComponent_10 & {
			behaviors: {

			}
		},
		EmotionLove: EmotionMeshComponent_10 & {
			behaviors: {

			}
		},
		EmotionSadness: EmotionMeshComponent_10 & {
			behaviors: {

			}
		},
		EmotionSurprise: EmotionMeshComponent_10 & {
			behaviors: {

			}
		},
		ExtrudedText: ExtrudedText_0 & {
			behaviors: {

			}
		},
		ExtrudedText0: ExtrudedText_0 & {
			behaviors: {

			}
		},
		ExtrudedText_2: ExtrudedText_0 & {
			behaviors: {

			}
		},
		ExtrudedText_3: ExtrudedText_0 & {
			behaviors: {

			}
		},
		ExtrudedText_30: ExtrudedText_0 & {
			behaviors: {

			}
		},
		ExtrudedText_31: ExtrudedText_0 & {
			behaviors: {

			}
		},
		ExtrudedText_5: ExtrudedText_0 & {
			behaviors: {

			}
		},
		ExtrudedText_7: ExtrudedText_0 & {
			behaviors: {

			}
		},
		FearLabel: ExtrudedText_0 & {
			behaviors: {

			}
		},
		InterestLabel: ExtrudedText_0 & {
			behaviors: {

			}
		},
		JoyLabel: ExtrudedText_0 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_11 & {
			behaviors: {

			}
		},
		LoveLabel: ExtrudedText_0 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_20: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_3: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_30: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_4: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_40: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_5: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_50: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_6: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_60: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_7: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_70: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_8: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_80: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_11 & {
			behaviors: {
				0: CallFunction_2,
				Call_UserPlacementManager_restartPlacement: CallFunction_2,
			}
		},
		SadnessLabel: ExtrudedText_0 & {
			behaviors: {

			}
		},
		SurpriseLabel: ExtrudedText_0 & {
			behaviors: {

			}
		},
		Text: Text_13 & {
			behaviors: {

			}
		},
		UI: Group_3 & {
			behaviors: {

			}
		},
		XRRigARUserPlacement0: XRRigARUserPlacement_14 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_15 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_16 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_17 & {
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

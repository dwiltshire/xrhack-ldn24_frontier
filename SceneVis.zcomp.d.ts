import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { ExtrudedText as ExtrudedText_0 } from "@zcomponent/three/lib/components/meshes/ExtrudedText";
import { default as Button_zcomp_1 } from "./Components/UI/Button/Button.zcomp";
import { CallFunction as CallFunction_2 } from "@zcomponent/core/lib/behaviors/CallFunction";
import { PlaySound as PlaySound_3 } from "@zcomponent/core/lib/behaviors/PlaySound";
import { Group as Group_4 } from "@zcomponent/three/lib/components/Group";
import { EmotionAnalyzer as EmotionAnalyzer_5 } from "./Behaviours/EmotionAnalyzer";
import { ContextSetup as ContextSetup_6 } from "./State/utils/ContextSetup";
import { DefaultCookieConsent as DefaultCookieConsent_7 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_8 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_9 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_10 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmotionMeshComponent as EmotionMeshComponent_11 } from "./Components/Visualization/EmotionMeshComponent";
import { XRController as XRController_12 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_13 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { default as Scene_zcomp_14 } from "./Scene.zcomp";
import { Text as Text_15 } from "@zcomponent/three/lib/components/text/Text";
import { XRRigARUserPlacement as XRRigARUserPlacement_16 } from "@zcomponent/three-webxr/lib/components/XRRigARUserPlacement";
import { XRCamera as XRCamera_17 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_18 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_19 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { Audio as Audio_20 } from "@zcomponent/core/lib/components/Audio";

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
				1: PlaySound_3,
				PlaySound: PlaySound_3,
			}
		},
		Content_Group: Group_4 & {
			behaviors: {
				0: EmotionAnalyzer_5,
				EmotionAnalyzer: EmotionAnalyzer_5,
			}
		},
		ContextSetup: ContextSetup_6 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_7 & {
			behaviors: {

			}
		},
		DefaultEnvironment: DefaultEnvironment_8 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_9 & {
			behaviors: {

			}
		},
		Defaults: Group_4 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_10 & {
			behaviors: {

			}
		},
		EmotionAmusement: EmotionMeshComponent_11 & {
			behaviors: {

			}
		},
		EmotionAnger: EmotionMeshComponent_11 & {
			behaviors: {

			}
		},
		EmotionFear: EmotionMeshComponent_11 & {
			behaviors: {

			}
		},
		EmotionInterest: EmotionMeshComponent_11 & {
			behaviors: {

			}
		},
		EmotionJoy: EmotionMeshComponent_11 & {
			behaviors: {

			}
		},
		EmotionLove: EmotionMeshComponent_11 & {
			behaviors: {

			}
		},
		EmotionSadness: EmotionMeshComponent_11 & {
			behaviors: {

			}
		},
		EmotionSurprise: EmotionMeshComponent_11 & {
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
		Left_Controller: XRController_12 & {
			behaviors: {

			}
		},
		LoveLabel: ExtrudedText_0 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_20: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_3: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_30: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_4: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_40: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_5: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_50: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_6: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_60: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_7: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_70: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_8: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_80: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_12 & {
			behaviors: {
				0: CallFunction_2,
				Call_UserPlacementManager_restartPlacement: CallFunction_2,
			}
		},
		SadnessLabel: ExtrudedText_0 & {
			behaviors: {

			}
		},
		Scene: Scene_zcomp_14 & {
			behaviors: {

			}
		},
		SurpriseLabel: ExtrudedText_0 & {
			behaviors: {

			}
		},
		Text: Text_15 & {
			behaviors: {

			}
		},
		UI: Group_4 & {
			behaviors: {

			}
		},
		XRRigARUserPlacement0: XRRigARUserPlacement_16 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_17 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_18 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_19 & {
			behaviors: {

			}
		},
		Audio: Audio_20 & {
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

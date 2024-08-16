import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Group as Group_0 } from "@zcomponent/three/lib/components/Group";
import { DefaultCookieConsent as DefaultCookieConsent_1 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_2 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_3 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_4 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { XRController as XRController_5 } from "@zcomponent/three-webxr/lib/components/XRController";
import { ShadowPlane as ShadowPlane_6 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { TeleportManager as TeleportManager_7 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TurnManager as TurnManager_8 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { XRRigVRPassthrough as XRRigVRPassthrough_9 } from "@zcomponent/three-webxr/lib/components/XRRigVRPassthrough";
import { XRCamera as XRCamera_10 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_11 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_12 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { MeshStandardMaterial as MeshStandardMaterial_13 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { Sphere as Sphere_14 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { default as CalendarMenu_zcomp_15 } from "./Components/UI/Calendar/CalendarMenu.zcomp";
import { default as VoiceChatbox_zcomp_16 } from "./Components/UI/VocieChatbox/VoiceChatbox.zcomp";
import { default as DockBarMenu_zcomp_17 } from "./Components/UI/DockBar/DockBarMenu.zcomp";
import { ToggleLayerClips as ToggleLayerClips_18 } from "@zcomponent/core/lib/behaviors/ToggleLayerClips";
import { ContextSetup as ContextSetup_19 } from "./State/utils/ContextSetup";

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
		Right_Controller: XRController_5 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_6 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_7 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_8 & {
			behaviors: {

			}
		},
		UI: Group_0 & {
			behaviors: {

			}
		},
		XRRigVRPassthrough: XRRigVRPassthrough_9 & {
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
		MeshStandardMaterial0: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		Mesh_GroupDeleteMe0: Group_0 & {
			behaviors: {

			}
		},
		Sphere: Sphere_14 & {
			behaviors: {

			}
		},
		CalendarMenu: CalendarMenu_zcomp_15 & {
			behaviors: {

			}
		},
		VoiceChatbox: VoiceChatbox_zcomp_16 & {
			behaviors: {

			}
		},
		DockBarMenu: DockBarMenu_zcomp_17 & {
			behaviors: {
				0: ToggleLayerClips_18,
				ToggleLayerClips: ToggleLayerClips_18,
				1: ToggleLayerClips_18,
				ToggleLayerClips0: ToggleLayerClips_18,
			}
		},
		ContextSetup: ContextSetup_19 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		OpenCalendar: Layer & { clips: {
			CloseCalendar0: LayerClip;
			OpenCalendar0: LayerClip;
		}};
		OpenChatbox: Layer & { clips: {
			OpenChatbox0: LayerClip;
			CloseChatbox0: LayerClip;
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

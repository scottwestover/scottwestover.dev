
// You can write more code here

/* START OF COMPILED CODE */

import DurationConfigComp from "../../phaserjs_editor_scripts_custom/animations/components/DurationConfigComp.js";
import OnAwakeActionScript from "../../phaserjs_editor_scripts_custom/utils/OnAwakeActionScript.js";
import FadeActionScript from "../../phaserjs_editor_scripts_custom/animations/FadeActionScript.js";
import FromConfigComp from "../../phaserjs_editor_scripts_custom/animations/components/FromConfigComp.js";
import ToConfigComp from "../../phaserjs_editor_scripts_custom/animations/components/ToConfigComp.js";
import DelayConfigComp from "../../phaserjs_editor_scripts_custom/animations/components/DelayConfigComp.js";
import MoveToActionScript from "../../phaserjs_editor_scripts_custom/animations/MoveToActionScript.js";
import EaseConfigComp from "../../phaserjs_editor_scripts_custom/animations/components/EaseConfigComp.js";
import TimeEventActionScript from "../../phaserjs_editor_scripts_custom/timer/TimeEventActionScript.js";
import SetVisibleActionScript from "../../phaserjs_editor_scripts_custom/gameobjects/SetVisibleActionScript.js";
import PlaySpriteAnimationActionScript from "../../phaserjs_editor_scripts_custom/gameobjects/PlaySpriteAnimationActionScript.js";
import LogoFlashActionScript from "../scriptnodes/LogoFlashActionScript.js";
import CustomCameraFlashActionScript from "../scriptnodes/CustomCameraFlashActionScript.js";
import PlaySoundActionScript from "../../phaserjs_editor_scripts_custom/audio/PlaySoundActionScript.js";
import AudioLoopConfigComp from "../../phaserjs_editor_scripts_custom/audio/components/AudioLoopConfigComp.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Title extends Phaser.Scene {

	constructor() {
		super("Title");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// lightningSprite
		const lightningSprite = this.add.sprite(128, 112, "lightning_spritesheet", 0);
		lightningSprite.visible = false;

		// logoContainer
		const logoContainer = this.add.container(137, 67);

		// mirror
		const mirror = this.add.image(0, 0, "logo_spritesheet", "mirror.png");
		mirror.scaleX = 0.5;
		mirror.scaleY = 0.5;
		mirror.alpha = 0;
		mirror.alphaTopLeft = 0;
		mirror.alphaTopRight = 0;
		mirror.alphaBottomLeft = 0;
		mirror.alphaBottomRight = 0;
		logoContainer.add(mirror);

		// text
		const text = this.add.image(0, 0, "logo_spritesheet", "text.png");
		text.scaleX = 0.5;
		text.scaleY = 0.5;
		text.visible = false;
		logoContainer.add(text);

		// shineFx
		text.preFX.addShine(0.7, 0.2, 1, false);

		// bolt
		const bolt = this.add.image(0, -138, "logo_spritesheet", "bolt.png");
		bolt.scaleX = 0.5;
		bolt.scaleY = 0.5;
		logoContainer.add(bolt);

		// musicCreditText
		const musicCreditText = this.add.text(36, 195, "", {});
		musicCreditText.visible = false;
		musicCreditText.text = "Music by: Powerglove\n\nThe Power Rangers Theme";
		musicCreditText.setStyle({ "align": "center", "fontFamily": "PressStart2P-Regular", "fontSize": "8px" });

		// startIntroOnAwakeActionScript
		const startIntroOnAwakeActionScript = new OnAwakeActionScript(this);

		// fadeInMirrorActionScript
		const fadeInMirrorActionScript = new FadeActionScript(startIntroOnAwakeActionScript);

		// moveBoltToMirrorActionScript
		const moveBoltToMirrorActionScript = new MoveToActionScript(fadeInMirrorActionScript);

		// moveBoltDuringCollisionActionScript
		const moveBoltDuringCollisionActionScript = new MoveToActionScript(moveBoltToMirrorActionScript);

		// moveMirrorDuringCollisionActionScript
		const moveMirrorDuringCollisionActionScript = new MoveToActionScript(moveBoltToMirrorActionScript);

		// delayActionScriptForLightningStartAnimation
		const delayActionScriptForLightningStartAnimation = new TimeEventActionScript(moveBoltToMirrorActionScript);

		// setVisibleActionScriptForLightning
		const setVisibleActionScriptForLightning = new SetVisibleActionScript(delayActionScriptForLightningStartAnimation);

		// playSpriteAnimationActionScript
		const playSpriteAnimationActionScript = new PlaySpriteAnimationActionScript(setVisibleActionScriptForLightning);

		// timeEventActionScriptForShowingLogo
		const timeEventActionScriptForShowingLogo = new TimeEventActionScript(moveBoltToMirrorActionScript);

		// setVisibleActionScriptForTitleText
		const setVisibleActionScriptForTitleText = new SetVisibleActionScript(timeEventActionScriptForShowingLogo);

		// logoFlashActionScript
		const logoFlashActionScript = new LogoFlashActionScript(setVisibleActionScriptForTitleText);

		// setVisibleActionScript
		const setVisibleActionScript = new SetVisibleActionScript(logoFlashActionScript);

		// customCameraFlashActionScript
		const customCameraFlashActionScript = new CustomCameraFlashActionScript(moveBoltToMirrorActionScript);

		// playSoundActionScript
		const playSoundActionScript = new PlaySoundActionScript(moveBoltToMirrorActionScript);

		// lists
		const objectsToIgnoreForCameraFlash = [lightningSprite, text, mirror];

		// bolt (components)
		const boltDurationConfigComp = new DurationConfigComp(bolt);
		boltDurationConfigComp.duration = 2000;

		// fadeInMirrorActionScript (prefab fields)
		fadeInMirrorActionScript.targetGameObject = mirror;
		fadeInMirrorActionScript.fadeDirection = "FadeIn";

		// fadeInMirrorActionScript (components)
		new FromConfigComp(fadeInMirrorActionScript);
		const fadeInMirrorActionScriptToConfigComp = new ToConfigComp(fadeInMirrorActionScript);
		fadeInMirrorActionScriptToConfigComp.to = 1;
		const fadeInMirrorActionScriptDurationConfigComp = new DurationConfigComp(fadeInMirrorActionScript);
		fadeInMirrorActionScriptDurationConfigComp.duration = 800;
		const fadeInMirrorActionScriptDelayConfigComp = new DelayConfigComp(fadeInMirrorActionScript);
		fadeInMirrorActionScriptDelayConfigComp.delay = 1000;

		// moveBoltToMirrorActionScript (prefab fields)
		moveBoltToMirrorActionScript.targetGameObject = bolt;

		// moveBoltToMirrorActionScript (components)
		new DurationConfigComp(moveBoltToMirrorActionScript);
		new EaseConfigComp(moveBoltToMirrorActionScript);

		// moveBoltDuringCollisionActionScript (prefab fields)
		moveBoltDuringCollisionActionScript.targetGameObject = bolt;
		moveBoltDuringCollisionActionScript.y = 5;
		moveBoltDuringCollisionActionScript.yoyo = true;

		// moveBoltDuringCollisionActionScript (components)
		const moveBoltDuringCollisionActionScriptDurationConfigComp = new DurationConfigComp(moveBoltDuringCollisionActionScript);
		moveBoltDuringCollisionActionScriptDurationConfigComp.duration = 200;
		new EaseConfigComp(moveBoltDuringCollisionActionScript);

		// moveMirrorDuringCollisionActionScript (prefab fields)
		moveMirrorDuringCollisionActionScript.targetGameObject = mirror;
		moveMirrorDuringCollisionActionScript.y = 5;
		moveMirrorDuringCollisionActionScript.yoyo = true;

		// moveMirrorDuringCollisionActionScript (components)
		const moveMirrorDuringCollisionActionScriptDurationConfigComp = new DurationConfigComp(moveMirrorDuringCollisionActionScript);
		moveMirrorDuringCollisionActionScriptDurationConfigComp.duration = 200;
		new EaseConfigComp(moveMirrorDuringCollisionActionScript);

		// delayActionScriptForLightningStartAnimation (prefab fields)
		delayActionScriptForLightningStartAnimation.delay = 200;

		// setVisibleActionScriptForLightning (prefab fields)
		setVisibleActionScriptForLightning.targetGameObject = lightningSprite;

		// playSpriteAnimationActionScript (prefab fields)
		playSpriteAnimationActionScript.targetGameObject = lightningSprite;
		playSpriteAnimationActionScript.animationKey = "lightningStrikes";
		playSpriteAnimationActionScript.ignoreIfPlaying = true;

		// timeEventActionScriptForShowingLogo (prefab fields)
		timeEventActionScriptForShowingLogo.delay = 1200;

		// setVisibleActionScriptForTitleText (prefab fields)
		setVisibleActionScriptForTitleText.targetGameObject = text;
		setVisibleActionScriptForTitleText.visible = true;

		// logoFlashActionScript (prefab fields)
		logoFlashActionScript.targetGameObject = text;

		// setVisibleActionScript (prefab fields)
		setVisibleActionScript.targetGameObject = musicCreditText;

		// customCameraFlashActionScript (prefab fields)
		customCameraFlashActionScript.objectsToIgnore = objectsToIgnoreForCameraFlash;

		// playSoundActionScript (prefab fields)
		playSoundActionScript.audioKey = "power_glove_power_rangers";

		// playSoundActionScript (components)
		new AudioLoopConfigComp(playSoundActionScript);

		this.lightningSprite = lightningSprite;
		this.mirror = mirror;
		this.text = text;
		this.bolt = bolt;
		this.objectsToIgnoreForCameraFlash = objectsToIgnoreForCameraFlash;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	lightningSprite;
	/** @type {Phaser.GameObjects.Image} */
	mirror;
	/** @type {Phaser.GameObjects.Image} */
	text;
	/** @type {Phaser.GameObjects.Image} */
	bolt;
	/** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
	objectsToIgnoreForCameraFlash;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

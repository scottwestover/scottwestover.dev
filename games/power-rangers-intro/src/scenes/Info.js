
// You can write more code here

/* START OF COMPILED CODE */

import OnAwakeActionScript from "../../phaserjs_editor_scripts_custom/utils/OnAwakeActionScript.js";
import FadeActionScript from "../../phaserjs_editor_scripts_custom/animations/FadeActionScript.js";
import FromConfigComp from "../../phaserjs_editor_scripts_custom/animations/components/FromConfigComp.js";
import ToConfigComp from "../../phaserjs_editor_scripts_custom/animations/components/ToConfigComp.js";
import DurationConfigComp from "../../phaserjs_editor_scripts_custom/animations/components/DurationConfigComp.js";
import YoyoConfigComp from "../../phaserjs_editor_scripts_custom/animations/components/YoyoConfigComp.js";
import RepeatConfigComp from "../../phaserjs_editor_scripts_custom/animations/components/RepeatConfigComp.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Info extends Phaser.Scene {

	constructor() {
		super("Info");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// infoText
		const infoText = this.add.text(8, 48.5, "", {});
		infoText.text = "Power Ranges is owned by Hasbro.\n\n\nThis is a fan recreation of the SNES Power Ranges intro, using assets from the game created by Bandai and Saban.\n";
		infoText.setStyle({ "align": "center", "fontFamily": "PressStart2P-Regular", "fontSize": "10px" });
		infoText.setLineSpacing(3);
		infoText.setWordWrapWidth(256);

		// clickToPlayText
		const clickToPlayText = this.add.text(53, 195, "", {});
		clickToPlayText.text = "Click to start!";
		clickToPlayText.setStyle({ "align": "center", "fontFamily": "PressStart2P-Regular", "fontSize": "10px" });
		clickToPlayText.setLineSpacing(3);
		clickToPlayText.setWordWrapWidth(256);

		// onAwakeActionScript
		const onAwakeActionScript = new OnAwakeActionScript(this);

		// fadeActionScript
		const fadeActionScript = new FadeActionScript(onAwakeActionScript);

		// fadeActionScript (prefab fields)
		fadeActionScript.targetGameObject = clickToPlayText;
		fadeActionScript.fadeDirection = "FadeOut";

		// fadeActionScript (components)
		const fadeActionScriptFromConfigComp = new FromConfigComp(fadeActionScript);
		fadeActionScriptFromConfigComp.from = 1;
		new ToConfigComp(fadeActionScript);
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 1000;
		const fadeActionScriptYoyoConfigComp = new YoyoConfigComp(fadeActionScript);
		fadeActionScriptYoyoConfigComp.yoyo = true;
		const fadeActionScriptRepeatConfigComp = new RepeatConfigComp(fadeActionScript);
		fadeActionScriptRepeatConfigComp.repeat = -1;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.cameras.main.fadeIn(500, 0, 0, 0);

		this.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
			this.cameras.main.fadeOut(500, 0, 0, 0);
			this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
				this.scene.start("Title");
			});
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

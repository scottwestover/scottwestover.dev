
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CustomCameraFlashActionScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.GameObject[]} */
	objectsToIgnore = [];

	/* START-USER-CODE */

	// Write your code here.
	execute() {
		/** @type {Phaser.Scene} */
		const scene = this.scene;
		const camera = scene.cameras.add();
		camera.ignore(this.objectsToIgnore);
		scene.cameras.main.fadeOut(400, 255, 255, 255);
		scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
			scene.cameras.main.fadeIn(1000, 255, 255, 255);
		});
		scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE, () => {
			scene.cameras.remove(camera);
			this.executeChildren();
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

import ScriptNodeWithTarget from "../../phaserjs_editor_scripts_custom/base/ScriptNodeWithTarget.js";
import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LogoFlashActionScript extends ScriptNodeWithTarget {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	execute(...args) {
		const gameObject = this.getActionTargetObject(args);
		/** @type {Phaser.FX.ColorMatrix} */
		const fx = gameObject.preFX.addColorMatrix();
		fx.brightness(20);
		this.scene.tweens.addCounter({
			from: 20,
			to: 1,
			duration: 800,
			onUpdate: (tween, data) => {
				fx.brightness(data.value)
			},
			onComplete: () => {
				gameObject.preFX.remove(fx);
				this.executeChildren();
			}
	});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

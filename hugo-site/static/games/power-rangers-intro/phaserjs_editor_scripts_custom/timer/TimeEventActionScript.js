
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TimeEventActionScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	delay = 1000;
	/** @type {boolean} */
	loop = false;

	/* START-USER-CODE */

	// Write your code here.
	execute(...args) {
		/** @type {Phaser.Scene} */
		const _scene = this.scene;
		_scene.time.addEvent({
			delay: this.delay,
			loop: this.loop,
			callback: () => {
				this.executeChildren(args);
			}
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

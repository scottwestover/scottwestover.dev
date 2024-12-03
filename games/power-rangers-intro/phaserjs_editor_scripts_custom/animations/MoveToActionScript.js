
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNodeWithTarget from "../base/ScriptNodeWithTarget.js";
import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
import DurationConfigComp from "./components/DurationConfigComp.js";
import EaseConfigComp from "./components/EaseConfigComp.js";
import DelayConfigComp from "./components/DelayConfigComp.js";
/* END-USER-IMPORTS */

export default class MoveToActionScript extends ScriptNodeWithTarget {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	x = 0;
	/** @type {number} */
	y = 0;
	/** @type {boolean} */
	yoyo = false;

	/* START-USER-CODE */

	// Write your code here.
		execute(...args) {
        const gameObject = this.getActionTargetObject(args);
        const duration = DurationConfigComp.getDuration(this, 250);
        const delay = DelayConfigComp.getDelay(this, 0);
        const ease = EaseConfigComp.getEase(this, "Expo");
        this.scene.add.tween({
            targets: gameObject,
            x: this.x,
            y: this.y,
            duration,
            delay,
            ease,
						yoyo: this.yoyo,
            onComplete: () => {
                this.executeChildren();
            }
        });
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

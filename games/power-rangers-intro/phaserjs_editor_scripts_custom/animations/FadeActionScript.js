// You can write more code here
/* START OF COMPILED CODE */

import ScriptNodeWithTarget from "../base/ScriptNodeWithTarget.js";
import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
import DurationConfigComp from "./components/DurationConfigComp.js";
import EaseConfigComp from "./components/EaseConfigComp.js";
import DelayConfigComp from "./components/DelayConfigComp.js";
import FromConfigComp from "./components/FromConfigComp.js";
import ToConfigComp from "./components/ToConfigComp.js";
import YoyoConfigComp from "./components/YoyoConfigComp.js";
import RepeatConfigComp from "./components/RepeatConfigComp.js";
/* END-USER-IMPORTS */

export default class FadeActionScript extends ScriptNodeWithTarget {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
	}

	/** @type {"FadeIn"|"FadeOut"} */
	fadeDirection = "FadeIn";

	/* START-USER-CODE */
    execute(...args) {
        /** @type {Phaser.Scene} */
        const scene = this.scene;
        const sprite = this.getActionTargetObject(args);
        const duration = DurationConfigComp.getDuration(this, 250);
        const delay = DelayConfigComp.getDelay(this, 0);
        const ease = EaseConfigComp.getEase(this, "Expo");
        const fallBackFrom = this.fadeDirection === "FadeIn" ? 0 : sprite.alpha;
        const fallBackTo = this.fadeDirection === "FadeIn" ? sprite.alpha : 0;
        const from = FromConfigComp.getFrom(this, fallBackFrom);
        const to = ToConfigComp.getTo(this, fallBackTo);
        const yoyo = YoyoConfigComp.getYoyo(this, false);
        const repeat = RepeatConfigComp.getRepeat(this, 0);
        scene.add.tween({
            targets: sprite,
            alpha: { from, to },
            duration,
            delay,
            ease,
            yoyo,
            repeat,
            // repeatDelay: 500,
            onComplete: () => {
                this.executeChildren();
            }
        });
    }
}

/* END OF COMPILED CODE */
// You can write more code here
/* END-USER-CODE */

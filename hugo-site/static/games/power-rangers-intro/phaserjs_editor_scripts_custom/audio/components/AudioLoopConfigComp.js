// You can write more code here
/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AudioLoopConfigComp {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__AudioLoopConfigComp"] = this;

		/* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
	}

	/** @returns {AudioLoopConfigComp} */
	static getComponent(gameObject) {
		return gameObject["__AudioLoopConfigComp"];
	}

	/** @type {any} */
	gameObject;
	/** @type {boolean} */
	loop = true;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here

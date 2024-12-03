// You can write more code here
/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AudioVolumeConfigComp {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__AudioVolumeConfigComp"] = this;

		/* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
	}

	/** @returns {AudioVolumeConfigComp} */
	static getComponent(gameObject) {
		return gameObject["__AudioVolumeConfigComp"];
	}

	/** @type {any} */
	gameObject;
	/** @type {number} */
	volume = 1;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DurationConfigComp {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__DurationConfigComp"] = this;

		/* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
	}

	/** @returns {DurationConfigComp} */
	static getComponent(gameObject) {
		return gameObject["__DurationConfigComp"];
	}

	/** @type {any} */
	gameObject;
	/** @type {number} */
	duration = 250;

	/* START-USER-CODE */
    static getDuration(obj, defaultValue) {
        const comp = DurationConfigComp.getComponent(obj);
        if (comp) {
            return comp.duration;
        }
        return defaultValue;
    }
}
/* END OF COMPILED CODE */
// You can write more code here
/* END-USER-CODE */

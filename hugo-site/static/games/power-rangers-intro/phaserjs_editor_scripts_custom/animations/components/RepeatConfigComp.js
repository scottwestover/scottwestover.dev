// You can write more code here
/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class RepeatConfigComp {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__RepeatConfigComp"] = this;

		/* START-USER-CTR-CODE */
      // Write your code here.
      /* END-USER-CTR-CODE */
	}

	/** @returns {RepeatConfigComp} */
	static getComponent(gameObject) {
		return gameObject["__RepeatConfigComp"];
	}

	/** @type {any} */
	gameObject;
	/** @type {number} */
	repeat = 0;

	/* START-USER-CODE */
  static getRepeat(obj, defaultValue) {
      const comp = RepeatConfigComp.getComponent(obj);
      if (comp) {
          return comp.repeat;
      }
      return defaultValue;
  }
}
/* END OF COMPILED CODE */
// You can write more code here
/* END-USER-CODE */

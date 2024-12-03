// You can write more code here
/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ToConfigComp {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__ToConfigComp"] = this;

		/* START-USER-CTR-CODE */
      // Write your code here.
      /* END-USER-CTR-CODE */
	}

	/** @returns {ToConfigComp} */
	static getComponent(gameObject) {
		return gameObject["__ToConfigComp"];
	}

	/** @type {any} */
	gameObject;
	/** @type {number} */
	to = 0;

	/* START-USER-CODE */
  static getTo(obj, defaultValue) {
      const comp = ToConfigComp.getComponent(obj);
      if (comp) {
          return comp.to;
      }
      return defaultValue;
  }
}
/* END OF COMPILED CODE */
// You can write more code here
/* END-USER-CODE */

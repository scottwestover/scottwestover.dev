// You can write more code here
/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FromConfigComp {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__FromConfigComp"] = this;

		/* START-USER-CTR-CODE */
      // Write your code here.
      /* END-USER-CTR-CODE */
	}

	/** @returns {FromConfigComp} */
	static getComponent(gameObject) {
		return gameObject["__FromConfigComp"];
	}

	/** @type {any} */
	gameObject;
	/** @type {number} */
	from = 0;

	/* START-USER-CODE */
  static getFrom(obj, defaultValue) {
      const comp = FromConfigComp.getComponent(obj);
      if (comp) {
          return comp.from;
      }
      return defaultValue;
  }
}
/* END OF COMPILED CODE */
// You can write more code here
/* END-USER-CODE */

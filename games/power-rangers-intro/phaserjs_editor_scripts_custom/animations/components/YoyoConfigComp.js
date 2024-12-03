// You can write more code here
/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class YoyoConfigComp {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__YoyoConfigComp"] = this;

		/* START-USER-CTR-CODE */
      // Write your code here.
      /* END-USER-CTR-CODE */
	}

	/** @returns {YoyoConfigComp} */
	static getComponent(gameObject) {
		return gameObject["__YoyoConfigComp"];
	}

	/** @type {any} */
	gameObject;
	/** @type {boolean} */
	yoyo = false;

	/* START-USER-CODE */
  static getYoyo(obj, defaultValue) {
      const comp = YoyoConfigComp.getComponent(obj);
      if (comp) {
          return comp.yoyo;
      }
      return defaultValue;
  }
}
/* END OF COMPILED CODE */
// You can write more code here
/* END-USER-CODE */

// You can write more code here
/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EaseConfigComp {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__EaseConfigComp"] = this;

		/* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
	}

	/** @returns {EaseConfigComp} */
	static getComponent(gameObject) {
		return gameObject["__EaseConfigComp"];
	}

	/** @type {any} */
	gameObject;
	/** @type {"Power0"|"Power1"|"Power2"|"Power3"|"Power4"|"Linear"|"Quad"|"Cubic"|"Quart"|"Quint"|"Sine"|"Expo"|"Circ"|"Elastic"|"Back"|"Bounce"|"Stepped"|"Quad.easeIn"|"Cubic.easeIn"|"Quart.easeIn"|"Quint.easeIn"|"Sine.easeIn"|"Expo.easeIn"|"Circ.easeIn"|"Elastic.easeIn"|"Back.easeIn"|"Bounce.easeIn"|"Quad.easeOut"|"Cubic.easeOut"|"Quart.easeOut"|"Quint.easeOut"|"Sine.easeOut"|"Expo.easeOut"|"Circ.easeOut"|"Elastic.easeOut"|"Back.easeOut"|"Bounce.easeOut"|"Quad.easeInOut"|"Cubic.easeInOut"|"Quart.easeInOut"|"Quint.easeInOut"|"Sine.easeInOut"|"Expo.easeInOut"|"Circ.easeInOut"|"Elastic.easeInOut"|"Back.easeInOut"|"Bounce.easeInOut"} */
	ease = "Linear";

	/* START-USER-CODE */
    static getEase(obj, defaultValue) {
        const comp = EaseConfigComp.getComponent(obj);
        if (comp) {
            return comp.ease;
        }
        return defaultValue;
    }
}
/* END OF COMPILED CODE */
// You can write more code here
/* END-USER-CODE */

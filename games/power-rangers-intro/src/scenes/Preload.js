
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// logo
		const logo = this.add.image(128, 210, "editorhero-logo");
		logo.scaleX = 0.2;
		logo.scaleY = 0.2;

		// text_1
		const text_1 = this.add.text(37, 54, "", {});
		text_1.text = "Created using";
		text_1.setStyle({ "fontFamily": "PressStart2P-Regular", "fontSize": "14px" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {
		this.editorCreate();
		this.editorPreload();
	}

	create() {
		this.time.delayedCall(5000, () => {
			this.cameras.main.fadeOut(500, 0, 0, 0);
			this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
				this.scene.start("Info");
			});
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

import Preload from "./scenes/Preload.js";
import Info from "./scenes/Info.js";
import Title from "./scenes/Title.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 256,
		height: 224,
		type: Phaser.AUTO,
        backgroundColor: "#000000",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		pixelArt: true
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Info", Info);
	game.scene.add("Title", Title);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {

		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}

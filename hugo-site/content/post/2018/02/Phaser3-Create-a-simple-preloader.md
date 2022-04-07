---
title: Phaser3 - Create a simple preloader
date: 2018-02-14 17:45:42
tags: [
  "Game Development",
  "PhaserJS",
  "Tutorial"
]
categories: [
  "Game Development",
  "PhaserJS",
  "Tutorial"
]
desc: Learn how to make a simple preloader in Phaser 3.
---

With the official release of Phaser 3 this week, and Phaser 2 games not working on Phaser 3, it would be a great time to start using Phaser 3. In this tutorial, I am going to show you how to make a simple preloader in Phaser 3.

For this tutorial, we are going to keep things simple, and just put all of our code in our HTML file. To get started, we need to create an `index.html` file, add the `phaser.min.js` script, and initialize our Phaser game object. Here is an example of that:
<script src="https://gist.github.com/scottwestover/d7ab1a8b2643f038c00412960013e83e.js?file=start.html"></script>

In order to run your game, you will need to host it on a local web server. If you are not sure on how to do this, you can read more about it here: https://phaser.io/tutorials/getting-started.

If you try running your game right now, you should see an empty screen with a black box. However, if you open the console, you should see that Phaser 3 is running.

![empty game](/img/Phaser3-Create-a-simple-preloader/1.png)

Next, we will load an image into our game. For this tutorial, I am going to use the Phaser logo. You can right click on the image, and choose 'Save Image As...', or you can use any image you have. You will need to add this image to the same directory that your index.html file is in.

![Phaser logo image](/img/Phaser3-Create-a-simple-preloader/logo.png)

In the `preload` function, add the following code to load the image:
```
this.load.image('logo', 'logo.png');
```

In the `create` function, add the following code to add the image to our game:
```
var logo = this.add.image(400, 300, 'logo');
```

If you reload the game, you should see your image appear in the game.
![Phaser game step 2]](/img/Phaser3-Create-a-simple-preloader/2.png)

The image loads pretty quickly, right? Well, if your game has to load a large number assets (images, audio files, fonts, etc), or the user has a slow internet connection, it could take awhile for all your assets to load, and the user would just see a black screen. To simulate this, you can add the following code to the `preload` function below the image you loaded:
```
for (var i = 0; i < 500; i++) {
  this.load.image('logo'+i, 'assets/logo.png');
}
```

If you reload your game, you should see that it takes a little while for our game image to appear. To show the users that your game is loading, we can add a progress bar. To do this, we are going to create 2 rectangles, one for the progress bar, and one as a boarder to the bar. In the `preload` function, add the following code at the top of the function:
```
var progress = this.add.graphics();
var progressBox = this.add.graphics();
progressBox.fillStyle(0x222222, 0.8);
progressBox.fillRect(240, 270, 320, 50);
```

To update the fill of the progress bar as the assets are loaded, we listen to the `progress` event. In the `preload` function, add the following code below the code you just added:
```
this.load.on('progress', (value) => {
  progress.clear();
  progress.fillStyle(0xffffff, 1);
  progress.fillRect(250, 280, 300 * value, 30);
});
```

Lastly, we can remove the progress bar from the game by destorying it once everything is loaded. We can do this by listening to the `complete` event. Add the following code below the code you just added:
```
this.load.on('complete', () => {
  progress.destroy();
  progressBox.destroy();
});
```

If you reload your game, you should see a nice preloader that fills up as assets are loaded.
![completed preloader](/img/Phaser3-Create-a-simple-preloader/3.png)

You can find the complete code below:
<script src="https://gist.github.com/scottwestover/d7ab1a8b2643f038c00412960013e83e.js?file=index.html"></script>

I hope you enjoyed this short tutorial. If you have any questions or comments, please share them below.
---
title: Unity 2D Snake Tutorial Part 1
date: 2017-12-01 23:32:18
tags: [
  "Game Development",
  "Unity",
  "Tutorial"
]
categories: [
  "Game Development",
  "Unity",
  "Tutorial"
]
desc: Learn how to recreate the classic 2D Snake game in Unity.
---

<p> For this tutorial we are going to make a simple 2D snake game in Unity. If you are not familiar with the classic arcade game Snake, it is a game that was originally created in the 1970's, and it gained a lot of popularity when it was included on Nokia phones. The game itself has a few variants.</p>

<p>For this tutorial, the main objective of the game is to eat as many apples as you can without running into the any of the walls, obstacles, or yourself. As you eat apples, the snake will get longer, and the speed of the game will pick up, forcing the player to react faster, and to have to think strategically.</p>

<p>In order to follow along with this tutorial, you will need to have Unity installed. For this tutorial we will be using Unity 5.4.1f1, however newer versions of Unity should work just fine. One thing to note is that this is not a tutorial on how to use Unity, so it is best to have some basic understanding of Unity and how it works. However, if you are not familiar with it, you should still be able to follow along with this tutorial.</p>

<h4>Game Mechanics</h4>
<p>Before we start our project, we will need to plan out how our game will work. We will want to include the following:
<ul>
  <li>Player (Snake):
    <ul>
      <li>Starts in the center of the game</li>
      <li>Is only 1 cell big when the game starts</li>
      <li>Will move automatically at a certain speed once the game begins</li>
      <li>Will need to be able to detect player input to change the direction of the snake</li>
      <li>Will need to be able to detect collisions with the apple, wall, and the tail of the snake.</li>
      <li>When an apple is eaten, will need to increase the the cells of the snake by 1</li>
      <li>When the snake collides with a wall or itself, the game will end</li>
      <li>Will need to keep track of the direction of the snake is heading so it can update the positions of each cell of the snake</li>
    </ul>
  </li>
  <li>Apple:
    <ul>
      <li>Spawns randomly in the game area</li>
      <li>1 apple needs to spawn at the beginning of the game</li>
      <li>Need to spawn a new apple when the current one has been eaten</li>
    </ul>
  </li>
  <li>Game Over:
    <ul>
      <li>Will display the Game Over text when the game is over</li>
      <li>Will need to destroy the snake and apple objects on the screen</li>
    </ul>
  </li>
</ul>
</p>

<div>With our basic game mechanics laid out, lets get started.</div>
<h4>Project Setup</h4>
<p>For the first step, we are going to make a new 2D project in Unity. Once Unity has started, click on <b>New Project</b>.</p>
<p style="text-align: center;">
  ![screen shot 2](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot2.png)
</p>
<p>Now, we are going to setup the folder structure for our project. In the <b>Project Area</b> under the <b>Assets</b> folder, create four new folders: <b>Prefabs</b>, <b>Scenes</b>, <b>Scripts</b>, and <b>Sprites</b>.</p>
<p style="text-align: center;">
  ![screen shot 3](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot3.png)
</p>
<p>Next, we will save our current scene in the new <b>Scenes</b> folder. In the main menu, click on <b>File->Save Scene As...</b>, and in the dialog that pops up, enter <b>Main</b>, and then click the save button.</p>
<p>With our basic scene now created, we are going to import the two sprites that are used in this tutorial. Right click on the following images, and click <b>Save Image As...</b> on each one.</p>
<p style="text-align: center;">snake.png<br>
  ![snake](/img/Unity-2D-Snake-Tutorial-Part-1/snake.png)
</p>
<p style="text-align: center;">apple.png<br>
  ![apple image for our game](/img/Unity-2D-Snake-Tutorial-Part-1/apple.png)
</p>
<p>In Unity, right click on the <b>Sprites</b> folder, and choose <b>Import New Asset...</b>, you can also drag the two images directly into the folder. Once your images are imported into your project, you will need to update the <b>Pixels Per Unit</b> setting for each image. If you are not familiar with this setting, it is a basic scale that determines how many pixels are equal to one of the units in Unity. In our game, we want each part of the snake, and the apple to be equal to one unit on the screen.</p>
<p>Click on each image in the <b>Sprites</b> folder, and in the inspector, update the <b>PPU (Pixels Per Unit)</b> to <b>15</b>.</p>
<p style="text-align: center;">
  ![screen shot 4](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot4.png)
</p>
<p>The last thing we need to do for our basic project setup is update the <b>Size</b> setting of our <b>Main Camera</b>. In the Hierarchy, click on the <b>Main Camera</b>, and in the Inspector, in the Camera settings, update the default <b>Size</b> setting to <b>15</b>.</p>
<p style="text-align: center;">
  ![screen shot 5](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot5.png)
</p>

<h4>Prefabs and Game Over Text</h4>
<p>With our basic project setup completed, we are going to create two prefabs for our game, the apple and the snakeTail. From the <b>Sprites</b> folder, drag the <b>apple</b> sprite into the Hierarchy to create a new Game Object.</p>
<p style="text-align: center;">
  ![screen shot 6](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot6.png)
</p>
<p>With the apple Game Object selected, in the inspector make sure the name of the game object is <b>apple</b>, and that the position of the Game Object is (0,0,0). Now, in the inspector, click on the <b>Add Component</b> button, and in the dialog that appears, select the <b>Box Collider 2D</b> component. In the new <b>Box Collider 2D</b> settings in the inspector, click the check box for <b>Is Trigger</b>.</p>
<p>By setting this collider as a trigger, it allows for the object to not behave as a solid object, and instead allows for other colliders to pass through the Game Object. However, we will still be able to detect when another object collides with this game object.</p>
<p style="text-align: center;">
  ![screen shot 7](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot7.png)
</p>
<p>Now, drag the <b>apple</b> Game Object from the Hierarchy, into our <b>Prefabs</b> folder in the project view. By doing this, our <b>apple</b> prefab is now created. With the <b>apple</b> prefab created, we can delete our <b>apple</b> Game Object from the Hierarchy. Right click on the apple Game Object, and select <b>Delete</b> from the menu.</p>
<p>Next, we will create our <b>snakeTail</b> prefab. From the <b>Sprites</b> folder, drag the <b>snake</b> sprite into the Hierarchy to create a new Game Object.</p>
<p style="text-align: center;">
  ![screen shot 9](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot9.png)
</p>
<p>With the snake, Game Object selected, in the inspector, make sure the name of the game object is <b>snakeTail</b>, and that the position of the Game Object is (0,0,0). Now, in the inspector, click on the <b>Add Component</b> button, and in the dialog that appears, select the <b>Box Collider 2D</b> component. In the new <b>Box Collider 2D</b> settings in the inspector, click the check box for <b>Is Trigger</b>, and update the <b>Size</b> setting to be <b>0.9</b> for both X and Y.</p>
<p style="text-align: center;">
  ![screen shot 10](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot10.png)
</p>
<p>The last thing we will need to add to our <b>snakeTail</b> Game Object is a <b>Rigidbody 2D</b> component. In the inspector, click on the <b>Add Component</b> button, and in the dialog that appears, select the <b>Rigidbody 2D</b> component. In the new <b>Rigidbody 2D</b> settings, change the <b>Gravity Scale</b> setting to <b>0</b>, and check the box for <b>Is Kinematic</b>.
<p style="text-align: center;">
  ![screen shot 11](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot11.png)
</p>
<p>By selecting the <b>Is Kinematic</b> check box, we are telling Unity that all physics should not affect this Game Object, and that the rigidbody will need to be moved by a script.</p>
<p>Now, drag the <b>snakeTail</b> Game Object from the Hierarchy, into our <b>Prefabs</b> folder in the project view. By doing this, our <b>snakeTail</b> prefab is now created. With the <b>snakeTail</b> prefab created, we can delete our <b>snakeTail</b> Game Object from the Hierarchy. Right click on the snakeTail Game Object, and select <b>Delete</b> from the menu.</p>
<p>You should now have two prefabs created under the prefabs folder.</p>
<p style="text-align: center;">
  ![screen shot 12](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot12.png)
</p>
<p>With our prefabs created, we will start working on our Game Over text. In the Hierarchy, click on <b>Create->UI->Text</b>. Since this is our first UI Text object that has been added to our game, Unity will also add an EventSystem and a Canvas Game Object to our scene. Select the <b>text</b> Game Object, and in the inspector, change the <b>Name</b> of the Game Object to <b>GameOverText</b>, update the <b>Font Size</b> to <b>26</b>, uncheck the <b>Rich Text</b> check box, and update the <b>Alignment</b> to be centered vertically and horizontally.</p>
<p style="text-align: center;">
  ![screen shot 13](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot13.png)
</p>
<p>Next, change the <b>Text</b> to <b>Game Over</b>, and update the <b>Color</b> of the text to <b>Black</b>, by clicking on the rectangle that shows the current color. In the modal that appears, you can either click on the color, or enter the RGB value for the color you would like to use.</p>
<p style="text-align: center;">
  ![screen shot 15](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot15.png)
</p>
<p>Your text should look like this:</p>
<p style="text-align: center;">
  ![screen shot 14](/img/Unity-2D-Snake-Tutorial-Part-1/screenShot14.png)
</p>
<p>The last thing we need to do with our <b>Game Over</b> text is hide it, since we only want it to show to the player when the game is actually over. We can do this by changing the <b>Alpha</b> of the text to <b>0</b>. Click on the <b>Color</b> of the text to update it one more time. In the modal that appears, change the value for <b>A</b> (alpha) from 255 to <b>0</b>. This should now hide the text on the screen.

<p>With the Game Over text now created, this concludes part 1 of our tutorial. In part 2, we will create our game controller, and start working on the actual game play.</p>
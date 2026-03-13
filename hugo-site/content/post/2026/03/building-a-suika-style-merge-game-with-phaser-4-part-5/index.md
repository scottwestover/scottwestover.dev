---
title: "Building a Suika-Style Merge Game with Phaser 4 Part 5: Performance with Object Pooling"
date: 2026-04-15 08:00:02
tags: [
  "HTML5",
  "Game Development",
  "JavaScript",
  "Tutorial",
  "PhaserJS",
  "Phaser4",
  "Suika"
]
categories: [
  "HTML5",
  "Game Development",
  "JavaScript",
  "Tutorial",
  "PhaserJS",
  "Phaser4",
  "Suika"
]
desc: "This is the fifth part of a tutorial series on building a Suika-style merge game with Phaser 4. This part focuses on optimizing game performance by implementing object pooling for fruits, reducing garbage collection and improving frame rates."
draft: true
thumbnail: "/post/2026/03/building-a-suika-style-merge-game-with-phaser-4-part-5/images/building-a-suika-style-merge-game-with-phaser-4-part-5-thumbnail.png"
toc: false
---

In the [part 4](/post/2026/03/building-a-suika-style-merge-game-with-phaser-4-part-4/), we implemented the scoring and game-over conditions, making our game fully functional. While the game works, continuously creating new fruit objects and destroying old ones can lead to performance issues, especially in games where many objects are spawned and removed frequently.

In this part, we will optimize our game by implementing **object pooling** for the fruits. This is a common and important best practice in game development that significantly improves performance.

We will:
- Understand the concept of object pooling.
- Modify our `#addFruit` method to retrieve and reinitialize objects from a pool.
- Update our merge logic to "return" merged fruits to the pool instead of destroying them.



## What is Object Pooling?

Object pooling is a design pattern used in game development to manage the creation and destruction of objects. Instead of creating a new object every time one is needed and destroying it when it's no longer used, object pooling keeps a "pool" of pre-instantiated (or previously used) objects. When an object is needed, it's retrieved from the pool, initialized, and used. When it's no longer needed, it's not destroyed but rather returned to the pool and marked as inactive, ready to be reused later.

This reduces the overhead of memory allocation and garbage collection, leading to smoother gameplay and fewer performance spikes.



## Initializing Our Pool (Revisited)

We already set up our fruit group in Part 1. This `Phaser.GameObjects.Group` is perfect for implementing object pooling because it comes with built-in methods like `getFirstDead()`.

```javascript
// Inside the create() method of GameScene
create() {
  // ... (previous setup code)

  // create group for re-using fruit objects
  this.#fruitGroup = this.add.group();

  // ...
}
```

This group will hold all our fruit game objects, whether they are active on screen or currently inactive in the pool.



## Modifying `#addFruit` for Pooling

Our current `#addFruit` method always creates a new fruit. We need to modify it to first try to get an inactive fruit from our pool.

Let's update the `#addFruit` method:

```javascript
// Inside the GameScene class

/**
 * Creates a new fruit game object with a physics body at the given position,
 * utilizing object pooling for performance.
 * @param {number} x The x-coordinate for the new fruit.
 * @param {number} y The y-coordinate for the new fruit.
 * @param {Fruit} fruit The fruit configuration object.
 * @returns {Phaser.Physics.Matter.Image} The created fruit game object.
 */
#addFruit(x, y, fruit) {
  /** @type {null | Phaser.Physics.Matter.Image } */
  let gameObject = this.#fruitGroup.getFirstDead(false); // Try to get an inactive fruit from the pool

  if (!gameObject) {
    // If no inactive fruit is available, create a new one
    console.log('No existing fruit in pool, creating a new one.');
    gameObject = this.matter.add.image(x, y, ASSET_KEYS.FRUITS, fruit.frame);
    this.#fruitGroup.add(gameObject); // Add the new object to our group/pool
  } else {
    // If an inactive fruit is found, re-initialize it
    console.log('Reusing fruit from pool.');
    gameObject.setActive(true).setVisible(true); // Make it active and visible again
    this.matter.world.add(gameObject.body); // Re-add its physics body to the active world
  }

  // Common setup for both new and re-used fruits
  gameObject
    .setCircle(fruit.radius)
    .setFrame(fruit.frame)
    .setDisplaySize(fruit.radius * 2, fruit.radius * 2)
    .setFriction(0.005)
    .setBounce(0.2);

  // Crucially, reset its position and physics state
  gameObject.setPosition(x, y);
  gameObject.setStatic(false); // Ensure it's not static if it was returned as static
  gameObject.setVelocity(0, 0); // Clear any old velocities
  gameObject.setAngularVelocity(0); // Clear any old angular velocities

  // Also reset game-specific data, such as the `isDropping` flag and any associated timers
  /** @type {Phaser.Time.TimerEvent} */
  const storedTimer = gameObject.getData('dropTimer');
  if (storedTimer) {
    storedTimer.remove(); // Clear any existing game-over check timers
  }

  // leave remaining code as is
  gameObject.setData('isDropping', true);
  // ... existing code for events
}
```

The key changes are:
1.  **`getFirstDead(false)`:** This attempts to retrieve an inactive object from the group.
2.  **`if (!gameObject)`:** If no inactive object is found, a new one is created, just like before.
3.  **`else` block:** If an inactive object *is* found, we re-enable it (`setActive(true)`, `setVisible(true)`) and, critically, re-add its physics body to the Matter.js world (`this.matter.world.add(gameObject.body)`).
4.  **Resetting State:** For both new and re-used objects, we must ensure all properties (position, velocity, etc.) are correctly reset to their initial state for the new fruit. This includes `setStatic(false)` to ensure it can move again.
5. We check to see if there is a stored timer from when we spawn the game object, and we clear it. This makes sure if we re-use a game object before the timer goes off, it will not trigger until we finish spawning the re-used object.



## Updating Merge Logic to Release Objects

Now that `#addFruit` can reuse objects, we need to modify our merge logic in the `COLLISION_START` handler. Instead of calling `destroy()` on the merged fruits, we will "return" them to the pool by making them inactive and removing their physics bodies from the active simulation.

In your `COLLISION_START` event handler from Part 3, replace the following code:

```javascript
objectA.destroy();
objectB.destroy();
```

with this:

```javascript
// Instead of destroying, return the objects to the pool
objectA.setActive(false).setVisible(false);
objectB.setActive(false).setVisible(false);

// It's important to set them as static and remove their bodies from the active Matter world
// This prevents them from interfering with physics while in the pool
objectA.setStatic(true);
objectB.setStatic(true);
this.matter.world.remove(objectA.body);
this.matter.world.remove(objectB.body);
```

By setting `setActive(false)`, `setVisible(false)`, `setStatic(true)`, and `this.matter.world.remove(objectA.body)`, we effectively "deactivate" the fruits and remove them from the active game state without fully destroying them. They remain in the `this.#fruitGroup`, ready to be picked up by `getFirstDead()` in a future `#addFruit` call.

![example 1](./images/building-a-suika-style-merge-game-with-phaser-4-part-5-1.png)



## Benefits of Object Pooling

Implementing object pooling provides several advantages:
-   **Reduced Garbage Collection:** Fewer objects are created and destroyed, leading to less work for the JavaScript garbage collector and smoother frame rates.
-   **Improved Performance:** Reusing existing objects is generally faster than allocating new memory and initializing fresh objects.
-   **Predictable Performance:** It helps avoid performance spikes that can occur when many objects are destroyed or created simultaneously.



## Checkpoint

Your game now includes a robust object pooling system for fruits. While you might not see a drastic difference in a simple game with few objects, this practice becomes essential for more complex games or those with a high volume of dynamic objects. You've significantly improved your game's efficiency under the hood!



## Next Up

**Part 6: Implementing a Restart System**

With a game-over condition in place, the next logical step is to allow the player to restart the game and play again. In Part 6, we'll implement a full restart system to complete the basic game loop.

<!--With a game-over condition in place, the next logical step is to allow the player to restart the game and play again. In [part 6](/post/2026/03/building-a-suika-style-merge-game-with-phaser-4-part-6/), we'll implement a full restart system to complete the basic game loop.-->

You can find the completed source code for this article here on GitHub: [Part 5 Source Code](https://github.com/devshareacademy/phaser-4-suika-game/tree/5_object_pool)

If you run into any issues, please reach out via [GitHub Discussions](https://github.com/devshareacademy/phaser-4-suika-game/discussions), or leave a comment down below.

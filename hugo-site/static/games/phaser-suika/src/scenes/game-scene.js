import Phaser from '../lib/phaser.js';
import { SCENE_KEYS } from '../common/scene-keys.js';
import { ASSET_KEYS } from '../common/assets.js';

/** @type {readonly Fruit[]} */
const FRUITS = Object.freeze([
  { frame: 'fruit_1.png', radius: 30 },
  { frame: 'fruit_2.png', radius: 35 },
  { frame: 'fruit_3.png', radius: 40 },
  { frame: 'fruit_4.png', radius: 50 },
  { frame: 'fruit_5.png', radius: 65 },
  { frame: 'fruit_6.png', radius: 70 },
  { frame: 'fruit_7.png', radius: 80 },
  { frame: 'fruit_8.png', radius: 90 },
  { frame: 'fruit_9.png', radius: 100 },
  { frame: 'fruit_10.png', radius: 110 },
]);

const CUSTOM_EVENTS = Object.freeze({
  CEILING_HIT: 'CEILING_HIT',
});

export class GameScene extends Phaser.Scene {
  /** @type {number} */
  #score = 0;
  /** @type {Phaser.GameObjects.Group} */
  #fruitGroup;
  /** @type {Phaser.Types.Physics.Matter.MatterBody} */
  #ceiling;
  /** @type {Phaser.GameObjects.Image} */
  #dropper;
  /** @type {boolean} */
  #isGameOver;
  /** @type {Phaser.GameObjects.Text} */
  #scoreText;
  /** @type {Phaser.GameObjects.Text} */
  #gameOverText;
  /** @type {Phaser.GameObjects.Text} */
  #restartGameText;

  constructor() {
    super({
      key: SCENE_KEYS.GAME_SCENE,
    });
  }

  create() {
    if (!this.input.keyboard) {
      return;
    }

    // add background - tilesprite so it takes full width/height and repeats
    this.add.tileSprite(0, 0, this.scale.width, this.scale.height, ASSET_KEYS.BACKGROUND).setOrigin(0, 0);

    // create group for re-using fruit objects
    this.#fruitGroup = this.add.group();
    // create fruit dropper to show where fruit will fall from
    this.#dropper = this.add.image(0, 0, ASSET_KEYS.FRUITS, FRUITS[0].frame);
    this.#updateDropperGameObject(FRUITS[0]);

    // create boundary line
    this.add.image(-10, 150, ASSET_KEYS.DASHED_LINE).setOrigin(0).setAngle(-90).setScale(1, 1.25);

    // Initialize score
    this.#score = 0;
    // Add score text
    this.#scoreText = this.add.text(10, 10, `Score: ${this.#score}`, {
      fontSize: '32px',
      color: '#000000',
    });
    // Initialize Game Over UI elements (initially hidden)
    this.#gameOverText = this.add
      .text(this.scale.width / 2, this.scale.height / 2 - 50, 'GAME OVER', {
        fontSize: '64px',
        color: '#000000',
        fontStyle: 'bold',
      })
      .setOrigin(0.5)
      .setDepth(2)
      .setVisible(false);

    this.#restartGameText = this.add
      .text(this.scale.width / 2, this.scale.height / 2 + 50, 'Click to play again!', {
        fontSize: '32px',
        color: '#000000',
        fontStyle: 'bold',
      })
      .setOrigin(0.5)
      .setDepth(2)
      .setVisible(false);

    // setup physics world
    this.matter.world.setBounds(0, 0, this.scale.width, this.scale.height - 1);
    // setup boundary for objects to not leave current view
    this.#ceiling = this.matter.add.rectangle(this.scale.width / 2, 50, this.scale.width, 200);
    this.#ceiling.isStatic = true;
    this.#ceiling.isSensor = true;

    this.#setupEventListeners();

    console.log('Scene is ready!');
  }

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

    gameObject.setData('isDropping', true); // Mark fruit as currently dropping

    gameObject.setOnCollideEnd((event) => {
      // If the fruit stops colliding with the ceiling, it's no longer 'dropping' from that contact
      if (event.bodyA === this.#ceiling || event.bodyB === this.#ceiling) {
        gameObject.setData('isDropping', false);
      }
    });

    const dropTimer = this.time.delayedCall(1000, () => {
      gameObject.setData('dropTimer', undefined);
      // After 1 second, if the fruit is still marked as 'dropping' and overlaps the ceiling,
      // it means it has settled there.
      if (gameObject.active && gameObject.getData('isDropping')) {
        gameObject.setData('isDropping', false);
        if (this.matter.overlap(gameObject, [this.#ceiling])) {
          this.events.emit(CUSTOM_EVENTS.CEILING_HIT);
        }
      }
    });
    gameObject.setData('dropTimer', dropTimer); // Store timer to potentially clear if fruit moves

    gameObject.setOnCollideWith(this.#ceiling, () => {
      // If a fruit collides with the ceiling *after* its initial drop phase
      if (!gameObject.getData('isDropping')) {
        this.events.emit(CUSTOM_EVENTS.CEILING_HIT);
      }
    });

    return gameObject;
  }

  /**
   * Updates the dropper game object to match the provided fruit configuration.
   * @param {Fruit} fruit The fruit configuration object.
   */
  #updateDropperGameObject(fruit) {
    this.#dropper
      .setTexture(ASSET_KEYS.FRUITS, fruit.frame)
      .setDisplaySize(fruit.radius * 2, fruit.radius * 2)
      .setY(fruit.radius); // Position it just below the top edge
    this.#updateDropperXPosition(this.input.activePointer.x);
  }

  /**
   * Updates the dropper's X position, clamping it within the screen bounds.
   * @param {number} x The target x coordinate.
   */
  #updateDropperXPosition(x) {
    const padding = 10;
    const radius = this.#dropper.displayWidth / 2;
    // Clamp the position to keep the dropper fully on-screen
    if (x < radius + padding) {
      x = radius + padding;
    } else if (x > this.scale.width - radius - padding) {
      x = this.scale.width - radius - padding;
    }
    this.#dropper.setX(x);
  }

  #setupEventListeners() {
    this.input.on(Phaser.Input.Events.POINTER_MOVE, (pointer) => {
      this.#updateDropperXPosition(pointer.x);
    });

    this.input.on(Phaser.Input.Events.POINTER_UP, () => {
      if (!this.#dropper.visible || this.#isGameOver) {
        return; // Don't drop if game is over or dropper is hidden
      }

      // Hide the dropper for a moment for feedback and to prevent spam
      this.#dropper.setVisible(false);
      this.time.delayedCall(500, () => this.#dropper.setVisible(true));

      // Get the current fruit from the dropper and add it to the physics world
      const currentFruit = FRUITS.find((fruit) => fruit.frame === this.#dropper.frame.name);
      this.#addFruit(this.#dropper.x, this.#dropper.y, currentFruit);

      // Generate the next fruit for the dropper
      // For now, we only allow the first 5 smallest fruits to be dropped
      const nextFruit = FRUITS[Math.floor(Math.random() * 5)];
      this.#updateDropperGameObject(nextFruit);
    });

    this.matter.world.on(
      Phaser.Physics.Matter.Events.COLLISION_START,
      (/** @type {Phaser.Physics.Matter.Events.CollisionStartEvent} */ event) => {
        // Loop through all pairs of colliding bodies
        for (const pair of event.pairs) {
          const objectA = /** @type {Phaser.Physics.Matter.Image} */ (pair.bodyA.gameObject);
          const objectB = /** @type {Phaser.Physics.Matter.Image} */ (pair.bodyB.gameObject);

          // Check if the two colliding objects are fruits of the same type
          if (objectA && objectB && objectA.frame.name === objectB.frame.name) {
            const fruitIndex = FRUITS.findIndex((fruit) => fruit.frame === objectA.frame.name);

            // If it's a valid fruit and not the largest one
            if (fruitIndex < FRUITS.length - 1) {
              // Instead of destroying, return the objects to the pool
              objectA.setActive(false).setVisible(false);
              objectB.setActive(false).setVisible(false);

              // It's important to set them as static and remove their bodies from the active Matter world
              // This prevents them from interfering with physics while in the pool
              objectA.setStatic(true);
              objectB.setStatic(true);
              this.matter.world.remove(objectA.body);
              this.matter.world.remove(objectB.body);

              // Update the score!
              this.#score += (fruitIndex + 1) * 2;
              this.#scoreText.setText(`Score: ${this.#score}`); // Update display

              // Get the definition for the next fruit in the progression
              const newFruit = FRUITS[fruitIndex + 1];

              // Add the new, larger fruit at the collision point
              this.#addFruit(pair.bodyB.position.x, pair.bodyB.position.y, newFruit);

              // We handled this pair, so we can stop checking
              return;
            }
          }
        }
      },
    );

    // end the game once the fruits reach the top of the ceiling
    this.events.on(CUSTOM_EVENTS.CEILING_HIT, () => {
      if (this.#isGameOver) {
        return; // Don't restart if game is already over
      }
      console.log('Game Over!'); // For debugging
      this.#isGameOver = true;
      this.#dropper.setVisible(false); // Hide the dropper

      // Display game over UI
      this.#gameOverText.setVisible(true);
      this.#restartGameText.setVisible(true);
      this.input.once(Phaser.Input.Events.POINTER_DOWN, this.#restartGame, this);
    });
  }

  /**
   * Resets the game state and starts a new game.
   */
  #restartGame() {
    // Reset game flags and score
    this.#isGameOver = false;
    this.#score = 0;
    this.#scoreText.setText(`Score: ${this.#score}`); // Update the score display

    // Hide game over UI
    this.#gameOverText.setVisible(false);
    this.#restartGameText.setVisible(false);

    // Clear all existing fruits from the screen and return them to the object pool
    this.#fruitGroup.getChildren().forEach((fruit) => {
      // Ensure it's a Matter.Image before trying to access Matter properties
      if (fruit instanceof Phaser.Physics.Matter.Image) {
        fruit.setActive(false).setVisible(false); // Make it inactive and invisible
        fruit.setStatic(true); // Set it to static to prevent physics interactions
        // Safely remove the physics body from the Matter world if it still has one
        if (fruit.body) {
          this.matter.world.remove(fruit.body);
        }
      }
    });

    // Reset the dropper to its initial state
    const initialFruit = FRUITS[0];
    this.#updateDropperGameObject(initialFruit);
    this.#dropper.setVisible(true); // Make the dropper visible again

    // If you had any other timers, game-specific variables, or temporary effects,
    // this is where you would reset or clear them.
  }
}

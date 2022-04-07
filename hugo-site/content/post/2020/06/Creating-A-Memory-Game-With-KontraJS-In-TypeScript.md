---
title: Creating A Memory Game With KontraJS in TypeScript
date: 2020-06-15 00:00:01
tags: [
  "TypeScript",
  "Tutorial",
  "Game Development",
  "Memory Game",
  "KontraJS"
]
categories: [
  "TypeScript",
  "Tutorial",
  "Game Development",
  "Memory Game",
  "KontraJS"
]
desc: Learn how to build a simple Memory Game with Kontra.JS in TypeScript.
draft: true
---

### Intro

The purpose of this tutorial is to to show you how to create a simple Memory Game by utilizing the <a href="https://straker.github.io/kontra/" target="_blank">Kontra</a> library. For this tutorial, we will be taking an existing Memory Game class that contains the core logic for our game and we will extend this class to work with Kontra.js. Our goal is to limit all of the presentation logic to the Kontra library while keeping the core game logic in a separate file, that way we can easily reuse our classes.

We will be reusing the `MemoryGame` class that was built in a previous tutorial. In case you missed the tutorial, you can find it here: <a href="https://scottwestover.github.io/post/2020/06/creating-a-memory-game-in-typescript/" target="_blank">Creating A Memory Game Class in TypeScript</a>.

You can find the complete code for this tutorial here: <a href="https://github.com/scottwestover/typescript-basic-memory-game-kontrajs" target="_blank">GitHub - TypeScript Basic Memory Game With Kontra.js</a>

### Requirements

In order to follow along with this tutorial, you will need to have Nodejs and NPM installed on your computer, or have access to a computing resource that does. For this tutorial, I will be using <a href="https://yarnpkg.com/" target="_blank">Yarn</a> for my package manager, however you can following along by running the same commands with `npm`.

You will also need to have <a href="https://parceljs.org/" target="_blank">Parcel</a> installed globally. You can do this by running one of the following commands:

Yarn:

```bash
yarn global add parcel-bundler
```

npm:

```bash
npm install -g parcel-bundler
```

Having experience with TypeScript and JavaScript would also be beneficial, since I will not be covering the basics of these languages in this tutorial.

### Setup

https://github.com/scottwestover/typescript-basic-memory-game-kontrajs

To make getting started as simple as possible, we are going to use the code from the <a href="https://scottwestover.github.io/post/2020/06/creating-a-memory-game-in-typescript/" target="_blank">Creating A Memory Game Class in TypeScript</a> tutorial that has a few modifications to include the <a href="https://straker.github.io/kontra/" target="_blank">Kontra.js</a> library. In order to follow along, you will need to either clone or download the code from the following repository: <a href="https://github.com/scottwestover/typescript-basic-memory-game-kontrajs" target="_blank">GitHub - TypeScript Basic Memory Game With Kontra.js</a>.

Once you have the source code, you will need to install the dependencies for the project by running the following command:

```bash
yarn install --frozen-lockfile
```

Once all of the dependencies are installed, you should be able to run `yarn start` to start the web server on port `8080` and you should be able to navigate to `http://localhost:8080` in your web browser and see the following page:

![Template](/img/Creating-A-Memory-Game-In-JavaScript/Creating-A-Memory-Game-In-JavaScript1.png)

With our project now set up, we can start building our game!

### Card Types

The first thing we are going to do is create an enum that will represent the different card types in our game, and for our game we will be using colors to represent the different cards in our game. To do this, create a new folder called `kontra` in the `src/app` folder. Then in this new folder, create a new file called `KontraCardType.ts` and add the following code:

```typescript
enum KontraCardType {
  red = 'red',
  blue = 'blue',
  green = 'green',
  yellow = 'yellow',
  purple = 'purple',
  pink = 'pink',
  orange = 'orange',
  brown = 'brown',
}

export default KontraCardType;

```

### Kontra Card Class

Now that we have defined the possible card types for our game, we need to build out the `Kontra` implementation of our `Card` class. To do this, we will need to make use of `mixins`. Normally, when you want to a `class` to extend another `class`, you are limited to only extending one class. This can be problematic when you want a new class to be derived from two classes. For the `KontraCard` class, we are going to need to extend our custom `Card` class and the `Sprite` class from `Kontra` since we are going to render out the cards in our game.

If you are not familiar, <a href="https://www.typescriptlang.org/docs/handbook/mixins.html" target="_blank">mixins</a> are a way for us to build a new class from smaller reusable components. Or, in the case of our game, we are going to build a class from two other classes. To do this, we will need to use a helper function called `applyMixins`. In the `src/app` folder, create a new file called `applyMixins.ts` and place the following code in that file:

```typescript
export default function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      const baseCtorName = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
      if (!baseCtorName) {
        return;
      }
      Object.defineProperty(derivedCtor.prototype, name, baseCtorName);
    });
  });
}
```

Basically, this function will take an array of objects that we want to copy properties and methods from, and copy those values over to another object. As an example, we are going to create a new class called `MixedKontraCard` and this class will extend both the `Card` and `Sprite` classes, so the `applyMixins` function will copy all of the properties and methods from both of these classes and add them to the `MixedKontraCard` class.

Now that we have the `mixins` available, we need to create the `MixedKontraCard` class. To do this, create a new file called `MixedKontraCard.ts` in the `src/app/kontra` folder and add the following code:

```typescript
import { Sprite } from 'kontra';
import Card from '../Card';
import applyMixins from '../applyMixins';

class MixedKontraCard {}
interface MixedKontraCard extends Card, Sprite {}
applyMixins(MixedKontraCard, [Card, Sprite]);

export default MixedKontraCard;
```

Finally, we need to create a new `KontraCard` class that extends the `MixedKontraCard` class. By extending the `MixedKontraCard` class, we will be able to access the methods from the two parent classes. To do this, create a new file called `KontraCard.ts` in the `src/app/kontra` folder and add the following code:

```typescript
import MixedKontraCard from './MixedKontraCard';

export default class KontraCard extends MixedKontraCard {
  public async flipCard(): Promise<void> {
    await super.flipCard();
    // TODO
  }

  public flipCardFaceDown(): void {
    super.flipCardFaceDown();
    this.color = 'black';
  }
}
```

In the code above, we extended the `MixedKontraCard` class and we overrode the `flipCard` and `flipCardFaceDown` methods. For both of these methods, we want to run the logic in the parent method and then run some additional logic, so to do this, we use the `super` keyword to call the parent method that we are overriding. In the `flipCardFaceDown` method, we want the `backs` of our cards to be shown to the player, so in our game we will just be using the color black to represent this.

### Flip Card

For the `flipCard` method, when we render the card to the canvas, we will need to update the `color` property from the `Sprite` class, that way when the sprite is being drawn to the screen, the player can tell if a card is face up or face down. For this example, we won't be doing any type of animation, but instead we will add a small delay that could easily be updated with an animation of the card flipping over. To do this, replace all of the code in the `KontraCard.ts` file with the following code:

```typescript
import MixedKontraCard from './MixedKontraCard';
import sleep from '../sleep';

export default class KontraCard extends MixedKontraCard {
  public async flipCard(): Promise<void> {
    await super.flipCard();

    if (!this.isVisible()) {
      await sleep(500);
      this.color = 'black';
    } else {
      this.color = this.getType();
      await sleep(500);
    }
  }

  public flipCardFaceDown(): void {
    super.flipCardFaceDown();
    this.color = 'black';
  }
}
```

In the `flipCard` method, we first check to see if the card is not visible and if the card is not visible we set the color to black, and if the card is visible then we get the type from the card and set the color to that value.

Next, in the `src/app` folder create a new file called `sleep.ts` and add the following code:

```typescript
export default function sleep(ms: number = 0) {
  return new Promise((r) => setTimeout(r, ms));
}
```

In the code above, we are wrapping the `setTimeout` method in a `Promise` that way we can use `async` and `await` with it.

### Kontra Memory Game Class

Now that we have our `KontraCard` class, we need to create a Kontra implementation of the `MemoryGame` class.

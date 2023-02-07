---
title: Build A Connect Four Library In TypeScript - Part 5
date: 2023-01-24 06:00:02
tags: [
  "HTML5",
  "Game Development",
  "TypeScript",
  "Tutorial"
]
categories: [
  "HTML5",
  "Game Development",
  "TypeScript",
  "Tutorial"
]
desc: Learn to create a reusable Connect Four library in TypeScript! This reusable library can be used to build any number of implementations of a Connect Four game - both for the web and CLI.
draft: true
thumbnail: "/post/2023/02/build-a-connect-four-library-in-typescript-part-5/images/build-a-connect-four-library-in-typescript-part-5-thumbnail.png"
toc: true
---

In this series, we will go over how to create a reusable TypeScript class that can be used to build the game Connect Four, and in a future series we will see how we can use this library to create implementations of the Connect Four game for the CLI and the web.

Previously, in [part 4](/post/2023/01/build-a-connect-four-library-in-typescript-part-4/), we finished updating the logic for checking if a player won the game by getting a Connect Four.

In this part of the series, we are going to work on updating our game logic to return the winning game cells, and we will do some code refactoring by moving our type definitions to a new file.

## Series Code

You can find the code for the end of part 4 here: [Blog Post 4 Code](https://github.com/devshareacademy/connect-four/tree/blog-post-4)

You can find the completed source code for this article here on GitHub: [Blog Post 5 Code](https://github.com/devshareacademy/connect-four/tree/blog-post-5)

Lastly, if you would just like to use a NPM package for this library, you can find that here: [NPM - @devshareacademy/connect-four](https://www.npmjs.com/package/@devshareacademy/connect-four).

## Code Refactoring

Before we start adding any more logic to our class, we are going to do some small refactoring to help keep our project a little more organized. As our project gets a bigger, its important to make sure we are not putting too much code in one file. So, we are going to take all of our `types` in our `src/connect-four.ts` file and move these definitions to a new file.

To do this, create a new folder called `types` under the `src` folder, and in this folder create a new file called `index.ts`. In the new file, `src/types/index.ts`, add the following code:

```typescript
/* Represents the two player identifiers for the Connect Four game. */
export enum Player {
  ONE = 'ONE',
  TWO = 'TWO',
}

/* Represents the possible values of a cell in the Connect Four board. */
export type CellRange =
  | 0 // empty cell
  | 1 // player one game piece
  | 2; // player two game piece

export enum ConnectFourError {
  INVALID_MOVE = 'Column is already filled, please provide a different column.',
  INVALID_COLUMN = 'Invalid column specified. Please provide a valid column number.',
  INVALID_MOVE_GAME_IS_OVER = 'Game has already ended, please reset the game.',
}

export type Coordinate = {
  col: number;
  row: number;
};
```

Then, back in the `src/connect-four.ts` file, go ahead and remove all of that code from the file. Next, we will need to fix the references to these `types` by adding a new `import` statement to the top of our `src/connect-four.ts` file:

```typescript
import { ConnectFourError, Player, CellRange, Coordinate } from './types';
```

Finally, before we can test our change, we will need to update our `import` statement in our `tests/connect-four.ts` file. Replace the following line:

```typescript
import { CellRange, Coordinate, Player } from '../src/connect-four';
```

with the following line:

```typescript
import { CellRange, Coordinate, Player } from '../src/types';
```

Now, if you go ahead and run the tests, we should see that everything is still passing!

You can run the tests by running one of the following commands:

```bash
# NPM Package Manager
npm run test

# Yarn Package Manager
yarn test
```

## Returning The Winning Cells

Now that we have moved our type definitions to a new file, we are going to update our Connect Four class to have a new property that will be used for tracking the winning coordinates that make up a Connect Four on our game board. By adding this new property, anyone that uses our library will be able to do things like show which game pieces where used in a winning Connect Four combination.

To add this functionality, we will need to add a new private property to our class called `#winningCells`. To do this, add the following code near the top of our `ConnectFour` class in the `src/connect-four.ts` file:

```typescript
/* used for tracking what cells make up a winning Connect Four combination */
#winningCells: Coordinate[] = [];
```

Since this is a private property, we will need to create a new `getter` that can be used to get this value. To do this, add the following code to the `ConnectFour` class:

```typescript
get winningCells(): Coordinate[] {
  return JSON.parse(JSON.stringify(this.#winningCells)) as Coordinate[];
}
```

Lastly, we will need to update all of our existing methods for checking for a player won the game to set this new property. In the `#isHorizontalWin` method of our class, replace the following code:

```typescript
if (isWin) {
  return true;
}
```

with the following code:

```typescript
if (isWin) {
  this.#winningCells = [
    { col, row },
    { col: col + 1, row },
    { col: col + 2, row },
    { col: col + 3, row },
  ];
  return true;
}
```

In the code above, we are just setting the value of the `#winningCells` property to be an array of objects that contain the column and row values of the cells that we checked in the `#isHorizontalWin` method.

Next, in the `#isVerticalWin` method, add the following code above the `return` statement:

```typescript
if (isWin) {
  this.#winningCells = [
    { col, row },
    { col: col + 1, row },
    { col: col + 2, row },
    { col: col + 3, row },
  ];
  return true;
}
```

Then, in the `#isForwardSlashWin` method, replace the following code:

```typescript
if (isWin) {
  return true;
}
```

with the following code:

```typescript
if (isWin) {
  this.#winningCells = [
    { col: tempCol, row: tempRow },
    { col: tempCol + 1, row: tempRow - 1 },
    { col: tempCol + 2, row: tempRow - 2 },
    { col: tempCol + 3, row: tempRow - 3 },
  ];
  return true;
}
```

Finally, in the `#isBackwardSlashWin` method, replace the following code:

```typescript
if (isWin) {
  return true;
}
```

with the following code:

```typescript
if (isWin) {
  this.#winningCells = [
    { col: tempCol, row: tempRow },
    { col: tempCol + 1, row: tempRow - 1 },
    { col: tempCol + 2, row: tempRow - 2 },
    { col: tempCol + 3, row: tempRow - 3 },
  ];
  return true;
}
```

## Wrap Up

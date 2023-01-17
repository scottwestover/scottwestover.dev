---
title: Build A Connect Four Library In TypeScript - Part 3
date: 2023-01-15 06:00:02
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
thumbnail: "/post/2023/01/build-a-connect-four-library-in-typescript-part-3/images/build-a-connect-four-library-in-typescript-part-3-thumbnail.png"
toc: true
---

In this series, we will go over how to create a reusable TypeScript class that can be used to build the game Connect Four, and in future series we will see how we can use this library to create implementations of the Connect Four game for the CLI and the web.

Previously, in [part 2](/post/2023/01/build-a-connect-four-library-in-typescript-part-2/), we added the initial game initialization logic, the ability to reset the game state, and we then learned how we could test our code using the uvu framework.

In this part of the series, we are going to start adding in the game logic for allowing players to place their game pieces in a column on the Connect Four board.

## Series Code

You can find the code for the end of part 2 here: [Blog Post 2 Code](https://github.com/devshareacademy/connect-four/tree/blog-post-2)

You can find the completed source code for this article here on GitHub: [Blog Post 3 Code](https://github.com/devshareacademy/connect-four/tree/blog-post-3)

Lastly, if you would just like to use a NPM package for this library, you can find that here: [NPM - @devshareacademy/connect-four](https://www.npmjs.com/package/@devshareacademy/connect-four).

## Making A Move

Previously, we created a method called `makeMove` that will allow players to place a game piece into a single column, and we left a `TODO` to add in the code that belongs here. Before we jump into the code, lets review the what we will need to do in this method.

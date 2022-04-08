---
title: Plop Basics Tutorial
date: 2022-04-09 00:00:02
tags: [
  "Tutorial",
  "Plop",
  "Vue"
]
categories: [
  "Tutorial",
  "Plop",
  "Vue"
]
desc: A brief tutorial on getting started with Plopjs!
draft: true
---

In one of my recent developer bytes articles, I discussed with you some of the benefits of the micro-generator framework tool [Plop](https://github.com/plopjs/plop) and how I used this tool in my day to day. In this article I want to expand on the example the example I shared in the last article. So, in this tutorial we will be creating a Plop generator that will create a Vue component in TypeScript, and we will be going over the basics to create your own generators.

## Code

You can find all of the code for this tutorial located here on GitHub: []().

## Requirements

In order to follow along with this tutorial, you will need to have access to [Nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/), or [yarn](https://yarnpkg.com/).

I prefer to use `yarn` as my package manager, and will be using the command in my examples, however you can follow along by running the same `npm` commands.

*Note:* In this tutorial we will not be creating a full Vuejs application and will be solely focused on the setup and usage of Plop to create files, with the end goal of being able to take this knowledge and apply it to your existing or future projects.

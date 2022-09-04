---
title: HTML5 Game Development - Canvas Basics
date: 2022-09-01 06:00:02
tags: [
  "HTML5",
  "Game Development",
  "JavaScript",
  "Tutorial"
]
categories: [
  "HTML5",
  "Game Development",
  "JavaScript",
  "Tutorial"
]
desc: In this part of the series, we review the basics of working with and drawing on the HTML Canavs element.
draft: true
---

In this part of the series, we will learn how we can get a reference to our HTML Canvas element with JavaScript, and then use that reference to start to draw on the canvas element. To follow along with this article, you will need to have completed the basic project setup. You can find more details on how to setup your development environment here: TODO add link

You can find the code for the basic project setup here on GitHub: TODO add link

You can find the completed source code for this article here on GitHub: TODO add link

## Canvas Basics

Before we can start drawing and rendering content to our `<canvas>` element, we will need to get a refernce to this element with JavaScript. To do this, we can use the `getElementById` method on the `Document` object to find an `Element` object that has an `id` property that matches the provided argument that is passed to the method. If no matching element is found, then the method will return `null`.

In our project template, we gave our `canvas` element an id of `game`, so we can pass this id to the `getElementById` method. To do this, add the following code to the `src/js/main.js` file:

```javascript
```

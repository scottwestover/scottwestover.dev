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

In our project template, we gave our `canvas` element an id of `game`, so we can pass this id to the `getElementById` method. To do this, replace all of the code in the `src/js/main.js` file with the following code:

```javascript
const canvas = document.getElementById('game');
console.log(canvas);
```

In the code above, we are getting a reference to the `<canvas>` element and we are storing this reference in a variable called `canvas`. Finally, we logged this value to the developer console.

Now, if you launch your local web server and open the developer console, you should see a console log message that has details about the `<canvas>` element.

![Web browser developer console message about canvas element](./images/html5-game-development-canvas-basics-1.png)

Now that we have a reference to the `<canvas>` element, we need to get the canvas drawing context for this element. The drawing context is the actual object that enables us to draw on the `<canvas>` elements using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). The drawing context object exposes a number of different methods and properties that allow us draw shapes, images, text, and much more on the `<canvas>` elements.

To get a reference to the drawing context, we can use the `HTMLCanvasElement.getContext()` method. This method accepts two parameters, the first is the `contextType`, which allows us to specify the type of drawing context we would like to use with our canvas element. There are a few different types, but for now we will only be focusing on the `2d` type. The second parameter, `contextAttributes`, is optional and allows you to set a few attributes on the drawing context that is returned.

To do this, add the following code to the bottom of the `main.js` file:

```javascript
const ctx = canvas.getContext('2d');
console.log(ctx);
```

In the code above, we called the `getContext` method on our `canvas` element reference to get a [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) object. We then stored the `CanvasRenderingContext2D` object in a variable called `ctx`. Finally, we logged this value to the developer console.

If you go back to your web browser and view the developer console, you should see a message with details about our `ctx` object.

![Web browser developer console message about canvas context](./images/html5-game-development-canvas-basics-2.png)

If you inspect the `ctx` object, you will see there is a large number of properties and methods on this object, and all of these can be utilized for when we draw to the canvas element.

## Drawing on the canvas

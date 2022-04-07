---
title: Using ES6 With Phaser 3
date: 2018-10-27 22:00:00
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
desc: Using ES6 With Phaser 3
---

Phaser 3 offers a fantastic Webpack project template that makes it easy to start creating games right away. This template uses [Webpack Dev Server](https://github.com/webpack/webpack-dev-server), which provides live reloading while working on your game. It will also bundle all of JS files into one file once you are ready to deploy your game.

However, one thing that is missing from this template for me is support for ES6 and other newer features of JS. The great thing about the template is, we can easily extend it to include Babel, which will compile our JS code into backwards compatiable version of JS that is supported in curretn and older browsers.

The first thing you need to do is install a few additional dev dependencies in your project to enabled support for Babel.

```
npm install --save-dev babel-core babel-loader babel-polyfill babel-preset-es2015
```

Once these dependencies are installed, we just need to add a few lines of code to the `webpack.config.js` file. Under the `rules` section add the following code:

```
{
  test: /\.js$/,
  loader: 'babel-loader',
  query: {
    presets: ['es2015'],
  },
}
```

The `module` section should look like this:

```
module: {
  rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    },
    {
      test: [/\.vert$/, /\.frag$/],
      use: 'raw-loader',
    },
  ],
}
```

Lastly, we will add a `.babelrc` file to your project. In this file add the following code:

```
{
  "presets": ["es2015"]
}
```

And with that, you can use ES6 features in your Phaser game. Just run `npm run start`, and the wepack dev server should run like it did before.

You can get an updated version of the template that includes these changes here:

https://github.com/summit-games/phaser-3-template
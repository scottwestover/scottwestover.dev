---
title: How To Publish A npm Package
date: 2021-12-22 00:00:01
tags: [
  "NPM",
  "NodeJS",
  "Tutorial"
]
categories: [
  "NPM",
  "NodeJS",
  "Tutorial"
]
desc: A simple guide to publishing your first npm package!
---

As a developer, one of the things I strive to do is reuse my code accross my various projects when possible, and one of the best tools available to do this is the npm registry. If you are not familiar, npm is a package manager for the JavaScript programming language and npm is the default package manager for the Node.js runtime environment. npm is a free registry that allows you to publish both public and private npm packages that can be shared with other npm users.

I had previously created a few npm packages and published these packages to the [GitHub Packages](https://docs.github.com/en/packages) registry, and this was working great while I was the only one using these packages. However, I wanted to share some of my code with other developers, and there is currently a limitation with public packages hosted on the GitHub Packages registry where that anyone that wants to install the package is required to authenticate with the registry, which requires you to create a personal access token with the requied scopes. If you are interested, you can read more about this here: [Working with a GitHub Packages Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

This was not something I wanted to force on other developers if they wanted to use one of the packages that I shared with the public, so I decided to publish some of these packages to npm. There are a lot of in depth tutorials on how to publish a npm package, however I found that some tutorials were limited and didn't contain all of the information that I needed, so I decided to document and share the steps that I took to publish a npm package.

The purpose of this guide is to provide the basic steps to publish a npm package and not to be a full blown guide to this process.

## Package Scope, Name, and Visibility

Before publishing your npm package, you will need to answer a few questions regarding your package:
- What will the name of your package be?
- Should my package be public or private?
- Should my package be scoped or not?

If you are not familar with scopes and npm packages, a scope is basically a namespace for related npm packages. One good example of this, is the npm packages published for Angular. Angular has a npm scope of `@angular`, and some example npm packages are `@angular/core` and `@angular/cli`. Another good example is the Babel npm packages.

Note: The scope name is everything between the `@` and the slash.

Besides adding a prefix to the npm package name, the `@angular` part, there are a few other benefits to scopes:
- A scope allows you to create a package with the same name as another package that was created by another user or organization
- A scoped package can be private, which allows you to control who can access your npm package.

When you go to publish your npm package, if you choose to not use a scope, then you will need to make sure that your package name is unique and that it does not already exist, otherwise you will not be able to publish the npm package. Also, if you chose to not use a scope, then you npm package will have to be public.

Note: When you sign up for user account or create an organization on npm, you are automatically granted a scope that matches your user or organization name.

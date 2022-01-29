---
title: Tips For Publishing A npm Package
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
desc: Some helpful tips and notes for publishing your first npm package.
draft: false
---

As a developer, one of the things I strive to do is reuse my code across my various projects when possible, and one of the best tools available to do this is the npm registry. If you are not familiar, npm is a package manager for the JavaScript programming language and npm is the default package manager for the Node.js runtime environment. npm is a free registry that allows you to publish both public and private npm packages that can be shared with other npm users.

I had previously created a few npm packages and published these packages to the [GitHub Packages](https://docs.github.com/en/packages) registry, and this was working great while I was the only one using these packages. However, I wanted to share some of my code with other developers, and there is currently a limitation with public packages hosted on the GitHub Packages registry where that anyone that wants to install the package is required to authenticate with the registry, which requires you to create a personal access token with the required scopes. If you are interested, you can read more about this here: [Working with a GitHub Packages Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

This was not something I wanted to force on other developers if they wanted to use one of the packages that I shared with the public, so I decided to publish some of these packages to npm. There are a lot of in depth tutorials on how to publish a npm package, however I found that some tutorials were limited and didn't contain all of the information that I needed, so I decided to document and share the steps that I took to publish a npm package.

The purpose of this guide is to provide some helpful tips and notes for publishing a npm package and not to be a full guide to this process.

## Package Scope, Name, and Visibility

Before publishing your npm package, you will need to answer a few questions regarding your package:

- What will the name of your package be?
- Should my package be public or private?
- Should my package be scoped or not?

If you are not familiar with scopes and npm packages, a scope is basically a namespace for related npm packages. One good example of this is the npm packages published for Angular. Angular has a npm scope of `@angular`, and some example npm packages are `@angular/core` and `@angular/cli`. Another good example is the Babel npm packages.

Note: The scope name is everything between the `@` and the slash.

Besides adding a prefix to the npm package name, the `@angular` part, there are a few other benefits to scopes:

- A scope allows you to create a package with the same name as another package that was created by another user or organization
- A scoped package can be private, which allows you to control who can access your npm package.

When you go to publish your npm package, if you choose to not use a scope, then you will need to make sure that your package name is unique and that it does not already exist, otherwise you will not be able to publish the npm package. Also, if you chose to not use a scope, then you npm package will have to be public.

Note: When you sign up for a user account or create an organization on npm, you are automatically granted a scope that matches your user or organization name.

## Package.json

In order to publish your package to the npm registry, your package must include a `package.json`. More than likely, you will already have this file in your project. The two required fields are the `name` and `version` fields.

The `name` field contains your package's name, and must be lowercase and one word, and may contain hyphens and underscores. If you are publishing a scoped npm package, you should make sure to include the scope name as part of the package name.

The `version` field must be in the form x.x.x and follow the semantic versioning guidelines.

Another important field is the `main` field. The `main` field is used as the primary entry point to your program, and if this field is not provided then a default value of `index.js` will be used. As an example, if I have a file called `main.js` and this file exports my shared code, then I would want to make sure the `main` field is set to the `main.js` file.

## Keeping Files Out Of Your Package

To exclude files from your npm package when you publish it, you can use the `.npmignore` file. This file is similar to the `.gitignore` file, and npm will ignore any files that match the contents in this file. By default, if you don't provide a `.npmignore` file, then npm will check to see if there is a `.gitignore` file, and use that file for ignore files. There is a also a variety of paths and file paths that are always ignored, and you can read more about these files here: [npmignore](https://docs.npmjs.com/cli/v8/using-npm/developers#testing-whether-your-npmignore-or-files-config-works).

## Testing

Before publishing your npm package, it can be helpful to test your package locally. There are a number of ways to do this, and there are even tools to publish npm packages to a local registry. One of the easiest ways to test the install is to do a local install. To do this, go into some other folder and then do:

```bash
cd ../some-other-folder
npm install ../my-package
```

to install it locally into the node_modules folder in that other place.

Then go into the node-repl, and try using require("my-thing") to bring in your module's main module.

## Publishing

Before you can publish a npm package, you will need to sign up for a npm user account, which you can do here: [npm signup](https://www.npmjs.com/signup). Once you do this, you can either use the `npm login` command in your terminal to provide your npm user credentials or you can just run the `npm publish` command when you are ready to do so, and this will prompt you to login.

By default, when you go to publish a scoped npm package, the package will be set to `private`. If you want to publish a public scoped npm package, you will need to pass an additional flag when running the publish command: `npm publish --access public`.

Once you publish the package, you should be able to visit `https://npmjs.com/package/*package-name`, replacing package-name* with the name of your package, to see your new npm package.

## Updating Your Package

After you have published your npm package, if you need to update the package you will need to update the version of your package because you cannot override a version of the package that has already been published. To do this, you can use the `npm version` commands:

```bash
npm version patch // 1.0.1
npm version minor // 1.1.0
npm version major // 2.0.0
```

In general, `patch` is meant for backward compatible bug fixes, `minor` is for backwards compatible new features, and `major` is for updates that include changes that break backwards compatibility.

## Conclusion

Publishing a npm package is a great way for you to share code with others, both publicly and privately. I hope you found this article helpful. Please feel free to post any questions or comments below.

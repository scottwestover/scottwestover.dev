---
title: Developer Bytes - Plop
date: 2022-04-07 00:00:02
lastmod: 2022-05-27 00:00:02
tags: [
  "Developer Bytes",
  "Plop"
]
categories: [
  "Developer Bytes",
  "Plop"
]
desc: Help your team build new files with consistency with Plop!
draft: false
---

*Update:* If you would prefer to watch a video on this content, you can see the content here on YouTube: <a href="https://youtu.be/DzHnPS3rjFo" target="_blank">Developer Bytes - Generating Templates With Plopjs</a>.

For the first Developer Bytes article, I wanted to share with everyone a tool that I have found extremely useful and easy to use called [Plop](https://github.com/plopjs/plop). Plop is a micro-generator framework that can be used for generating new files in a consistent manner using templates you define. This simple tool gives you a way to generate code or any type of file, by running a simple console command.

This is all done via the config plop file that is written in JavaScript, where you specify the commands for the various generators you want to create. Then you just need to create your template files, which are written in [handlebars](https://handlebarsjs.com/). Once you do this, you just run `plop` and you will be prompted to answer questions based on the configuration you provided.

## How Plop Helps

Over the past year and half or so, I had been assigned to work a few VueJS web applications and one of the common tasks I would often run into is creating a new component. Now, this is a simple task and something than be quite repetitive when having to create a bunch of components for a new feature or new web app. As an example, I would need to create the following files:

- 3 files for the component, a vue, css, and ts file
- 1 file for the storybook stories for the component
- 1 file for the unit tests

For the most part, I could just copy and past the files from one component to another, but then I would need to spend the time renaming the files and fixing references in those files. This can be a quick process, but over time the amount of time spent doing this adds up quickly.

This is where Plop comes in, instead of me having to do the above steps every time I want to create a component in the project, I just need to run the following command `plop`, and answer a few inputs regarding the name of the component. Plop will then generate all of my files with the correct file names and the correct references.

## Other Benefits

Besides saving me time and helping my productivity, Plop is great because anyone on the team can also use the tool and generate the same consistent files. By committing the template files to the repo and adding Plop as a dev dependency to our project, everyone will always get the latest files and can run the same command I run to generate the files.

Lastly, even though Plop is written in JavaScript this tool can be used for generating any type of file since the file templates are just written in handlebars. You can use the tool for creating a full microservice, a suite of integration tests, or even just a simple file.

If you get the time, I highly recommend that you checkout this tool if you have not seen it before.

I hope you enjoyed this post. Please feel free to post any comments or questions below.

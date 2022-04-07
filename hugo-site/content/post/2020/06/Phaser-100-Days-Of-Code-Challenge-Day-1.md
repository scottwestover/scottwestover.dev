---
title: Phaser 100 Days Of Code Challenge Day 1
date: 2020-06-24 00:00:01
tags: [
  "TypeScript",
  "Game Development",
  "PhaserJS",
  "100DaysOfCode"
]
categories: [
  "TypeScript",
  "Game Development",
  "PhaserJS",
  "100DaysOfCode"
]
desc: 100DaysOfCode Day 1 - Animated Health Bar
---

For the first day, I decided to start simple and focus on getting the codebase setup that way I can keep my daily log and code in the same repository. Since I decided to use TypeScript for my challenge, this meant that I would need something to transpile my code so it can run in the browser, and I already had a template setup to do this. However, I didn't want to create a seperate code base for each example since it would be hard to maintain, and ideally I only wanted one configuration file for the whole challenge. By doing this, it allows me to compile and run my code from one location, and allows anyone who clones the codebase to do the same.

Once I had this wrapped up, I remembered seeing a tutorial on <a href="https://blog.ourcade.co/posts/2020/animated-health-bar-phaser-3/" target="_blank">Ourcade</a> about creating a health bar in Phaser, so I figured that would be a good starting point for the rest of my time. I went ahead and implemented the health bar and it turned out really nice. I have started working on refactoring the code into a seperate module and I started working on adding some ehancements like health amount as a number on the bar that will update, but this will have to be finished in day 2.

![Example](/img/Phaser-100-Days-Of-Code-Challenge-Day-1/Phaser-100-Days-Of-Code-Challenge-Day-1.gif)

You can find the code for this here: <a href="https://github.com/scottwestover/phaser-100-days-of-code/tree/master/src/days/1" target="_blank">Day 1</a>

I hope you enjoyed this post. Please feel free to post any questions or comments below.

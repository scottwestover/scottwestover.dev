---
title: Switching to GitHub Issues for comments
date: 2020-01-17 06:00:00
tags: [
  "Misc"
]
categories: [
  "Misc"
]
desc: Switching to GitHub Issues for comments
---

With the new year, I decided to explore new ways of handling comments on my blog. In my research, I happened to come accross [Gitment](https://github.com/imsun/gitment). Gitment is a small JS library that leverages GitHub Issues for storing comments on each post.

Some things to note about Gitment:
  - Each post will have a seperate matching GitHub Issue.
  - Users have to be logged into GitHub to post a comment. Even though this is an ask on the users for leaving a comment or question, signing up for GitHub is easy and free. I also figured the audience for my post may already have a GitHub login.
  - Each comment will be saved as a comment on the matching GitHub issue.
  - Gitment will automatically display the form for creating comments, and it will also display the relevant comments for each post.

In addition to this, I also came accross [utterances](https://utteranc.es/), which is a lightweight comments widget that is build on GitHub Issues.

Some things to note about Utterances:
  - Add data is stored in GitHub Issues.
  - It uses the GitHub issue search API to find issues that are associated with the page based on the url, pathname or title.
  - You need to install the utterances app on your repository for everything to work.

Since I am already using GitHub for hosting my site and for storing my source code, I figured I would look into both of these and see how I can use them. For now, I decided to give [utterances](https://utteranc.es/) a shot because you don't need to expose and client id or secrets like you need to do with Gitment.

So far, the transition was relatively easy and I hope everyone likes the new comment system.

I hope you enjoyed this post. Please feel free to post any comments below.

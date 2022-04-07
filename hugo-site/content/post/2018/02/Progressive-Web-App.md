---
title: Progressive Web App
date: 2018-02-10 02:58:22
desc: Updated blog to be a PWA!
tags: [
  "Misc"
]
categories: [
  "Misc"
]
---

At the beginning of January, I was accepted into the Grow With Google Scholarship from Udacity. If you are not familar with this program, I really recommend that you check it out. Basically, Google is scholarships for the Nano degrees that are available on Udacity. However, the scholarship is split into two phases.

During the first phase, they admit 10,000 or 15,000 into the first phase (depends on which track you applied for), and you have 3 months to complete the courses that they make available to you. After these 3 months are over, they will offer 1,000 of these applicants a full scholarship for the Nanodegree. You can read more about it here: https://www.udacity.com/grow-with-google

The first course that I took as part of this program was all about offline first and what a pwa (progressive web app) is. A pwa is a regular website that can appear and behave like a traditional mobile app. When implemented correctly, the pwa will allow users to `install` or `add` your website to the home screen of their phone, like it was an app. It can also cache some of the assets of your website, that way if the user tries to visit your site when offline, they will see some content, just like in a mobile app.

You can read more about pwa here: https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/

Also, you can learn more about them on Udacity here: https://www.udacity.com/course/intro-to-progressive-web-apps--ud811

After taking this course, I was ready to implement what I learned, and I thought it would be great to turn my blog into a pwa. With Hexo, it was actually pretty easy to do. I just needed to create a manifest.json, a precache service worker, and register it. There is an excellent blog post here that details how to do this: https://alexjoverm.github.io/2017/08/07/How-I-made-a-Progressive-Web-App-out-of-my-Blog/

To test the pwa functionality, you can visit the home page of my blog, turn off your internet connection, and then refresh the page. Instead of seeing the normal offline message of your web browser, you should still see some of the content of my blog. Also, if you visit the site on your mobile device, you should get a prompt about adding this site to your home screen!

If you have any comments, please share them below.
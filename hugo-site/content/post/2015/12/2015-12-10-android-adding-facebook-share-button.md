---
title: "Android - Adding A Facebook Share Button"
date: 2015-12-10 00:00:00
desc: "Android - Adding A Facebook Share Button"
tags: [
  "Android",
  "Facebook"
]
categories: [
  "Android",
  "Facebook"
]
---

I have gotten a lot of questions about adding a basic share button to your android app from one of my previous posts, so I decided to add a new tutorial that shows just how to add a basic share button.<br />
<br />
The purpose of this tutorial is to show you how to add a Facebook Share button to your Android Application. <br />
<br />
For this tutorial I was using: Android Studio 1.1.0, and Facebook SDK v4.0.0. You should be able to follow along with other versions of this software.<br />
<br />
In order to follow along you will need the following:<br />
<ul>
<li>Android Studio. If you do not already have this installed, you can get a copy from here:&nbsp;<a href="https://developer.android.com/sdk/index.html" target="_blank"><span style="color: blue;">Android Studio</span></a>. Just follow the download and install instructions from the website to get started.</li>
<li>You will need to have an existing project already created in Android Studio that is integrated with the Facebook SDK. If you do not have one, you can follow this tutorial:&nbsp;<a href="http://scottwestover.blogspot.com/2015/07/android-facebook-integration-tutorial.html"><span style="color: blue;">Android Facebook Integration Tutorial</span></a></li>
</ul>
<div>
If you have completed the following steps, we can get started.</div>
<div>
<br /></div>
<div>
1. Open up your Android Studio project, and navigate to your Android Manifest file. Once this is open, you will want to add the following activity:<br />
<br />
<script src="https://gist.github.com/scottwestover/876cbcc953ed5bf31bec.js"></script>2. Now, you will have to set up a content provider in your Android Manifest file. You will want to add the following code and replace "{APP_ID}" with your App Id:<br />
<br />
<script src="https://gist.github.com/scottwestover/9ee6050320197521b472.js"></script>3. To actually share your content, we will have to set up a Share Button for your application. To start with, open your "strings.xml" file located here:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-syBPPISQ7Oc/VaKoY6gJMiI/AAAAAAAAAVw/i_jftPPTNk4/s1600/2015-07-12_1303.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-syBPPISQ7Oc/VaKoY6gJMiI/AAAAAAAAAVw/i_jftPPTNk4/s1600/2015-07-12_1303.png" /></a></div>
<br />
4. In this file, add the following:&nbsp;&lt;string name="share"&gt;Share&lt;/string&gt;<br />
<br />
5. Next, we will add the Share button to our "activity_main.xml" file. Open this file and add the following code:<br />
<br />
<script src="https://gist.github.com/scottwestover/fda7d4affd53d1b5c36e.js"></script>You will want to update the "layout_width" and the "layout_height" with appropriate values for your application.<br />
<br /></div>
<div>
6. Now that we have the button setup, we will want to update our "MainActivity.java" file to add the button to our app. Once the button is added, we are going to define the content that we would like to share, for this tutorial we are going to share a link. Once the content is created, then we just need setup our button to share that content.<br />
<br />
<script src="https://gist.github.com/scottwestover/6a4284e81f9036d1e130.js"></script>
Here is an example of what your "MainActivity.java" file will look like if all you have is the share button:<br />
<br />
<script src="https://gist.github.com/scottwestover/2b7523eb72afae7320ab.js"></script><br /></div>
<div>
Now, when you test out your application, you should be able to click the Share Button, login to your Facebook account, and then share the&nbsp;link to your wall.<br />
<br />
Summary: This tutorial showed you how to add a Facebook Share Button to your application, and how to share a link.</div>

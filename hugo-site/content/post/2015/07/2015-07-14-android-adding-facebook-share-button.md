---
title: "Android - Adding A Facebook Share Button That Shares A Screen Shot"
date: 2015-07-14 00:00:00
desc: "Android - Adding A Facebook Share Button That Shares A Screen Shot"
tags: [
  "Tutorial",
  "Android",
  "Facebook"
]
categories: [
  "Tutorial",
  "Android",
  "Facebook"
]
---

The purpose of this tutorial is to show you how to add a Facebook Share button to your Android Application that will share a screen shot. <br />
<br />
I have added a new tutorial that shows just how to add a basic share button to your android application. You can read the tutorial here: <a href="http://scottwestover.blogspot.com/2015/12/android-adding-facebook-share-button.html"><span style="color: blue;">Android - Add A Facebook Share Button</span></a><br />
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
<script src="https://gist.github.com/scottwestover/876cbcc953ed5bf31bec.js"></script>
2. Now, you will have to set up a content provider in your Android Manifest file. You will want to add the following code and replace "{APP_ID}" with your App Id:<br />
<br />
<script src="https://gist.github.com/scottwestover/9ee6050320197521b472.js"></script>
3. To actually share your content, we will have to set up a Share Button for your application. To start with, open your "strings.xml" file located here:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-syBPPISQ7Oc/VaKoY6gJMiI/AAAAAAAAAVw/i_jftPPTNk4/s1600/2015-07-12_1303.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-syBPPISQ7Oc/VaKoY6gJMiI/AAAAAAAAAVw/i_jftPPTNk4/s1600/2015-07-12_1303.png" /></a></div>
<br />
4. In this file, add the following:&nbsp;&lt;string name="share"&gt;Share&lt;/string&gt;<br />
<br />
5. Next, we will add the Share button to our "activity_main.xml" file. Open this file and add the following code:<br />
<br />
<script src="https://gist.github.com/scottwestover/fda7d4affd53d1b5c36e.js"></script>
You will want to update the "layout_width" and the "layout_height" with appropriate values for your application.<br />
<br /></div>
<div>
6. Now that we have the button setup, we will want to update our "MainActivity.java" file to add functionality to this button. We are going to setup the button so that when it is clicked, it is going to call a function that will take a screen shot of our activity, and then share this image to Facebook. As we are adding code, Android Studio should update the imports that are needed. First we are going to declare some variables for our share button, the image we will upload, and a counter:<br />
<br />
<script src="https://gist.github.com/scottwestover/24606a848105424268ba.js"></script>

7. Next, we will want to add a OnClickListener to our button, so we can call our function when it is clicked. In the onCreate() function, add the following code:<br />
<br />
<script src="https://gist.github.com/scottwestover/afe1ff0a4feebfe17362.js"></script>
8. Lastly, you will then need to create the postPicture() function that is called when the Share button is clicked. Inside this function we will want to do the following things:<br />
<ul>
<li>Take a screenshot of our current screen</li>
<li>Create am image from this screenshot</li>
<li>Have the sharing dialog pop up</li>
<li>If the user click yes, have the user login to their Facebook account, and then post the image to their wall</li>
<li>If the user clicks no, cancel the dialog</li>
</ul>
<div>
Here is the code for the function:</div>
<div>
<br />
<script src="https://gist.github.com/scottwestover/a88610a1688bca9e8d0a.js"></script><br /></div>
<div>
Here is an example of what your "MainActivity.java" file will look like if all you have is the share button:&nbsp;</div>
<br />
<script src="https://gist.github.com/scottwestover/9c27069cb3fd1781fa44.js"></script>
</div>
<div>
Now, when you test out your application, you should be able to click the Share Button, login to your Facebook account, and then share the image to your wall.<br />
<br />
Summary: This tutorial showed you how to add a Facebook Share Button to your application, and how to take a screen shot of your main view, and from there use the Share Button to share this image on Facebook.</div>
<div>
<br /></div>
<div>
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.<br />
<br />
<span style="color: orange;">Update </span>10/08/2015:<br />
<br />
Here is an example of what your "AndroidManifest.xml" file will look like if all you have is the share button:<br />
<br />
<span style="color: orange;">Update </span>10/18/2015:<br />
<br />
Here is a link to a gist that I created that contains all of the files that I modified during this tutorial:&nbsp;<a href="https://gist.github.com/scottwestover/1514ea0404c14da5ff06"><span style="color: blue;">Gist</span></a><br />
<br />
The only things that should be different is the package name, and the your app id for Facebook.<br />
<br />
<script src="https://gist.github.com/scottwestover/2bf0aa22a8b220053832.js"></script><br /></div>
<span style="color: orange;">Update </span>12/10/2015:<br />
<br />
Here is a link to a new tutorial that shows how to add a basic share button:<span style="color: blue;"> <a href="http://scottwestover.blogspot.com/2015/12/android-adding-facebook-share-button.html">Android - Add Facebook Share Button</a></span>
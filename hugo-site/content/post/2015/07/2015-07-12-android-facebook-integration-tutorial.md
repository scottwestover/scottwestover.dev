---
title: "Android Facebook Integration Tutorial"
date: 2015-07-12 00:00:00
desc: "Android Facebook Integration Tutorial"
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

The purpose of this tutorial is to show you how to integrate the Facebook SDK with your Android application. Throughout this tutorial, we will register our application with Facebook and then add the SDK to our project.<br />
<br />
For this tutorial I was using: Android Studio 1.1.0, OpenSSL for Windows, and Facebook SDK v4.0.0. You should be able to follow along with other versions of this software.<br />
<br />
In order to follow along you will need the following:<br />
<ul>
<li>Android Studio. If you do not already have this installed, you can get a copy from here:&nbsp;<a href="https://developer.android.com/sdk/index.html" target="_blank"><span style="color: blue;">Android Studio</span></a>. Just follow the download and install instructions from the website to get started.</li>
<li>SSL. If you do not already have this installed, you can get a copy from here:&nbsp;<a href="http://code.google.com/p/openssl-for-windows/downloads/detail?name=openssl-0.9.8k_X64.zip"><span style="color: blue;">OpenSSL</span></a>. Just follow the download and install instructions from the website to get started.</li>
<li>You will need to have an existing project already created in Android Studio.</li>
<li>You will need to have a developer account with Facebook in order to register your application, and work with their SDK. You can do this here:&nbsp;<a href="https://developers.facebook.com/"><span style="color: blue;">https://developers.facebook.com/</span></a></li>
</ul>
<div>
If you have completed the following steps, we can get started.</div>
<div>
<br /></div>
<div>
1. Go to the Facebook developers website, hover over the "My Apps" button, and then click on "Add a New App".<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-qO8h5Doya0k/VaJnOclrMgI/AAAAAAAAATI/Hht8_ostPBo/s1600/Untitled.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="101" src="https://3.bp.blogspot.com/-qO8h5Doya0k/VaJnOclrMgI/AAAAAAAAATI/Hht8_ostPBo/s400/Untitled.png" width="400" /></a></div>
<br />
2. In the "Add a New App" window that appears, choose "Android".<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-EkV4JGhkpqQ/VaJtOWQRUyI/AAAAAAAAATc/b9bVkZcxLDc/s1600/2015-07-12_0915.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="164" src="https://4.bp.blogspot.com/-EkV4JGhkpqQ/VaJtOWQRUyI/AAAAAAAAATc/b9bVkZcxLDc/s320/2015-07-12_0915.png" width="320" /></a></div>
<div class="separator" style="clear: both; text-align: center;">
<br /></div>
3. Next, type in the name for the app you want to create, and then click the "Create New Facebook App ID".<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-EfgDU5uPhdY/VaJtRVj0sPI/AAAAAAAAAUA/yWEQluuMvIQ/s1600/2015-07-12_0919.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="169" src="https://2.bp.blogspot.com/-EfgDU5uPhdY/VaJtRVj0sPI/AAAAAAAAAUA/yWEQluuMvIQ/s320/2015-07-12_0919.png" width="320" /></a></div>
<br />
4. Then, in the "Create a New App ID" window that appears, choose "No" for "is this a test version of another app", and choose a relevant category for your application. Lastly, click on the "Create App ID" button.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-1wVsqyDMhoE/VaJtREVSAGI/AAAAAAAAATs/pLGanXUlTMQ/s1600/2015-07-12_0921.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="143" src="https://1.bp.blogspot.com/-1wVsqyDMhoE/VaJtREVSAGI/AAAAAAAAATs/pLGanXUlTMQ/s320/2015-07-12_0921.png" width="320" /></a></div>
<br />
5. Open your Android Studio project, &nbsp;and open the "build.gradle" file at the app level.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-zO_3Y7nv4t0/VaJyPSD7naI/AAAAAAAAAUU/X49Qg4aHNc8/s1600/2015-07-12_1000.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="195" src="https://2.bp.blogspot.com/-zO_3Y7nv4t0/VaJyPSD7naI/AAAAAAAAAUU/X49Qg4aHNc8/s320/2015-07-12_1000.png" width="320" /></a></div>
<br />
6. In this file, add " compile 'com.facebook.android:facebook-android-sdk:4.4.0' " to your dependencies and add "mavenCentral()" to your repositories. You will want to rebuild your project after this.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-QJRSR_CQgUI/VaKXxOgaREI/AAAAAAAAAVc/iiwnm32TVQc/s1600/2015-07-12_1242.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="94" src="https://1.bp.blogspot.com/-QJRSR_CQgUI/VaKXxOgaREI/AAAAAAAAAVc/iiwnm32TVQc/s320/2015-07-12_1242.png" width="320" /></a></div>
<br />
9. Go back to the Facebook Developers site, and in the spot "Tell us about your Android project", you will want to enter the package name for your application, and the default activity class name.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-bP-rbTY3Opw/VaJtRTZWDuI/AAAAAAAAAT8/VfwCPorIvpg/s1600/2015-07-12_0933.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="162" src="https://4.bp.blogspot.com/-bP-rbTY3Opw/VaJtRTZWDuI/AAAAAAAAAT8/VfwCPorIvpg/s400/2015-07-12_0933.png" width="400" /></a></div>
<div class="separator" style="clear: both; text-align: center;">
<br /></div>
10. You will now need to generate an Android key hash for your development environment in order to test your application. In order to do this, you will need to have SSL installed. Open a command prompt window and navigate to your "Java JRE" folder. Once here you will want to run the following command:<br />
<br />
<script src="https://gist.github.com/scottwestover/7a09e3c5a1ea06077da9.js"></script>
11. The command prompt should generate a 28-character key hash. You will want to enter this in the "Development Key Hashes" field on the Facebook Developers site:<br />
<br />
12. Then, you will want to click on the "Dashboard" link to take you to the app dashboard. You will see that your app now has an "App ID" and an "App Secret". You will need to add the APP ID to your Android App.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-0h3tzdLusL8/VaJ58VFcjHI/AAAAAAAAAU0/b93hGYqOfrg/s1600/2015-07-12_1036.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="91" src="https://2.bp.blogspot.com/-0h3tzdLusL8/VaJ58VFcjHI/AAAAAAAAAU0/b93hGYqOfrg/s320/2015-07-12_1036.png" width="320" /></a></div>
<br />
13. Returning back to your Android project, open the "MainActivity" file for your app. At the top of the file, in the imports section add the following:&nbsp;import com.facebook.FacebookSdk;<br />
<br />
14. You will need to initialize the Facebook SDK before you can use it. This can be done by calling the Facebook.SDK.sdkInitialize from onCreate function. Your onCreate function should look similar to this:<br />
<br />
<script src="https://gist.github.com/scottwestover/1bd7b8ae6e1204ae7b38.js"></script>
15. Now, we just need to add your Facebook App ID to your Application. Open your "strings.xml" file located here:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-c6wqIBq7fB8/VaJ-dJENdfI/AAAAAAAAAVE/RYQXrYznOU8/s1600/2015-07-12_1056.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://3.bp.blogspot.com/-c6wqIBq7fB8/VaJ-dJENdfI/AAAAAAAAAVE/RYQXrYznOU8/s1600/2015-07-12_1056.png" /></a></div>
<br />
16. You will want to add a new string to this file. The name of the string should be "facebook_app_id", and the value of the string should be your apps id. Here is an example: &lt;string name="facebook_app_id"&gt;Your App ID Goes Here&lt;/string&gt;</div>
<div>
<br /></div>
<div>
17. Finally, you will need to update your Android manifest. Once you have this file open, you will need to add the following:</div>
<div>
<ul>
<li>&lt;uses-permission android:name="android.permission.INTERNET"/&gt;</li>
<li>&lt;meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/&gt;</li>
</ul>
</div>
<div>
You have now integrated the Facebook SDK with your Android application. Now, you will be able to use the Facebook SDK to add a Facebook Login, Share content to Facebook, or even send App Invites to friends on Facebook.<br />
<br /></div>
<div>
Summary: This tutorial showed you how to crate a Facebook Developers App, how to add the Facebook SDK to your Android Application, and how to sync the two together.</div>
<div>
<br /></div>
<div>
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.</div>

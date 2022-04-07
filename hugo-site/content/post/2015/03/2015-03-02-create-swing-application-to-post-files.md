---
title: "Create A Swing Application To Post Files To AEM"
date: 2015-03-02 00:00:00
desc: "Create A Swing Application To Post Files To AEM"
tags: [
  "AEM"
]
categories: [
  "AEM"
]
---

<span style="font-family: inherit;">While reading through some AEM forums, I came across this tutorial called "Creating Java Swing applications that posts files to AEM ClientLibs folder".&nbsp;</span><br />
<div>
<span style="font-family: inherit;"><br /></span>
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-EtbD5drcn_w/VQGpw4OtUbI/AAAAAAAAAEk/qgS8mPzZ7L0/s1600/Untitled.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><span style="font-family: inherit;"><img border="0" height="225" src="https://4.bp.blogspot.com/-EtbD5drcn_w/VQGpw4OtUbI/AAAAAAAAAEk/qgS8mPzZ7L0/s1600/Untitled.png" width="400" /></span></a></div>
<div>
<span style="font-family: inherit;"><br /></span></div>
<div>
<span style="font-family: inherit;"><br /></span></div>
<div>
<span style="font-family: inherit;">Here is a link to the tutorial:&nbsp;<a href="https://helpx.adobe.com/experience-manager/using/post_files.html" target="_blank"><span style="color: blue;">Swing Tutorial</span></a></span></div>
<div>
<span style="font-family: inherit;"><br /></span></div>
<div>
<span style="font-family: inherit;">The tutorial walks you through creating an application that will upload a Text, CSS, or JavaScript file to a file path that you specify in the application.</span><br />
<div>
<span style="font-family: inherit;"><br /></span></div>
<div>
<span style="font-family: inherit;">Once you do this, then you need to create an OSGI bundle that contains a Swing Servlet. After this is done, you just upload the bundle to the Felix Console, start the bundle, and then you can run your application to start uploading files.</span></div>
<div>
<span style="font-family: inherit;"><br /></span></div>
<div>
<span style="font-family: inherit;">I thought this was great tool because it is a nice alternative to getting local files into AEM without having to use CRXDE.</span></div>
<div>
<span style="font-family: inherit;"><br /></span></div>
<div>
<span style="font-family: inherit;">Here are some tips if you run through the tutorial:&nbsp;</span><br />
<span style="font-family: inherit;"><br /></span>
<span style="font-family: inherit;">The tutorial states that it was tested on 5.5 and 5.6. I ran through the tutorial using AEM 6.0, and it worked fine, so you are welcome to try it out with that version.</span></div>
<div>
<span style="font-family: inherit;"><br /></span></div>
<div>
<span style="font-family: inherit;">When you are creating the Swing application, it has you create some image icons, and reference images in a image folder. You can upload your own images to your project and update the file path to those images. The application will work fine without the images, but it adds a nice look to the application.</span></div>
</div>
</div>
<div>
<span style="font-family: inherit;"><br /></span></div>
<div>
<span style="font-family: inherit;">Also, during the creation of your Swing application, you can update the default path text to something more relevant to your application. Just change "path.setText("/apps/slingSevletApp/components/clientlibs");" to any path you would like.</span><br />
<span style="font-family: inherit;"><br /></span>
<span style="font-family: inherit;">Lastly, just make sure you export your Swing application as a runnable jar file so you can run it at any time without having to have Eclipse, or any other IDE open.</span></div>

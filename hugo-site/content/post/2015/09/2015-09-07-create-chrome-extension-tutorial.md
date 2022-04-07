---
title: "Create A Chrome Extension Tutorial"
date: 2015-09-07 00:00:00
desc: "Create A Chrome Extension Tutorial"
tags: [
  "Tutorial",
  "Chrome Extension"
]
categories: [
  "Tutorial",
  "Chrome Extension"
]
---

The purpose of this tutorial is to show you how to make a simple Chrome Extension. Throughout this tutorial we will be making a simple extension that when clicked, will show an HTML page with the text "Hello World!".<br />
<br />
A Chrome Extension is just some basic HTML, CSS, and JavaScript that allows you to add some type of functionality to Chrome by using Chrome's JavaScript APIs. For this tutorial, we are going to focus on building a simple Hello World html page that uses basic JavaScript.<br />
<br />
<div>
Let's get started:</div>
<div>
<br /></div>
<div>
1. The first thing that you need to do is create a project folder for your extension. Somewhere on your computer, create a new folder called "MyExtension".<br />
<br />
2. Next, we are going to choose what the icon for our extension is going to be. We will use the following image for this tutorial:<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-V9iT0dp7RzA/VdDKC2sRtaI/AAAAAAAAAXU/58_4ma0_x5o/s1600/icon.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-V9iT0dp7RzA/VdDKC2sRtaI/AAAAAAAAAXU/58_4ma0_x5o/s1600/icon.png" /></a></div>
<br />
You can either download this image and place it in your project folder, or use your own image.<br />
<br />
3. Next, we will create the basic HTML page that will be displayed when the user clicks on the extension. In your project folder, create a new html page called "popup.html".<br />
<br />
4. Open the "popup.html" file, and add the following code:<br />
<br />
<script src="https://gist.github.com/scottwestover/ce6e1ac4b6baa31ddd18.js"></script>
5. Next, you will need to create a manifest file that will tell Chrome how to load our extension. In our project folder, create a new file called "manifest.json".<br />
<br />
6. Open the "manifest.json" file, and add the following code:<br />
<br />
<script src="https://gist.github.com/scottwestover/04e8587ac6c23cf1ed69.js"></script>

The top half of the file includes basic information about our extension, such as: the name, the description, and which version it is. The browser_action is used to let Chrome know which page should be loaded when the extension is clicked, and which icon should be displayed in the toolbar.<br />
<br />
7. Now, we are going to test out our extension. In Chrome, navigate to your extensions page by entering "chrome://extensions" in the navigation bar.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-lUUaqyk_F4Y/VdDQ5I9syGI/AAAAAAAAAXo/hk1_S2H4KO0/s1600/2015-08-16_1412.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="145" src="https://1.bp.blogspot.com/-lUUaqyk_F4Y/VdDQ5I9syGI/AAAAAAAAAXo/hk1_S2H4KO0/s400/2015-08-16_1412.png" width="400" /></a></div>
<br />
You will need to click the check box next to Developer mode to enable it. Then click on "Load unpacked extension...", and select your project folder in the popup that opens. Your extension should load, and you should see your icon next to your navigation bar.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-e0VW7L0Akwk/VdDRfIKGnbI/AAAAAAAAAXw/Ld0nmLnK7fo/s1600/2015-08-16_1413.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://3.bp.blogspot.com/-e0VW7L0Akwk/VdDRfIKGnbI/AAAAAAAAAXw/Ld0nmLnK7fo/s1600/2015-08-16_1413.png" /></a></div>
<br />
8. Now, click on your extension and you should see a popup window with the "Hello World!" text.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-ushABLiRU58/VdDUqlRdKLI/AAAAAAAAAYA/NPL1C6lfgjA/s1600/2015-08-16_1413_001.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-ushABLiRU58/VdDUqlRdKLI/AAAAAAAAAYA/NPL1C6lfgjA/s1600/2015-08-16_1413_001.png" /></a></div>
<br />
Now, we are going to add some basic JavaScript to update the text of our html page. For security reasons, we cannot add inline JavaScript to our html page, so we will need to create an external JavaScript file. You can read more about the content security policy here:&nbsp;<a href="https://developer.chrome.com/extensions/contentSecurityPolicy"><span style="color: blue;">https://developer.chrome.com/extensions/contentSecurityPolicy</span></a><br />
<br />
9. In our project folder, create a new JavaScript file called "popup.js". Open this file, and add the following code:<br />
<br />
<script src="https://gist.github.com/scottwestover/88c4a24abd9eefad7d1d.js"></script>

10. Next, we will need to refer to this external JavaScript file in our "popup.html" file. Open this file, and add the following line before the closing body tag: &lt;script src="popup.js"&gt;&lt;/script&gt;<br />
<br />
Your code should now look like this:<br />
<br />
<script src="https://gist.github.com/scottwestover/46b892eb005ad80f24ac.js"></script>

11. Lastly, we need to test out the changes we made to our extension. In Chrome, navigate to your extensions, and reload your extension by clicking on "Load unpacked extension..." and then by selecting your project folder in the popup window.<br />
<br />
Once your extension is loaded, click on the extension icon to test it. You should see the following:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-0nKNTKsoWTo/VdDXS5dvRgI/AAAAAAAAAYQ/lpdL4XxUt14/s1600/2015-08-16_1439.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-0nKNTKsoWTo/VdDXS5dvRgI/AAAAAAAAAYQ/lpdL4XxUt14/s1600/2015-08-16_1439.png" /></a></div>
<br /></div>
<div>
This was a very basic tutorial that showed you how easy it is to get started making an extension. If you are interested in learning more about Chrome Extensions, you can read more here:&nbsp;<a href="https://developer.chrome.com/extensions"><span style="color: blue;">https://developer.chrome.com/extensions</span></a><br />
<br />
Summary: This tutorial showed you how to create a simple Chrome Extension, and when you click on it, it will display a simple HTML page that uses JavaScript. You can download the completed version of the extension we made here:&nbsp;<a href="https://drive.google.com/file/d/0B3v-p63HExgeRHRjdmhfS19IYlE/view?usp=sharing"><span style="color: blue;">MyExtension</span></a></div>
<div>
<br /></div>
<div>
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.</div>

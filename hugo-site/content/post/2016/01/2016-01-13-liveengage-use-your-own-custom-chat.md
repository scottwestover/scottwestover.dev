---
title: "LiveEngage - Use Your Own Custom Chat Button By Using JQuery"
date: 2016-01-13 00:00:00
desc: "LiveEngage - Use Your Own Custom Chat Button By Using JQuery"
tags: [
  "LiveEngage",
  "Tutorial"
]
categories: [
  "LiveEngage",
  "Tutorial"
]
---

Update: With the new HTML engagements in LiveEngage, this method is now outdated. It is recommended that you use the supported method listed above.<br />
<br />
The purpose of this tutorial is to show you how you can use your own chat buttons with LiveEngage by using JavaScript.<br />
<br />
Currently in LiveEngage, you have a limited number of options for creating a chat button in the LiveEngage studio. This can make it hard for the chat button to match the look of your site, especially with all of the things you can do with CSS and JavaScript today.<br />
<br />
So, in order to work around this,you will need to create your own chat that you would like to use on your website, and you will need to create a basic embedded chat button in the LiveEngage studio. Don't worry about what the embedded chat button looks like because we are going to use CSS styling to hide the chat button, and then use JavaScript to click the LiveEngage chat button when your button is clicked.<br />
<div>
<br />
If you have created both buttons, then we can get started.<br />
<br />
1. The first thing you will want to do is add the div for your LiveEngage chat button to your site to make sure it works.<br />
<br />
2. Now, we are going to wrap this div inside an anchor tag with a class, which is what we are going to use to trigger the click on the chat button. For example, if your LiveEngage div is:&nbsp;&lt;div id="slideout1"&gt;&lt;/div&gt;, your code will look like this now:<br />
<br />
&lt;a class="live-person-ghost"&gt;&lt;div id="slideout1"&gt;&lt;/div&gt;&lt;/a&gt;<br />
<br />
3. Next, we are going to add an id to our custom button. By adding an id, it will allow use to check to see if that button was clicked. Here is an example:<br />
<br />
&lt;button type="button" id="live-engage-link"&gt;Instant Live Chat&lt;/button&gt;<br />
<br />
4. If you do not have JQuery on your website, you will need to add the following script to the head section of your site:<br />
<br />
&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"&gt;&lt;/script&gt;<br />
<br />
4. Now, we are going to add the JavaScript that will allow us to trigger the click on the LiveEngage button when someone clicks on your custom chat button. Add the following code before your closing body tag:<br />
<br />
<script src="https://gist.github.com/scottwestover/1cb9c475979feb87d7c4.js"></script>

5. Now that you have added the JavaScript, we can test the code to make sure it works. If you click on your custom chat button, and it triggers the LiveEngage chat button, then the last thing we need to do is hide the LiveEngage chat button. You will need to add the following style to your LiveEngage div:&nbsp;style="display:none".<br />
<br />
Here is a complete example of the code:<br />
<br />
<script src="https://gist.github.com/scottwestover/bac0091b8752cb96bf65.js"></script>
</div>
<div>
Summary: This tutorial showed you how to use JavaScript and CSS to use your own custom chat buttons with LiveEngage.</div>
<div>
<br /></div>
<div>
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.</div>

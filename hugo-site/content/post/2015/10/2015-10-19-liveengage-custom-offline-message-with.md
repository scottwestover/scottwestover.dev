---
title: "LiveEngage - Custom Offline Message With Link To Your Leave A Message Form"
date: 2015-10-19 00:00:00
desc: "LiveEngage - Custom Offline Message With Link To Your Leave A Message Form"
tags: [
  "LiveEngage",
  "Tutorial"
]
categories: [
  "LiveEngage",
  "Tutorial"
]
---

Update 6/10/16: This work around is no longer needed for LiveEngage. Instead, if you just include your message in the header of the survey, and delete all questions of the offline survey. The header will show correctly with a close button for the offline survey.<br />
<br />
The purpose of this tutorial is to show you how to add your own custom offline message on the offline survey in LiveEngage, and have a link to your own leave a message form.<br />
<br />
The default offline survey in LiveEngage is nice, but sometimes you want added functionality that is not there, or sometimes you want to have a customer leave a message for you using another method that you already have, but you don't want to disable your chat buttons since there is no way to turn off the offline survey.<br />
<br />
We can do this by using the header that is available on the offline survey in LiveEngage. The header allows for you to add your own custom HTML, which is how we will add the link to your own form. You can make changes to your main offline survey, but it is recommended that you test the changes first before you push changes to your live site.<br />
<br />
<div>
Let's get started:</div>
<div>
<br /></div>
<div>
1. In LiveEngage, go to your campaigns tab and choose the window that you would like to edit the offline survey for.<br />
<br />
2. Now, on the views drop down, choose offline survey.<br />
<br />
3. Next, click on the '+' icon to add elements to your survey. In the pop up window that opens, click the check box next to 'Heading'.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-TjOlQJ-kmvc/ViOhrtfoZ_I/AAAAAAAAAbI/mTHyoD1vxXk/s1600/2.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="179" src="https://1.bp.blogspot.com/-TjOlQJ-kmvc/ViOhrtfoZ_I/AAAAAAAAAbI/mTHyoD1vxXk/s320/2.png" width="320" /></a></div>
<br />
4. Then on survey, click the text "Click to edit survey heading" to add text to your header. You can add custom HTML and CSS inside the header in order to style it how you want. For example:<br />
<br />
<script src="https://gist.github.com/scottwestover/4a0cdf79ac409f73cc19.js"></script>

5. Now, save your changes, and head over to your test site to see the changes. On your offline survey you should see your message appear.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-adzTqGr-nKw/ViOovQtE8WI/AAAAAAAAAbY/dMdGPx_-wSI/s1600/1.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-adzTqGr-nKw/ViOovQtE8WI/AAAAAAAAAbY/dMdGPx_-wSI/s1600/1.png" /></a></div>
<div class="separator" style="clear: both; text-align: center;">
<br /></div>
</div>
<div>
Note: At this time, the header will only appear on the offline survey if you have a question on your survey. To show the header with no questions, you will need to use CSS to hide the quesitons.<br />
<br />
Summary: This tutorial showed you how to create your own offline message on your offline survey in LiveEngage, and it showed you how you can include links on the offline survey. In our next tutorial, I will show you how we can remove the cancel and submit buttons from the offline survey.</div>
<div>
<br /></div>
<div>
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.</div>

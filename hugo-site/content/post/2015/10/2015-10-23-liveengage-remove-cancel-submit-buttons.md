---
title: "LiveEngage - Remove Cancel & Submit Buttons From Offline Survey"
date: 2015-10-23 00:00:00
desc: "LiveEngage - Remove Cancel & Submit Buttons From Offline Survey"
tags: [
  "LiveEngage",
  "Tutorial"
]
categories: [
  "LiveEngage",
  "Tutorial"
]
---

Update: This method is now outdated. Now, in LiveEngage, when you create a new survey with no questions, it will automatically remove the Submit button from the survey.<br />
The purpose of this tutorial is to show you how to remove the Cancel &amp; Submit buttons from your offline survey in LiveEngage.<br />
<br />
The default offline survey in LiveEngage is nice, but sometimes you want added functionality that is not there, or sometimes you want to display your own custom offline message, but you do not want the customers to leave an offline message using the LiveEngage chat.<br />
<br />
We can prevent the user from leaving a message by removing the Submit button from the offline survey. To do this, we will need to add some code to the header on the survey. The header allows for you to add your own custom CSS, which is how we will hide those buttons. You can make changes to your main offline survey, but it is recommended that you test the changes first before you push changes to your live site.<br />
<br />
Note: In LiveEngage, if you have an offline survey with no questions on it, then the header will not generate on your survey. To have an offline survey with just your custom message and no buttons, you will need to add a question to your survey, and we can use CSS to hide that question.<br />
<br />
<div>
Let's get started (if you already know how to edit your offline survey, go to step 4):</div>
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
4. Then on survey, click the text "Click to edit survey heading" to add CSS code to your survey. Add the following code to your survey:<br />
<br />
<script src="https://gist.github.com/scottwestover/4ccd9c7e25f6d08158a4.js"></script>

5. Now, save your changes, and head over to your test site to see the changes. On your offline survey you should see your message appear and there should be not buttons on your survey.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-adzTqGr-nKw/ViOovQtE8WI/AAAAAAAAAbY/dMdGPx_-wSI/s1600/1.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-adzTqGr-nKw/ViOovQtE8WI/AAAAAAAAAbY/dMdGPx_-wSI/s1600/1.png" /></a></div>
<div class="separator" style="clear: both; text-align: center;">
<br /></div>
</div>
<div>
<br />
Summary: This tutorial showed you how to remove the Cancel &amp; Submit buttons from the Offline Surevey.</div>
<div>
<br /></div>
<div>
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.</div>

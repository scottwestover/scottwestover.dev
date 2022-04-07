---
title: "AEM ShareThis Component Tutorial"
date: 2015-03-17 00:00:00
desc: "AEM ShareThis Component Tutorial"
tags: [
  "AEM",
  "Tutorial"
]
categories: [
  "AEM",
  "Tutorial"
]
---

The purpose of this tutorial is to create an AEM Component that uses the ShareThis plugin that will allow users to share your content easily. For this tutorial we will be using crxde lite. This tutorial does not go into full detail, but does provide all the code that was used in the creation of this component for learning purposes.<br />
<br />
For this tutorial I was using: AEM 6.0. You should be able to follow along with other versions of this software.<br />
<br />
ShareThis is a tool that makes it easy to share your content across many social media websites. ShareThis also allows you to track when your content is shared. This is all accomplished by using their simple to use plugin. You can find more information here:<br />
<br />
<a href="http://www.sharethis.com/" target="_blank"><span style="color: blue;">http://www.sharethis.com/</span></a><br />
<br />
In order to follow along with this tutorial, you will need an account with ShareThis. The reason you need an account is because they will assign you a publisher id, which you will need in order to use their plugin. If you do not have an account, click on the link above and then sign up for their site. Registering is free and only takes a few seconds.<br />
<br />
Now that you have an account with ShareThis, we can get started.<br />
<br />
1. Once you have your local instance of AEM running, navigate to crxde lite. In your project folder, go to the "components" folder, right click and choose "Create Component". An example is posted below:<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-lb4CWpxNKO8/VQcTabTLhwI/AAAAAAAAAGY/sGiFnd8EdPE/s1600/Untitled.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="270" src="https://4.bp.blogspot.com/-lb4CWpxNKO8/VQcTabTLhwI/AAAAAAAAAGY/sGiFnd8EdPE/s1600/Untitled.png" width="320" /></a></div>
<br />
Just keep clicking "Next" until the component is created.<br />
<br />
2. Open the JSP file that was just created for your component and replace the content with the following code:<br />
<br />
<script src="https://gist.github.com/scottwestover/e68ff636c0885f8f5eff.js"></script><br />
3. Next, right click on the component you just created, and choose "Create Dialog". An example is posted below:<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-i14Le1YV-P0/VQcWFQjAcJI/AAAAAAAAAGk/X5z-6ZjH1NQ/s1600/Untitled2.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="209" src="https://4.bp.blogspot.com/-i14Le1YV-P0/VQcWFQjAcJI/AAAAAAAAAGk/X5z-6ZjH1NQ/s1600/Untitled2.png" width="320" /></a></div>
<br />
4. Navigate to the "tab1" node under the dialog you just created. Right click on the node and choose "Create Node". Enter the following information:<br />
<ul>
<li>Name: items</li>
<li>Type: cq:WidgetCollection</li>
</ul>
<div>
<br />
5. On the "items" node that you just created, right click and choose "Create Node". Enter the following information:</div>
<div>
<ul>
<li>Name: pubID</li>
<li>Type: cq:Widget</li>
</ul>
<div>
<br />
6. Your dialog node for the component should look similar to this:</div>
</div>
<div>
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-iI5L4j5-KyY/VQcYRFk3csI/AAAAAAAAAGw/fxifMjkNTk4/s1600/Untitled3.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://4.bp.blogspot.com/-iI5L4j5-KyY/VQcYRFk3csI/AAAAAAAAAGw/fxifMjkNTk4/s1600/Untitled3.png" /></a></div>
<div>
<br /></div>
7. On the "pubID" node that you created, add the following properties:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-0GaSmgwGTuo/VQcYpaZiugI/AAAAAAAAAG4/lPhETNu4YS0/s1600/Untitled4.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="139" src="https://3.bp.blogspot.com/-0GaSmgwGTuo/VQcYpaZiugI/AAAAAAAAAG4/lPhETNu4YS0/s1600/Untitled4.png" width="640" /></a></div>
<br />
<div class="separator" style="clear: both;">
8. Now you just need a template to add this component to. If you already have a page that you can add components to, you can skip these next few steps and go to step 13.&nbsp;</div>
<div class="separator" style="clear: both;">
<br /></div>
<div class="separator" style="clear: both;">
9. In your project folder go to your "components" folder, right click on it and choose "Create Component". An example is posted below:</div>
<div class="separator" style="clear: both;">
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-llJTWS3GJow/VQMX7OTdVsI/AAAAAAAAAFs/s8YQHchzyiQ/s1600/Untitled.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="273" src="https://3.bp.blogspot.com/-llJTWS3GJow/VQMX7OTdVsI/AAAAAAAAAFs/s8YQHchzyiQ/s1600/Untitled.png" width="320" /></a></div>
<div class="separator" style="clear: both;">
<br /></div>
<div class="separator" style="clear: both;">
You can keep clicking next until you have the option to create the component.</div>
<div class="separator" style="clear: both;">
<br /></div>
<div class="separator" style="clear: both;">
10. Open up the "empty.jsp" file that was created and replace all the code inside with the following code:</div>
<div class="separator" style="clear: both;">
<br /></div>
<br />
<div class="separator" style="clear: both;">
11. In your project folder, create a "templates" folder if one does not already exist. Right click on this folder and choose "Create Template". An example is posted below:</div>
<div class="separator" style="clear: both;">
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-r_vZ8o4yf2w/VQMbOCy8YKI/AAAAAAAAAGE/33tY-YG3ksU/s1600/Untitled2.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="274" src="https://2.bp.blogspot.com/-r_vZ8o4yf2w/VQMbOCy8YKI/AAAAAAAAAGE/33tY-YG3ksU/s1600/Untitled2.png" width="320" /></a></div>
<div class="separator" style="clear: both;">
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both;">
You will want to update the "Resource Type:" field with the path to the "empty" component you just created. Click next and in the "Allowed Paths" option, add "/content(/.*)?". Then keep clicking next until you have an option to create a template.&nbsp;</div>
<div class="separator" style="clear: both;">
<br /></div>
<div class="separator" style="clear: both;">
12. Next go to the websites console and choose the option to create a page. Make sure to choose the "Empty Template" from the template options.</div>
<div class="separator" style="clear: both;">
<br /></div>
<div class="separator" style="clear: both;">
13. Now, open the web page and add the ShareThis component to the page. You can do this by switching over to the Classic UI, and then selecting design mode from the sidekick. Next, click on edit the design of your paragraph system, and check the box next to the "Share This Component". Then switch back to edit mode, and add the component to your page.</div>
<div class="separator" style="clear: both;">
<br /></div>
<div class="separator" style="clear: both;">
Now click on the component to go into the dialog and enter your developer ID. Once the page is refreshed, the component will display the ShareThis buttons.</div>
<br />
Summary: This tutorial showed you how to create a component that uses the ShareThis plugin, how to add a custom dialog to the component for the publisher ID, and how to add this component to a page.<br />
<br />
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.<br />
<br />
You can download a package of the component on GitHub from here:&nbsp;<a href="https://github.com/scottwestover/ShareThis-AEM-Component" target="_blank"><span style="color: blue;">GitHub AEM Component</span></a>
---
title: "AEM Basic Project Setup Tutorial"
date: 2015-03-16 00:00:00
desc: "AEM Basic Project Setup Tutorial"
tags: [
  "AEM",
  "Tutorial"
]
categories: [
  "AEM",
  "Tutorial"
]
---

The purpose of this tutorial is to show you how to set up a basic project structure in AEM. For this tutorial we will be using crxde lite. This tutorial does not go into full detail, but does provide all the code that was used in the creation of this project for learning purposes.<br />
<br />
For this tutorial I was using AEM 6.0. You should be able to follow along with other versions of this software.<br />
<br />
Lets get started.<br />
<br />
1. Once your instance of AEM is up and running, navigate to crxde lite. Right click on the "apps" folder and choose "Create Folder". An example is posted below:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-C66nzN4s3nU/VQdHuhyvVhI/AAAAAAAAAI4/KEhQ8UFPyLE/s1600/Untitled.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="237" src="https://2.bp.blogspot.com/-C66nzN4s3nU/VQdHuhyvVhI/AAAAAAAAAI4/KEhQ8UFPyLE/s1600/Untitled.png" width="400" /></a></div>
<br />
2. Now right click on the "myProject" folder and choose "Create Folder". You will want to create the following folders under the "myProject" folder.
<br />
<ul>
<li>components</li>
<ul>
<li>page</li>
</ul>
<li>install</li>
<li>src</li>
<li>templates</li>
</ul>
<br />
3. Your folder structure should look like this when you are done:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-YjlpmyXlLWA/VQdIs0-KgZI/AAAAAAAAAJE/t-XxBVRcMdc/s1600/Untitled2.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-YjlpmyXlLWA/VQdIs0-KgZI/AAAAAAAAAJE/t-XxBVRcMdc/s1600/Untitled2.png" /></a></div>
<br />
4. Now we will create the page component. Right click on the "page" folder that you created and choose "Create Component". An example is posted below:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-fYkcdjYTlVA/VQdJiuDPiCI/AAAAAAAAAJM/GkxhNSieuy4/s1600/Untitled3.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="337" src="https://1.bp.blogspot.com/-fYkcdjYTlVA/VQdJiuDPiCI/AAAAAAAAAJM/GkxhNSieuy4/s1600/Untitled3.png" width="400" /></a></div>
<br />
Keep clicking the "Next" button until you can click the "OK" button to create the component.<br />
<br />
<span style="color: orange;">Note:</span> In AEM 6, you have to specify the "Super Type" for the page component, otherwise it will not show up in the template list. This was not required in previous versions.<br />
<br />
5. Open the JSP file that was just created with your component and replace the code inside with the following:<br />
<br />
<script src="https://gist.github.com/scottwestover/5012f073d3ef6b06f233.js"></script>

6. Now we need to create a template that will display the page component. Right click on the templates folder and choose "Create Template". An example is posted below:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-yKVCdId8KPQ/VQdMLFdywoI/AAAAAAAAAJY/w_8dI0jwBWo/s1600/Untitled4.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="338" src="https://1.bp.blogspot.com/-yKVCdId8KPQ/VQdMLFdywoI/AAAAAAAAAJY/w_8dI0jwBWo/s1600/Untitled4.png" width="400" /></a></div>
<br />
Click the "Next" button. Click the "+" icon on Allowed Paths and enter the following value: <b>/content(/.*)?</b>. Then keep clicking the "Next" button until you can click the "OK" button to create the template.<br />
<br />
7. Make sure you save everything and then head over to the site admin console to create a new web page. Click on "Websites", click the "New..." drop down button, and then choose "New Page". In the window that pops up, make sure you choose the "Simple Page Template" and type in the following title - <b>My Site</b>.<br />
<br />
8. Finally, open up the new page you just created. All you should see is a simple parsys component that will let you add components to the page.<br />
<br />
You now have a sample project setup that you can use to start creating your first AEM web site. You can use this sample project as a starting point in any of the tutorials on this blog.<br />
<div>
<br />
Summary: This tutorial showed you how to create the basic project structure in AEM, a page component, a template, and how to create a web page using this template.<br />
<br />
You can read more information on creating your first site in AEM here:&nbsp;<span style="color: blue;"><a href="http://docs.adobe.com/docs/en/cq/5-6-1/howto/website.html">Create a web site</a>.</span></div>
<br />
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.<br />
<br />
You can download a package of the component on GitHub from here:&nbsp;<span style="color: blue;"><a href="https://github.com/scottwestover/AEM-Getting-Started">AEM-Getting-Started</a>.</span>
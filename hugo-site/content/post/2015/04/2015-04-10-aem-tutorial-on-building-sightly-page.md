---
title: "AEM Tutorial On Building A Sightly Page Component"
date: 2015-04-10 00:00:00
desc: "AEM Tutorial On Building A Sightly Page Component"
tags: [
  "AEM",
  "Tutorial"
]
categories: [
  "AEM",
  "Tutorial"
]
---

The purpose of this tutorial is to show you how to build an AEM page component using sightly. You can read more about sightly here:&nbsp;<a href="http://docs.adobe.com/content/docs/en/aem/6-0/develop/sightly.html"><span style="color: blue;">Sightly</span></a><br />
<br />
For this tutorial we will be using crxde lite. This tutorial does not go into full detail, but does provide all the code that was used in the creation of this component for learning purposes.<br />
<br />
For this tutorial I was using: AEM 6.0. You should be able to follow along with other versions of this software.<br />
<br />
In order to follow along with this tutorial, you will need to have a basic project structure already set up, or you can follow along with this tutorial here:<br />
<br />
<a href="http://scottwestover.blogspot.com/2015/03/aem-basic-project-setup-tutorial.html" target="_blank"><span style="color: blue;">Basic Project Setup Tutorial</span></a><br />
<br />
If you have not completed the tutorial listed above, you can download a package from GitHub that has the completed project from here:&nbsp;<a href="https://github.com/scottwestover/AEM-Getting-Started" target="_blank"><span style="color: blue;">AEM-Getting-Started</span></a>. Just follow the instructions in the "readme" file to install the package into your instance of AEM.<br />
<br />
If you have completed the previous steps, we can get started.<br />
<br />
1. Once your instance of AEM is up and running, navigate to crxde lite. Navigate to the "myProject" folder, click on the "components" folder, and then click on the "page" folder.<br />
<br />
2. Right click on this folder and choose "Create Component". Enter the following information:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-eaynZTpxRJU/VSgOhfSgL7I/AAAAAAAAAKI/ArOv1THkbiU/s1600/1.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="276" src="https://2.bp.blogspot.com/-eaynZTpxRJU/VSgOhfSgL7I/AAAAAAAAAKI/ArOv1THkbiU/s1600/1.png" width="320" /></a></div>
<br />
<div>
Keep clicking the "Next" button until you can click the "OK" button.<br />
<br />
3. Right click on the component you just created, and choose "Create File". Name the file: simplePageSightly.html.<br />
<br />
4. Right click on the "simplePageSightly.jsp" file, and choose delete.<br />
<br />
5. Now, open the "simplePageSightly.html" file, and add the following code to it:<br />
<br />
<script src="https://gist.github.com/scottwestover/a8a1f0c87364367ec977.js"></script></div>
<div>
6. Next we need to create a template for the page component. Right click on the "templates" folder, and choose "Create Template". An example is posted below:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-KuyRhd3w-OQ/VSgRi5X2hdI/AAAAAAAAAKU/IqPfYB5KjKI/s1600/2.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="273" src="https://4.bp.blogspot.com/-KuyRhd3w-OQ/VSgRi5X2hdI/AAAAAAAAAKU/IqPfYB5KjKI/s1600/2.png" width="320" /></a></div>
<br />
Click the "Next" button. In the "Allowed Paths" section add the following: /content(/.*)?<br />
Keep clicking the "Next" button until you can click the "OK" button.<br />
<br />
7. Next go to the websites console and choose the option to create a page. Make sure to choose the "Simple Page Template - Sightly" from the template options.<br />
<br />
8. Now open up the page you just created, and you should see your simple page component that you just created with sightly.<br />
<br />
Summary: This tutorial showed you how to create a simple page component by using sightly. You can build upon this page by adding content to it, or by making a full site.</div>
<br />
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.<br />
<br />
You can download a package of the component on GitHub from here:&nbsp;<a href="https://github.com/scottwestover/AEM-Getting-Started/tree/Sightly-Page-Component" target="_blank"><span style="color: blue;">Sightly Page Component</span></a>
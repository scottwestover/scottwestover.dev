---
title: "AEM Component To Display X3D File Tutorial"
date: 2015-03-02 00:00:00
desc: "AEM Component To Display X3D File Tutorial"
tags: [
  "AEM",
  "Tutorial"
]
categories: [
  "AEM",
  "Tutorial"
]
---

The purpose of this tutorial is to develop a component for AEM, which will allow you to display 3D models. This is accomplished by loading in an X3D file and then displaying it on your webpage. For this tutorial we will be creating the component in crxde lite. This tutorial does not go into full detail, but does provide all of the code that was used in the creation of this component for learning purposes.<br />
<br />
This tutorial uses the following website:&nbsp;<a href="http://www.x3dom.org/" target="_blank"><span style="color: blue;">http://www.x3dom.org/</span></a><br />
<div>
  <br />
  <div>
    Lets get started -<br />
    <br />
  </div>
  <div>
    1. Once you have your version of AEM up and running, head over to crxde and create a component.
    An example is posted below.
  </div>
</div>
<div>
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="http://2.bp.blogspot.com/-mbB28BzBHoY/VPSUZazCcRI/AAAAAAAAAB0/X7kUkZC9sEg/s1600/Untitled.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="272" src="http://2.bp.blogspot.com/-mbB28BzBHoY/VPSUZazCcRI/AAAAAAAAAB0/X7kUkZC9sEg/s1600/Untitled.png" width="320" /></a>
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  2. Add the following node to the component you just created:
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="http://4.bp.blogspot.com/-C0dMUKJ3K3M/VPSrfcecp2I/AAAAAAAAACE/OiTqkNmPOM0/s1600/Untitled.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="196" src="http://4.bp.blogspot.com/-C0dMUKJ3K3M/VPSrfcecp2I/AAAAAAAAACE/OiTqkNmPOM0/s1600/Untitled.png" width="320" /></a>
</div>
<div class="separator" style="clear: both; text-align: center;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  On the clientlibs node add the following property - Name: categories, Value: 3dmodel
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  3. Add the following files to your clientlibs folder:
</div>
<div class="separator" style="clear: both; text-align: left;"></div>
<ul>
  <li>css.txt</li>
  <li>js.txt</li>
  <li>x3dom.css</li>
  <li>x3dom.js</li>
</ul>
<br />
<div class="separator" style="clear: both; text-align: left;">
  4. Open the css.txt file and add the following line - x3dom.css
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  5. Open the js.txt file and add the following line - x3dom.js
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  6. Open the following link and copy the content into the x3dom.css file:
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  <a href="https://gist.githubusercontent.com/scottwestover/6936c517f3ae811c6c34/raw/c92109d1a0af1a623570c42b5abbc43ba2da3d23/x3dom.css" target="_blank"><span style="color: blue;">x3dom.css</span></a>
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  7. Open the following link and copy the content into the x3dom.js file:
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  <a href="https://gist.githubusercontent.com/scottwestover/7c9f98517c22fb7a4c98/raw/13b2828525ad6372d0e449bdf9a50d6c56f6d6c7/x3dom.js" target="_blank"><span style="color: blue;">x3dom.js</span></a>
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  8. Add a dialog to the component that you created. Once this is created, navigate to the tab1 node and add the following node - Name: items, Value: cq:WidgetCollection
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  9. On the items node you just created add the following node - Name: linkURL, Value: cq:Widget
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  10. Your dialog should look like the following:
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="http://2.bp.blogspot.com/-B7WLHiFJExc/VPSxysYRvgI/AAAAAAAAACU/R8M3_Z2kqwU/s1600/Untitled2.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://2.bp.blogspot.com/-B7WLHiFJExc/VPSxysYRvgI/AAAAAAAAACU/R8M3_Z2kqwU/s1600/Untitled2.png" /></a>
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  11. Add the following properties to the linkURL node:
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="http://3.bp.blogspot.com/-jgJtMhBMiAA/VPSyLo-5qZI/AAAAAAAAACc/S7LDbRUtvWg/s1600/Untitled3.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="72" src="http://3.bp.blogspot.com/-jgJtMhBMiAA/VPSyLo-5qZI/AAAAAAAAACc/S7LDbRUtvWg/s1600/Untitled3.png" width="320" /></a>
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  12. Open your jsp file that was created with your component and add the following code to it:
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<script src="https://gist.github.com/scottwestover/4139e8f6760db08a6081.js"></script>
13. Upload a X3D file to your assets folder. Here is a link to a sample x3d file:&nbsp;<a href="http://doc.x3dom.org/tutorials/models/inline/Deer.x3d" target="_blank"><span style="color: blue;">Deer X3D File</span></a><br />
<br />
<div class="separator" style="clear: both;">
  14. Now you just need a template to add this component to. If you already have a page that you can add components to, you can skip these next few steps and go to step 19.&nbsp;
</div>
<div class="separator" style="clear: both;">
  <br />
</div>
<div class="separator" style="clear: both;">
  15. In your project folder go to your "components" folder, right click on it and choose "Create Component". An example is posted below:
</div>
<div class="separator" style="clear: both;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="http://3.bp.blogspot.com/-llJTWS3GJow/VQMX7OTdVsI/AAAAAAAAAFs/s8YQHchzyiQ/s1600/Untitled.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="273" src="http://3.bp.blogspot.com/-llJTWS3GJow/VQMX7OTdVsI/AAAAAAAAAFs/s8YQHchzyiQ/s1600/Untitled.png" width="320" /></a>
</div>
<div class="separator" style="clear: both;">
  <br />
</div>
<div class="separator" style="clear: both;">
  You can keep clicking next until you have the option to create the component.
</div>
<div class="separator" style="clear: both;">
  <br />
</div>
<div class="separator" style="clear: both;">
  16. Open up the "empty.jsp" file that was created and replace all the code inside with the following code:
</div>
<div class="separator" style="clear: both;">
  <br />
</div>
<script src="https://gist.github.com/scottwestover/5012f073d3ef6b06f233.js"></script>
<br />
<div class="separator" style="clear: both;">
  17. In your project folder, create a "templates" folder if one does not already exist. Right click on this folder and choose "Create Template". An example is posted below:
</div>
<div class="separator" style="clear: both;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="http://2.bp.blogspot.com/-r_vZ8o4yf2w/VQMbOCy8YKI/AAAAAAAAAGE/33tY-YG3ksU/s1600/Untitled2.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="274" src="http://2.bp.blogspot.com/-r_vZ8o4yf2w/VQMbOCy8YKI/AAAAAAAAAGE/33tY-YG3ksU/s1600/Untitled2.png" width="320" /></a>
</div>
<div class="separator" style="clear: both;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;"></div>
<div class="separator" style="clear: both;">
  You will want to update the "Resource Type:" field with the path to the "empty" component you just created. Click next and in the "Allowed Paths" option, add "/content(/.*)?". Then keep clicking next until you have an option to create a template.&nbsp;
</div>
<div class="separator" style="clear: both;">
  <br />
</div>
<div class="separator" style="clear: both;">
  18. Next go to the websites console and choose the option to create a page. Make sure to choose the "Empty Template" from the template options.
</div>
<div class="separator" style="clear: both;">
  <br />
</div>
<div class="separator" style="clear: both;">
  19. Now, open the web page and add the 3D component to the page. You can do this by switching over to the Classic UI, and then selecting design mode from the sidekick. Next, click on edit the design of your paragraph system, and check the box next to the "3D Model Component". Then switch back to edit mode, and add the component to your page.
</div>
<div class="separator" style="clear: both;">
  <br />
</div>
<div class="separator" style="clear: both;">
  Now click on the component to go into the dialog and choose a X3D file. Once the page is refreshed, the component will display that file.
</div>
<br />
I hope you enjoyed this tutorial. If you have any questions or comments please feel free to post them below.<br />
<br />
You can download a package of the component on GitHub from here:<br />
<a href="https://github.com/scottwestover/3D-Model-Component-AEM" target="_blank"><span style="color: blue;">3D-Model-Component-AEM</span></a><br />
<br />
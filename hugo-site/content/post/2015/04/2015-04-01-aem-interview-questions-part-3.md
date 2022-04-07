---
title: "AEM Interview Questions Part 3"
date: 2015-04-01 00:00:00
desc: "AEM Interview Questions Part 3"
tags: [
  "AEM",
  "Interview Prep"
]
categories: [
  "AEM",
  "Interview Prep"
]
---

<span style="font-family: inherit;">This is part three of my AEM interview&nbsp;questions. You find the other parts here:</span><br />
<span style="font-family: inherit;"><br />
<span style="color: blue;"><a href="http://scottwestover.blogspot.com/2015/03/aem-interview-questions.html">Part 1</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/03/aem-interview-questions-part-2.html">Part 2</a>&nbsp;-&nbsp;</span></span><span style="color: blue;"><a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-4.html">Part 4</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-5.html">Part 5</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-6.html">Part 6</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/05/aem-interview-questions-part-7.html">Part 7</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/05/aem-interview-questions-part-8.html">Part 8</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/08/aem-interview-questions-pdf.html">PDF</a></span><br />
<span style="font-family: inherit;"><br /></span>
<span style="font-family: inherit;">Here are some more AEM interview questions that could come up during a technical interview:</span><br />
<span style="font-family: inherit;"><br /></span>
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">Q</span><span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">:&nbsp;</span><span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">How do you build a bundle through crxde?</span><br />
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">You can
build a bundle through crxde by navigating to the source folder of your project
located under “apps”. Once you do this, right click on the “src” folder and
choose to create a bundle. This will open the wizard that will walk you through
creating your bundle.</span></span><br />
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span>


<span style="line-height: 107%;"><span style="font-family: inherit;">It is recommended that you no longer use crxde
to create OSGI bundles for AEM. Instead you should be using Maven.</span></span><span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><br /></span>
</span><br />
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: What is the purpose of the Activator.java file</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">The purpose
of the Activator.java file is that it is to be notified any time there are
bundle start and stop events for that bundle. The Activator.java file is an
optional listener class that is created when you create a bundle through crxde.</span></span><br />
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><o:p></o:p></span></span></div>
<div class="MsoNormal">
<span style="font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: What is a CQ5 overlay/override component</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">The
overlay/override component is used when you want to use an out of the box
component in AEM and you want to add extra features to it and you want to
change it across all instances of that component. For example if you want to
add features to the out of the box “text” component, but you don’t want to
create a new component, you would want to copy the “text” component from
“libs/foundation/components” to “apps/foundation/components” and keep the same
folder structure that is used.</span></span><br />
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span>


<span style="line-height: 107%;"><span style="font-family: inherit;">When this is done, any changes that done to this
new component will be reflected in the out of the box “text” component, without
changing the original code under “libs”. It is generally not a good practice to
modify the original code, which is why CQ offers the ability to use overlays.</span></span><br />
<ul>
</ul>
</div>
</div>
</div>
<div class="MsoNormal">
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;"><br /></span></span>
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: What is the difference between a dialog and a design dialog</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<span style="font-family: inherit; line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="font-family: inherit; line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="font-family: inherit; line-height: 107%;">A dialog is
a key element of the component because they provide an interface for authors to
configure and provide input to that component. This input will be stored at the
page level in the jcr.</span><br />
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"></span></span><br />
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><span style="line-height: 107%;"><br /></span></span></span></div>
<span style="line-height: 107%;"><span style="font-family: inherit;">
A design dialog is a dialog that will only
display when you are in design mode in AEM. The input that is received here
will be stored at the template level and will be accessed across the whole
site.</span></span><br />
<div class="MsoNormal">
<span style="font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: What is extending a component</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<span style="font-family: inherit; line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="font-family: inherit; line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="font-family: inherit; line-height: 107%;">Extending
a component is when you want to create a new component that will not override a
base component, but will have the same features as the original so that you can
change or build upon that component.</span><br />
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span>


<span style="line-height: 107%;"><span style="font-family: inherit;">In order to extend a component, you must set the
“sling:resourceSuperType” of the component to the base component you would like
to extend. By doing this, you will inherit everything from the base component.</span></span><span style="font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
</div>
<span style="font-family: inherit;">I plan to add more interview questions to this blog, so make sure to check back.</span><br />
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"></span><br /></span>
<span style="font-family: inherit;">I hope you enjoyed this post. Please feel free to post any comments below.</span></div>

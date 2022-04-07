---
title: "AEM Interview Questions Part 4"
date: 2015-04-08 00:00:00
desc: "AEM Interview Questions Part 4"
tags: [
  "AEM",
  "Interview Prep"
]
categories: [
  "AEM",
  "Interview Prep"
]
---

<span style="font-family: inherit;">This is part four of my AEM interview&nbsp;questions. You find the other parts here:</span><br />
<span style="font-family: inherit;"><br /><span style="color: blue;"><a href="http://scottwestover.blogspot.com/2015/03/aem-interview-questions.html">Part 1</a>&nbsp;- <a href="http://scottwestover.blogspot.com/2015/03/aem-interview-questions-part-2.html">Part 2</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-3.html">Part 3</a>&nbsp;-&nbsp;</span></span><span style="color: blue;"><a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-5.html">Part 5</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-6.html">Part 6</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/05/aem-interview-questions-part-7.html">Part 7</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/05/aem-interview-questions-part-8.html">Part 8</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/08/aem-interview-questions-pdf.html">PDF</a></span><br />
<span style="font-family: inherit;"><br />Here are some more AEM interview questions that could come up during a technical interview:</span><br />
<span style="font-family: inherit;"><br /><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">:&nbsp;</span><span style="color: orange; line-height: 17.1200008392334px;">How does sightly differ from other templating systems?</span></span><br />
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="font-family: inherit; line-height: 107%;">Sightly
differs from other templating systems in three ways. Sightly is secure by default,
it offers separation of concerns, and sightly is HTML5 because it is a valid
HTML5 file. Sightly is secure by default because it automatically filters and
escapes all variables being output to the presentation layer to prevent
cross-site-scripting vulnerabilities.</span></span><br />
<span style="font-family: inherit;"><span style="font-family: inherit; line-height: 107%;"><br /></span></span>
<span style="font-family: inherit;"><span style="font-family: inherit; line-height: 107%;">Sightly offers seperation of concern because it is purposely limited to ensure that a real programming language is used to express the corresponding logic. This is done through the Use-API pattern.</span></span></div>
<div class="MsoNormal">
<span style="font-family: inherit; line-height: 17.1200008392334px;"><br /></span>
<br />
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: Can you create a page without a template</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">Pages are
usually created by selecting a template for the page when you create them in
the Website console. However, a page can be created manually in the crxde by
using the same properties that are created when you make a page in the Website
console.</span></span><br />
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span>


<br />
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;">For example,
in crxde under the content folder, create a node with the following type
“cq:Page” and save it. Then add a child node with the following type
“cq:PageContent”. Then you can add the required properties to show any
components you want displayed on the page. <o:p></o:p></span></span></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span></div>
<span style="line-height: 107%;"><span style="font-family: inherit;">It is generally not good practice to create
pages manually.</span></span><br />
<div class="MsoNormal">
<span style="font-family: inherit; line-height: 17.1200008392334px;"><o:p></o:p></span></div>
<div class="MsoNormal">
<span style="font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: What are xtypes and how are they useful in AEM</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">In the ExtJS
language an xtype is a symbolic name given to a class. In AEM these xtypes are
widgets that used in the creation of components. AEM comes with a bunch of
widgets that are available out of the box. You can also create and define your
own xtype to be used in AEM.</span></span><br />
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span>


<span style="line-height: 107%;"><span style="font-family: inherit;">An example of an xytpe is when you are creating
your dialog for your component, and you want the author to be able to enter
text, you would add a “cq:Widget” that has an xtype property of “textfield”.</span></span><br />
<ul></ul>
</div>
</div>
</div>
<div class="MsoNormal">
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;"><br /></span><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: How do you add properties to the Page Properties dialog</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">You can add
properties to your page properties dialog by copying the dialog located under
“libs/foundation/components/page/dialog” and adding it to your page template.
This will allow you to add new tabs and add new properties that you would like
the author to chooses from for pages that use that template.</span></span><br />
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span>


<br />
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;">You could
modify the original page dialog as well to get the same result, however it is
not recommended.<o:p></o:p></span></span></div>
<div class="MsoNormal">
<div class="MsoNormal">
<span style="font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: What is the difference between the Author and Publish environment</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">A production
environment usually has two difference instances of AEM running. One is the
author instance, and the other is the publish instance. These two instances are
usually kept in two different settings.</span></span><br />
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span>


<span style="line-height: 107%;"><span style="font-family: inherit;">The author instance is where you will enter and
manage content for your website. This is where you will administer your site as
well. The author environment is usually kept behind a firewall. The publish
instance is where you will make your content available for your targeted
audience. The publish environment is usually kept in a Demilitarized Zone
(DMZ).</span></span><br />
<div class="MsoNormal">
<span style="font-family: inherit;"><br />
I plan to add more interview questions to this blog, so make sure to check back.</span></div>
</div>
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"></span><br />I hope you enjoyed this post. Please feel free to post any comments below.</span></div>

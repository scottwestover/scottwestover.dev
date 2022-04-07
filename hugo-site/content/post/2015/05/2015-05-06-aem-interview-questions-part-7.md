---
title: "AEM Interview Questions Part 7"
date: 2015-05-06 00:00:00
desc: "AEM Interview Questions Part 7"
tags: [
  "AEM",
  "Interview Prep"
]
categories: [
  "AEM",
  "Interview Prep"
]
---

<span style="font-family: inherit;">This is part seven of my AEM interview&nbsp;questions. You find the other parts here:</span><br />
<span style="font-family: inherit;"><br /><span style="color: blue;"><a href="http://scottwestover.blogspot.com/2015/03/aem-interview-questions.html">Part 1</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/03/aem-interview-questions-part-2.html">Part 2</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-3.html">Part 3</a>&nbsp;- <a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-4.html">Part 4</a>&nbsp;- <a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-5.html">Part 5</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-6.html">Part 6</a>&nbsp;-&nbsp;</span></span><span style="color: blue;"><a href="http://scottwestover.blogspot.com/2015/05/aem-interview-questions-part-8.html">Part 8</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/08/aem-interview-questions-pdf.html">PDF</a></span><br />
<span style="font-family: inherit;"><br />Here are some more AEM interview questions that could come up during a technical interview:</span><br />
<span style="font-family: inherit;"><br /><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: How can you inherit properties from one dialog to another</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span><br />
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">You can
inherit properties from one dialog to another if the new component has the
“sling:resourceSuperType” and this property is set to the base component. This
will automatically inherit all the properties from the original dialog.</span></span><br />
<span style="font-family: inherit; line-height: 107%;"><br /></span>
<span style="font-family: inherit; line-height: 107%;">If you only
want to inherit certain tabs from a dialog, you can use the “cq:include” xtype
to inherit just that tab.</span><br />
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span>
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">Q</span><span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">: What are Clientlibs</span><span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">?</span></div>
<div class="MsoNormal">
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">AEM allows
you to create Client-side Library Folders, which allow you to store your client
side code in the repository, organized it into categories, and define when and
how each category of code is to be served to the client.</span></span><br />
<span style="font-family: inherit; line-height: 107%;"><br /></span>
<span style="font-family: inherit; line-height: 107%;">These
folders are a nice way of keeping all of your JavaScript and CSS files in one
location, and a way to call all the files with one line of code.</span><br />
<div class="MsoNormal">
<span style="font-family: inherit; line-height: 17.1200008392334px;"><o:p></o:p></span></div>
<div class="MsoNormal">
<span style="font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: What are workflows</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">Workflows
are a way to automate Experience Manager activities. They are a series of steps
that are executed when they are triggered. Some examples of these steps are
activating a page, sending an email, approving a page, etc.</span></span><br />
<span style="font-family: inherit; line-height: 107%;"><br /></span>
<span style="font-family: inherit; line-height: 107%;">Workflows
can be used to implement approval processes and to receive sign-off by various
participants.</span><br />
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span></div>
</div>
</div>
</div>
<div class="MsoNormal">
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: What is FileVault</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">FileVault
is a tool that is offered by Adobe that will map the content of the CRX
instance to your file system. The VLT tool is similar to a Subversion client
since it will allow you to checkout content and to check-in content.</span></span><br />
<div class="MsoNormal">
<div class="MsoNormal">
<span style="font-family: inherit;"><br />I plan to add more interview questions to this blog, so make sure to check back.</span></div>
</div>
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"></span><br />I hope you enjoyed this post. Please feel free to post any comments below.</span></div>

---
title: "AEM Interview Questions Part 1"
date: 2015-03-12 00:00:00
desc: "AEM Interview Questions Part 1"
tags: [
  "AEM",
  "Interview Prep"
]
categories: [
  "AEM",
  "Interview Prep"
]
---

<span style="font-family: inherit;">When you are preparing for technical interview, it is sometimes beneficial to know what types of questions that may be asked during your interview. I am going to list some questions that may be asked during an AEM interview, and the answers to these questions. This is not a definitive guide by any means, but a way to get going in the right direction.</span><br />
<span style="font-family: inherit;"><br /></span>
<span style="font-family: inherit;">This is part one of my AEM interview&nbsp;questions. You find the other parts here:</span><br />
<span style="font-family: inherit;"><br /></span><span style="color: blue;"><a href="http://scottwestover.blogspot.com/2015/03/aem-interview-questions-part-2.html"><span style="color: blue;">Part 2</span></a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-3.html"><span style="color: blue;">Part 3</span></a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-4.html"><span style="color: blue;">Part 4</span></a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-5.html"><span style="color: blue;">Part 5</span></a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-6.html"><span style="color: blue;">Part 6</span></a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/05/aem-interview-questions-part-7.html"><span style="color: blue;">Part 7</span></a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/05/aem-interview-questions-part-8.html"><span style="color: blue;">Part 8</span></a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/08/aem-interview-questions-pdf.html"><span style="color: blue;">PDF</span></a></span><br />
<span style="font-family: inherit;"><br /></span>
<span style="color: orange; font-family: inherit;">Q: What is AEM?</span><br />
<span style="font-family: inherit;"><br /></span>
<span style="font-family: inherit;"><span style="color: orange;">A:</span>&nbsp;<span style="line-height: 107%;">Adobe Experience Manager (AEM), is a java based content management system that is offered from Adobe. It
was previously called Day CQ5, but was acquired from Adobe in 2010. AEM is
based on a content repository and uses the JCR to access the content in the
repository. AEM uses the Apache Sling framework to map request url to the
corresponding node in the content repository. It also uses the OSGI framework
to internally allow modular application development.</span></span><br />
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span>
<span style="line-height: 17.1200008392334px;"><span style="font-family: inherit;"><span style="color: orange;">Q:</span> <span style="color: orange;">What are the advantages of AEM over another CMS?</span></span></span><br />
<span style="line-height: 17.1200008392334px;"><span style="font-family: inherit;"><br /></span></span>
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A:</span>&nbsp;</span><span style="line-height: 107%;">One
big advantage of AEM over another CMS is how it integrates with other products
from Adobe and with the Adobe Marketing Cloud. AEM comes built in with features
like workflows to control content in the CMS, the use of search queries to find
anything you are looking for, setting up social collaboration, tagging content,
and a way to manage your digital content.</span></span><br />
<br />
<div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;">AEM also
includes a way to manage mobile applications, mobile websites, e-commerce, and
marketing campaign management.&nbsp;</span></span></div>
<h1>
<span style="color: orange; font-family: inherit; font-size: small; font-weight: normal;"><span style="line-height: 107%;">Q</span><span style="line-height: 107%;">: </span><span style="line-height: 107%;">What is the technology stack that CQ5 is based on?</span></span></h1>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 107%;"><span style="color: orange;">A</span></span><span style="line-height: 107%;"><span style="color: orange;">:</span> The CQ5 technology stack is based
on three technologies. These technologies are: Apache Sling, OSGI (Apache
Felix), and the Java Content Repository (JCR).<o:p></o:p></span></span></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;">Apache Sling
is a RESTful framework that is used to access a jcr over http protocol. It will
then map that request url to the node in the jcr. <o:p></o:p></span></span></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;">OSGI is a
framework that is used for modular application development using Java. Each
module, which is called a bundle, can be stopped and started independently
during runtime.<o:p></o:p></span></span></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span></div>
<div class="MsoNormal">
</div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;">The Java
Content Repository uses the JSR-170 API to access the content repository by
using Java independently of the physical implementation. CQ5 uses its own
implementation of the jcr called CRX.<o:p></o:p></span></span></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 107%;">Q</span><span style="color: orange; line-height: 107%;">: </span><span style="color: orange; line-height: 107%;">What is the role of the dispatcher?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; line-height: 107%;"><span style="font-family: inherit;"><br /></span></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 107%;"><span style="color: orange;">A</span></span><span style="line-height: 107%;"><span style="color: orange;">:</span> The dispatcher is AEM’s caching
and/or load balancing tool. By using the dispatcher it can also help protect
your AEM server from attack since it will be using cached pages. The goal of
the dispatcher is to cache as much content as possible, so it does not need to
access the layout engine.<o:p></o:p></span></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 107%;"><br /></span></span></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;">Load
balancing is the practice of distributing computational load of the website across
several instances of AEM.<o:p></o:p></span></span></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span></div>
<div class="MsoNormal">
</div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;">The benefits
of using the dispatcher as a load balancing tool is so that you gain increased
processing power since the dispatcher shares document requests between several
instances of AEM, and to have increased fail-safe coverage. This is
accomplished by if the dispatcher does not receive responses <span style="font-family: inherit;">from an instance,
it will automatically relay the request to another instance.</span></span></span></div>
<h1>
<span style="font-family: inherit; font-size: small;"><span style="font-weight: normal;"><span style="color: orange;"><span style="line-height: 107%;">Q</span><span style="line-height: 107%;">: </span><span style="line-height: 107%;">What is sightly?</span></span></span><b><span style="color: windowtext; line-height: 107%;"><o:p></o:p></span></b></span></h1>
<div>
<span style="font-family: inherit; font-size: small;"><span style="font-weight: normal;"><span style="color: orange;"><span style="line-height: 107%;"><br /></span></span></span></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 107%;"><span style="color: orange;">A</span></span><span style="line-height: 107%;"><span style="color: orange;">:</span> Sightly is an HTML templating
language that was introduced in AEM 6.0. It is meant to take the place of JSP
files and is the preferred templating system for HTML. The name sightly means
“pleasing to the eye”, and its focus is to keep your markup beautiful and
maintainable.</span></span></div>
<span style="font-family: inherit;"><br /></span>
<span style="font-family: inherit;">I plan to add more interview questions to this blog, so make sure to check back.</span><br />
<span style="font-family: inherit;"><br /></span>
<span style="font-family: inherit;">I hope you enjoyed this post. Please feel free to post any comments below.</span></div>

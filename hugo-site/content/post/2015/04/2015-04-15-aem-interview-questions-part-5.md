---
title: "AEM Interview Questions Part 5"
date: 2015-04-15 00:00:00
desc: "AEM Interview Questions Part 5"
tags: [
  "AEM",
  "Interview Prep"
]
categories: [
  "AEM",
  "Interview Prep"
]
---

<span style="font-family: inherit;">This is part five of my AEM interview&nbsp;questions. You find the other parts here:</span><br />
<span style="font-family: inherit;"><br /><span style="color: blue;"><a href="http://scottwestover.blogspot.com/2015/03/aem-interview-questions.html">Part 1</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/03/aem-interview-questions-part-2.html">Part 2</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-3.html">Part 3</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-4.html">Part 4</a>&nbsp;-&nbsp;</span></span><span style="color: blue;"><a href="http://scottwestover.blogspot.com/2015/04/aem-interview-questions-part-6.html">Part 6</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/05/aem-interview-questions-part-7.html">Part 7</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/05/aem-interview-questions-part-8.html">Part 8</a>&nbsp;-&nbsp;<a href="http://scottwestover.blogspot.com/2015/08/aem-interview-questions-pdf.html">PDF</a></span><br />
<span style="font-family: inherit;"><br />Here are some more AEM interview questions that could come up during a technical interview:</span><br />
<span style="font-family: inherit;"><br /><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">:&nbsp;</span><span style="color: orange; line-height: 17.1200008392334px;">What is a replication agent?</span></span><br />
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">A
replication agent is used to publish active content from the author environment
to the publish environment, to flush content from the dispatcher cache, and
return user input from the publish environment to the author environment. The
replication agents are central to AEM.</span></span><br />
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span>
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">Q</span><span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">: What is resource mapping</span><span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">?</span></div>
<div class="MsoNormal">
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">Resource
mapping is used to define redirects, vanity URLs and virtual hosts for AEM. You
can use resource mapping to prefix all requests with “/content” so the internal
structure of the AEM site is hidden from your visitors. You can also use
resource mapping to define a redirect so that all requests to the gateway page
of your site are redirected to another site.</span></span><br />
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span>
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">Q</span><span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">: What is resource resolution in Sling</span><span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;">?</span><br />
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">Resource
resolution in Sling is how Sling takes a URL and attempts to resolve it to a
script. This is done by extracting information from the URL. Here is an example
URL:</span></span><br />
<span style="font-family: inherit; line-height: 107%;"><br /></span>
<span style="font-family: inherit; line-height: 107%;">http://myhost/tools/spy.printable.a4.html/a/b?x=12</span><br />
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;">It can be
broken down as follows:<o:p></o:p></span></span></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;"><br /></span></span></div>
<table border="1" cellpadding="0" cellspacing="0" class="MsoTableGrid" style="border-collapse: collapse; border: none; mso-border-alt: solid windowtext .5pt; mso-padding-alt: 0cm 5.4pt 0cm 5.4pt; mso-yfti-tbllook: 1184;">
 <tbody>
<tr>
  <td style="border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.05pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">Protocol<o:p></o:p></span></div>
</td>
  <td style="border-left: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.05pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">Host<o:p></o:p></span></div>
</td>
  <td style="border-left: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">Content path<o:p></o:p></span></div>
</td>
  <td style="border-left: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">Selector(s)<o:p></o:p></span></div>
</td>
  <td style="border-left: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">Extension<o:p></o:p></span></div>
</td>
  <td style="border-left: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<br /></div>
</td>
  <td style="border-left: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">Suffix<o:p></o:p></span></div>
</td>
  <td style="border-left: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<br /></div>
</td>
  <td style="border-left: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">Param(s)<o:p></o:p></span></div>
</td>
 </tr>
<tr>
  <td style="border-top: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.05pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">http://<o:p></o:p></span></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.05pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">myhost<o:p></o:p></span></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">tools/spy<o:p></o:p></span></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">.printable.a4.<o:p></o:p></span></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">html<o:p></o:p></span></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">/<o:p></o:p></span></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">a/b<o:p></o:p></span></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">?<o:p></o:p></span></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 50.1pt;" valign="top" width="67"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<span style="font-family: inherit;">x=12<o:p></o:p></span></div>
</td>
 </tr>
</tbody></table>
<div class="MsoNormal">
<br /></div>
<div class="MsoNormal">
<span style="line-height: 107%;"><span style="font-family: inherit;">Sling uses
the content path that is extracted from the request to locate the resource in
the JCR. When this resource is located, the sling resource type is extracted,
and then it is used to located the script to be used for rendering that
content.<o:p></o:p></span></span></div>
<ul></ul>
</div>
</div>
</div>
<div class="MsoNormal">
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;"><br /></span><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: What design patterns are used in AEM?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">Since AEM is
built using OSGI, many of the design patterns for OSGI are valid. Some of these
design patterns are Singleton (Service), Adapter Service, Resource Adapter
Service, and Whiteboard.&nbsp;</span></span><br />
<span style="font-family: inherit; line-height: 107%;"><br /></span>
<span style="font-family: inherit; line-height: 107%;">Also, since
AEM is modular, you should be able to use any design pattern in your
application.</span><br />
<div class="MsoNormal">
<div class="MsoNormal">
<span style="font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<div class="MsoNormal">
<span style="font-family: inherit;"><span style="color: orange; line-height: 17.1200008392334px;">Q</span><span style="color: orange; line-height: 17.1200008392334px;">: What is reverse replication</span><span style="color: orange; line-height: 17.1200008392334px;">?</span></span></div>
<div class="MsoNormal">
<span style="color: orange; font-family: inherit; line-height: 17.1200008392334px;"><br /></span></div>
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"><span style="color: orange;">A</span></span><span style="line-height: 17.1200008392334px;"><span style="color: orange;">:</span>&nbsp;</span><span style="line-height: 107%;">Reverse
replication is the process of replicating content from publish environment to
the author environment. In order to accomplish this you need a reverse
replication agent on your author instance that is configured to get content
from the publish environment outbox.</span></span><br />
<div class="MsoNormal">
<span style="font-family: inherit;"><br />I plan to add more interview questions to this blog, so make sure to check back.</span></div>
</div>
<span style="font-family: inherit;"><span style="line-height: 17.1200008392334px;"></span><br />I hope you enjoyed this post. Please feel free to post any comments below.</span></div>

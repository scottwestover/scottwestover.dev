---
title: "LiveEngage - Using CSS To Modify Embedded Chat Buttons"
date: 2015-11-25 00:00:00
desc: "LiveEngage - Using CSS To Modify Embedded Chat Buttons"
tags: [
  "LiveEngage",
  "Tutorial"
]
categories: [
  "LiveEngage",
  "Tutorial"
]
---

Update: With the new HTML engagements in LiveEngage, this method is now outdated. It is recommended that you use the supported method listed above.<span style="background-color: white; color: #666666; font-family: &quot;merriweather&quot; , sans-serif; font-size: 13px; line-height: 24px;"><br /></span>
The purpose of this tutorial is to show you how to use your own custom CSS to modify your embedded chat buttons from LiveEngage.<br />
<br />
Currently in LiveEngage, the only options you have for an embedded button is to use an image or the few text styling elements that are available in the engagement studio. There is no way to use your own fonts, CSS, or HTML elements for your chat button, which can sometimes make it hard for your chat button to match the rest of the theme of your site.<br />
<br />
For example, if the rest of the links on your site have hover effects, or if the font family of the text in the links is 'Comic Sans MS', your embedded chat button will not match the feel of your site. In order to fix this, you can use custom CSS on your site to modify the default styling of the button.<br />
<br />
The embedded chat buttons have a class called 'LPMlabel', so by adding a CSS styling to the page with the !important attribute, it will override the default CSS.<br />
<br />
<div>
In the first example, we are going to use CSS to change the font-family of the embedded chat button, and in the second example we are going to use CSS to add a hoover effect to the embedded chat button.&nbsp;</div>
<div>
<br />
Let's get started:<br />
<br /></div>
<div>
Example 1: Change the default font-family<br />
<br />
Code:<br />
<br />
<script src="https://gist.github.com/scottwestover/0288c9fedac294708d69.js"></script>

<br />
Result:<br />
<span id="docs-internal-guid-355c8c3e-3a11-3461-7a5d-e9189bd9f97b"><br /></span>
<br />
<div dir="ltr" style="margin-left: 0pt;">
<table style="border-collapse: collapse; border: none; width: 624px;"><colgroup><col width="*"></col><col width="*"></col></colgroup><tbody>
<tr style="height: 0px;"><td style="border-bottom: solid #000000 1px; border-left: solid #000000 1px; border-right: solid #000000 1px; border-top: solid #000000 1px; padding: 7px 7px 7px 7px; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt; text-align: center;">
<span style="font-family: &quot;arial&quot;; font-size: 14.6667px; vertical-align: baseline; white-space: pre-wrap;">Before</span></div>
</td><td style="border-bottom: solid #000000 1px; border-left: solid #000000 1px; border-right: solid #000000 1px; border-top: solid #000000 1px; padding: 7px 7px 7px 7px; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt; text-align: center;">
<span style="font-family: &quot;arial&quot;; font-size: 14.6667px; vertical-align: baseline; white-space: pre-wrap;">After</span></div>
</td></tr>
<tr style="height: 0px;"><td style="border-bottom: solid #000000 1px; border-left: solid #000000 1px; border-right: solid #000000 1px; border-top: solid #000000 1px; padding: 7px 7px 7px 7px; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt; text-align: center;">
<span style="font-family: &quot;arial&quot;; font-size: 14.6667px; vertical-align: baseline; white-space: pre-wrap;"><img alt="2015-07-14_0935.png" height="67px;" src="https://lh5.googleusercontent.com/Dxuqs-2Prsczvudd-O7K4CyKLfCiQpdRv_T1jshnhBFK3ZQNxpGTkDSqbevMgBnQB0xeDWODt91KpHpFU3lSch8mbGwS81Oh1twZjrOODa_8uECZaBWXlAlxZQTbO67bOFSimD4" style="-webkit-transform: rotate(0.00rad); border: none; transform: rotate(0.00rad);" width="166px;" /></span></div>
</td><td style="border-bottom: solid #000000 1px; border-left: solid #000000 1px; border-right: solid #000000 1px; border-top: solid #000000 1px; padding: 7px 7px 7px 7px; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt; text-align: center;">
<span style="font-family: &quot;arial&quot;; font-size: 14.6667px; vertical-align: baseline; white-space: pre-wrap;"><img alt="2015-07-14_0935_001.png" height="42px;" src="https://lh4.googleusercontent.com/GUR4LPxUJmjqn1aUsA8K3OvTAyyZz0aSCnSULfBr4D9S3UFJdjqNSBvlMWQHgWoLpLDNAwQlWdwi0c4yPy4nI60nfOK7FFsIdxJmDtpBlniV7CU-w06D5Xypf6kOGbFPHDdXl14" style="-webkit-transform: rotate(0.00rad); border: none; transform: rotate(0.00rad);" width="143px;" /></span></div>
</td></tr>
</tbody></table>
</div>
<span id="docs-internal-guid-355c8c3e-3a11-3461-7a5d-e9189bd9f97b">
</span>
Example 2: Add Hover Effect<br />
<br />
Code:<br />
<br />
<script src="https://gist.github.com/scottwestover/2bd699bd595b047ce0a5.js"></script>

<br />
Result:<br />
<span id="docs-internal-guid-355c8c3e-3a10-037e-ffaa-677cb1a59e7a"><br /></span>
<br />
<div dir="ltr" style="margin-left: 0pt;">
<table style="border-collapse: collapse; border: none; width: 624px;"><colgroup><col width="*"></col><col width="*"></col></colgroup><tbody>
<tr style="height: 0px;"><td style="border-bottom: solid #000000 1px; border-left: solid #000000 1px; border-right: solid #000000 1px; border-top: solid #000000 1px; padding: 7px 7px 7px 7px; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt; text-align: center;">
<span style="font-family: &quot;arial&quot;; font-size: 14.6667px; vertical-align: baseline; white-space: pre-wrap;">Before</span></div>
</td><td style="border-bottom: solid #000000 1px; border-left: solid #000000 1px; border-right: solid #000000 1px; border-top: solid #000000 1px; padding: 7px 7px 7px 7px; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt; text-align: center;">
<span style="font-family: &quot;arial&quot;; font-size: 14.6667px; vertical-align: baseline; white-space: pre-wrap;">After</span></div>
</td></tr>
<tr style="height: 0px;"><td style="border-bottom: solid #000000 1px; border-left: solid #000000 1px; border-right: solid #000000 1px; border-top: solid #000000 1px; padding: 7px 7px 7px 7px; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt; text-align: center;">
<span style="font-family: &quot;arial&quot;; font-size: 14.6667px; vertical-align: baseline; white-space: pre-wrap;"><img alt="2015-07-14_1016.png" height="34px;" src="https://lh3.googleusercontent.com/IhB8GbNQym26V2fGc8L6HDYQ2-TfVvLlN6p6mrL9SB-9SFkv4qsUcMdCefJGy1KwiqA-45_MwsgAaMynPgvEJujMGiFi6N1Ncex97mhkJ1XOB_3f2uxM_PXQSC1TcVxNMCv98dY" style="-webkit-transform: rotate(0.00rad); border: none; transform: rotate(0.00rad);" width="127px;" /></span></div>
</td><td style="border-bottom: solid #000000 1px; border-left: solid #000000 1px; border-right: solid #000000 1px; border-top: solid #000000 1px; padding: 7px 7px 7px 7px; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt; text-align: center;">
<span style="font-family: &quot;arial&quot;; font-size: 14.6667px; vertical-align: baseline; white-space: pre-wrap;"><img alt="Untitled.png" height="39px;" src="https://lh4.googleusercontent.com/yc3hQV_WZNgfBLnE4miRBkpJ4Fsu20AbtREgL3kE4JpeDASVQmethbhQrfMaqifK8_27X8fiwnGXAnG8dzyXwNtY_JCED-yPzaOnmHUkj-vS22C5_sronzdg9FYId3_WAcbQcEM" style="-webkit-transform: rotate(0.00rad); border: none; transform: rotate(0.00rad);" width="133px;" /></span></div>
</td></tr>
</tbody></table>
</div>
<span id="docs-internal-guid-355c8c3e-3a10-037e-ffaa-677cb1a59e7a">
</span>
Summary: This tutorial showed you how to use custom CSS to modify the default styling of your embedded chat buttons.</div>
<div>
<br /></div>
<div>
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.</div>

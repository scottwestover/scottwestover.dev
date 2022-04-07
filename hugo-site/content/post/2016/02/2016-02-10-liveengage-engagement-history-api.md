---
title: "LiveEngage - Engagement History API Program To Send Email"
date: 2016-02-10 00:00:00
desc: "LiveEngage - Engagement History API Program To Send Email"
tags: [
  "LiveEngage"
]
categories: [
  "LiveEngage"
]
---


Today I wanted to share with you a program I made that will allow you to use the Engagement History API to send out emails for transcripts that have a particular keyword.<br />
<br />
The program will use the API to pull all of your chat transcripts for the previous day that contain a certain keyword, and then it will send it to an email address that you specify. The program makes use of the SendGrid API in order to send the emails.<br />
<br />
One example use case for this tool is if you wanted to get an email every time someone answered dissatisfied on your post chat survey, you could use that keyword and it will automatically pull those transcripts.<br />
<br />
In order to use the program, you will need to have a SendGrid account with an API key enabled on it. SendGrid allows for you to send up to 12,000 emails for free a month, and if you need to send more they offer very cheap plans. You will also need to have the Engagement History API enabled on your LiveEngage account in order to use the program.<br />
<div>
<br /></div>
<div>
If you are interested in checking out the program or getting the source code, you can find it on GitHub here:&nbsp;<a href="https://github.com/scottwestover/LiveEngageExamples/tree/master/APIs/Java-EHAPIProgram" target="_blank"><span style="color: blue;">https://github.com/scottwestover/LiveEngageExamples/tree/master/APIs/Java-EHAPIProgram</span></a></div>
<div>
<br />
I hope you enjoyed this post. If you have any questions or comments, please feel free to post them below.</div>

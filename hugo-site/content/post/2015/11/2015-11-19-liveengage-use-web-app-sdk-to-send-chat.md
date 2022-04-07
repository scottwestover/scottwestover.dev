---
title: "LiveEngage - Use The Web App SDK To Send Chat Lines To The Agent Console"
date: 2015-11-19 00:00:00
desc: "LiveEngage - Use The Web App SDK To Send Chat Lines To The Agent Console"
tags: [
  "LiveEngage",
  "Tutorial"
]
categories: [
  "LiveEngage",
  "Tutorial"
]
---

The purpose of this tutorial is to show you how to use the Web Application SDK to send chat lines from your own web application.<br />
<br />
The Web Application SDK is a client-side package that can be used to communicate with the LivePerson Agent Workspace. In order to use the SDK, your web application needs to be able to open inside an iFrame, and your application must be hosted over SSL. You can read more about the SDK here:&nbsp;<a href="https://ce-sr.s3.amazonaws.com/CA/Admin/Iframe%20SDK/WebApp%20Integration%20SDK%20Guide.pdf" target="_blank"><span style="color: blue;">Web App SDK PDF</span></a><br />
<br />
For this tutorial, we are going to use create a simple web page that will send a "Hello World!" chat line to the agent console.<br />
<br />
<div>
Let's get started:<br />
<br />
1. The first thing we will want to do is create a basic HTML template for our web application. Create an index.html file in your favorite editor and add the following code:<br />
<br />
<script src="https://gist.github.com/scottwestover/14723ec17af00fb7e37e.js"></script>

2. The next thing we need to do is reference the SDK code in your web application. To do this, you need to add the following code to the head element of your HTML page:<br />
<br />
<script src="https://gist.github.com/scottwestover/4f034f9b754d14711630.js"></script>
3. Next, you need to add the following JavaScript right before your closing body element of your HTML page:<br />
<br />
<script src="https://gist.github.com/scottwestover/9c1143fd4ccb4d6baf2b.js"></script>

For the code we just added, we declared a variable that is set to the SDK, and then we initialized it, which allows to communicate with the agent console. By doing this, we are able to send data to the chat input line of the agent console, and we are able to pull information about the chat from the agent console.<br />
<br />
Lastly we defined a variable that contains the data we want to send to the chat input line, and then we sent the data.<br />
<br />
4. Your final index.html page should look like this:<br />
<br /></div>
<script src="https://gist.github.com/scottwestover/5ddf74040947ebb01fb5.js"></script>

<br />
<div>
5. Now that we have our web application ready to go, you just need to host it on a secure site. Once this is done, we need to add the widget inside LiveEngage. You can read more about that here:&nbsp;<a href="https://ce-sr.s3.amazonaws.com/CA/Admin/53_Webagent%20integration.pdf" target="_blank"><span style="color: blue;">Add Widget To LiveEngage</span></a><br />
<br />
Summary: This tutorial showed you how to use the Web Application SDK to send a chat line to the agent console. and how to add the your web application as a widget inside the agent console.</div>
<div>
<br /></div>
<div>
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.</div>

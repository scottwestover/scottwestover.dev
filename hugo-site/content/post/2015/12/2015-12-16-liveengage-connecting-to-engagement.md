---
title: "LiveEngage - Connecting To The Engagement History API In Java Tutorial"
date: 2015-12-16 00:00:00
desc: "LiveEngage - Connecting To The Engagement History API In Java Tutorial"
tags: [
  "LiveEngage",
  "Tutorial"
]
categories: [
  "LiveEngage",
  "Tutorial"
]
---

The purpose of this tutorial is to show you how to connect to the Engagement History API in Java.<br />
<br />
The Engagement History API is a REST API that is offered through LivePerson that allows you to pull your chat transcripts without having to manually go through and export them. In order to connect to the API, you will need to get a set of API keys from LivePerson and install them on your account. Once you have done this, you will need to send an OAuth 1 request to the server in order to access your transcripts.<br />
<br />
If you are not familiar with OAuth 1, you can read more about it here:&nbsp;<a href="http://oauth.net/core/1.0/"><span style="color: blue;">http://oauth.net/core/1.0/</span></a><br />
<div>
<br /></div>
For this tutorial, I am using Eclipse Mars 4.5.0, Scribe 1.3.7, and Maven. However, you should be able to follow along if you are using a different IDE.<br />
<div>
<br /></div>
<div>
In Eclipse, you will need to create a new Maven Project. Once you have done this, open the pom.xml file for your project, and add the following dependency: <br />
<br />
<div style="text-align: center;">
&lt;dependency&gt;</div>
<div style="text-align: center;">
&lt;groupId&gt;org.scribe&lt;/groupId&gt;</div>
<div style="text-align: center;">
&lt;artifactId&gt;scribe&lt;/artifactId&gt;</div>
<div style="text-align: center;">
&lt;version&gt;1.3.7&lt;/version&gt;</div>
<div style="text-align: center;">
&lt;/dependency&gt;</div>
<div>
<br /></div>
In order to use Scribe to make an OAuth call, we will need to define a new provider class that will be used by the OAuthService object. If you are not familar with Scribe, you can read more about it here:&nbsp;<a href="https://github.com/scribejava/scribejava"><span style="color: blue;">https://github.com/scribejava/scribejava</span></a><br />
<br /></div>
<div>
Now, in your src/main/java folder, you will want to create a new class called EHAPI.java. This class is going to extend the DefaultApi10a class. Once the class is created, you will need to add the following code to it:<br />
<br />
<script src="https://gist.github.com/scottwestover/ba8d2cf6b389d509f56a.js"></script>
</div>
<div>
Now that we have our provider, we will need to create a new class that is going to call the API and display the results to the console.<br />
<br />
So, in your src/main/java folder, you will need to create a new class called EngagementHistory.java. Once the class is created, you will need to add the following code to it:<br />
<br />
<script src="https://gist.github.com/scottwestover/1220efb9e82d25def624.js"></script>

Basically, we are using Scribe to create our OAuth service, and once we do this we our using our credentials for the API to create and sign our OAuth request. Once this is done, we send the request and print it to the console. Please see the comments in the code for what each line is doing.<br />
<br />
You can download the complete code on GitHub from here:&nbsp;<a href="https://github.com/scottwestover/LPEngagementHistoryAPIExamples"><span style="color: blue;">https://github.com/scottwestover/LPEngagementHistoryAPIExamples</span></a><br />
<div>
<br />
Summary: This tutorial showed you how to connect to the Engagement History API in Java by using Scribe. You can build upon this tutorial by adding the option to allow the user to input a date range, convert the response into a transcript file that is in a readable format, or even send the responses to a database.</div>
<div>
<br />
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.</div>
</div>

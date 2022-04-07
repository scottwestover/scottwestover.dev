---
title: "LiveEngage - Use URL To Pre-fill Your Account ID On The Login Page"
date: 2015-11-04 00:00:00
desc: "LiveEngage - Use URL To Pre-fill Your Account ID On The Login Page"
tags: [
  "LiveEngage",
  "Tutorial"
]
categories: [
  "LiveEngage",
  "Tutorial"
]
---

On the LiveEngage login page, there is a 'remember me' check box that you can check to have your information stored in a cookie, however this is not always a valid option for everyone. For example, if your computer automatically clears your cookies and cache every night, or if you have cookies disabled, then the 'remember me' check box will not remember your information, which then requires you to enter your account number, username, and password every time you want to login.<br />
<br />
You can get around this by adding some additional parameters to the URL, which will then automatically fill out the fields on form when you request the login page.<br />
<br />
Here is an example:<br />
<br />
https://authentication.liveperson.net/login.html?<span style="background-color: yellow;">stId=123456</span><br />
<br />
By adding the stId variable as a parameter on this URL, and by assigned it a value, it will populate the account number field on the login page. You just need to replace the 123456 with your Account ID for this to work.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-kvIVAS5J5D0/VjpR5TV1dPI/AAAAAAAAAbw/mFscb208l50/s1600/2015-11-04_1343.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-kvIVAS5J5D0/VjpR5TV1dPI/AAAAAAAAAbw/mFscb208l50/s1600/2015-11-04_1343.png" /></a></div>
<br />
<div>
I hope you enjoyed this post. If you have any questions or comments, please feel free to post them below.</div>

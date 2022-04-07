---
title: "AEM Component To Send An Email Tutorial"
date: 2015-03-06 00:00:00
desc: "AEM Component To Send An Email Tutorial"
tags: [
  "AEM",
  "Tutorial"
]
categories: [
  "AEM",
  "Tutorial"
]
---

The purpose of this tutorial is create a component for AEM that will send an email and then display a confirmation message. This is accomplished by using the ACS AEM Commons Email API. The ACS AEM Commons package adds a lot of features to the out of the box AEM implementation. For the purpose of this tutorial we will be creating the component in crxde lite. This tutorial does not go into full detail, but does provide all of the code that was used in the creation of this component for learning purposes.<br />
<br />
This tutorial uses the following website:&nbsp;<a href="http://adobe-consulting-services.github.io/acs-aem-commons/features/email-api.html" target="_blank"><span style="color: blue;">ACS AEM Commons</span></a><br />
<br />
Lets get started -<br />
<br />
1. The first thing you need to do is download and install ACS AEM Commons package into your instance of AEM. There are a few ways to do this. For this project we will be installing it as a package using the package manager in crxde lite. You can download the package from github here:<span style="color: blue;">&nbsp;<a href="https://github.com/Adobe-Consulting-Services/acs-aem-commons" target="_blank">ACS Commons Github</a></span><br />
<br />
2. The second thing you need to do is have an email account that you want to use with this service. For the purpose of this tutorial, we will be using a Gmail account. If you do not already have one, you can set one up quickly here:&nbsp;<a href="https://mail.google.com/" target="_blank"><span style="color: blue;">Gmail</span></a><br />
<br />
For the Gmail account you might have to update your settings to allow AEM to send emails with this account. Go to the following site:&nbsp;<a href="https://www.google.com/settings/security/lesssecureapps" target="_blank"><span style="color: blue;">https://www.google.com/settings/security/lesssecureapps</span></a>. Once you do this, turn on access for less secure apps. If this is turned off, there is a possibility that the emails will not send, and you will receive an email that Gmail blocked access to your account.<br />
<br />
3. After you upload and install the package you will be able to use the ACS AEM Commons features. In order to send emails through AEM you need to configure the Day CQ Mail Service component. There are a few ways to do this. For this project we will be configuring the OSGI through crxde lite.<br />
<br />
4. Go to your project folder under apps and create a "config" folder if you do not have one. Inside this folder is where we will put your OSGI configuration.<br />
<br />
5. Right click on your config folder and create a node. An example is posted below:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-IRrKwdctgBQ/VPn6-2bkPAI/AAAAAAAAAC4/NprMqifekJM/s1600/Untitled.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="195" src="https://4.bp.blogspot.com/-IRrKwdctgBQ/VPn6-2bkPAI/AAAAAAAAAC4/NprMqifekJM/s1600/Untitled.png" width="320" /></a></div>
<br />
6. Add the following properties to the node you just created:<br />
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
</div>
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-YxkFznFmcfM/VPn8oLNCioI/AAAAAAAAADM/JnJd_l7PirU/s1600/Untitled2.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-YxkFznFmcfM/VPn8oLNCioI/AAAAAAAAADM/JnJd_l7PirU/s1600/Untitled2.png" /></a></div>
<br />
7. You will want to replace the "youremail@gmail.com" with your Gmail email address, and "smtp.password" with your password to your Gmail account.<br />
<br />
8. The next step is to create an email template that will be sent with your email service. Email templates are kept under "etc/notification/email". Navigate here and create a new file called "en.html". This file can be a text file or an html file. The main difference is that you can use html code in the template if you choose to make it an html file.<br />
<br />
9. Inside the file you just created put in the following code:<br />
<br />
<script src="https://gist.github.com/scottwestover/51431bcd5c46d64f22b9.js"></script>

The code that is like this "${example}", will be updated dynamically by the component that we will create in the next few steps. You can replace the code with normal text, however it will be the same in every email that gets sent out.<br />
<br />
10. Now it is time to create a component that will be able to use this email service and email template. Inside your component folder create a new component. An example is posted below:<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-Jx09nTnBQxw/VPoNjcBW4VI/AAAAAAAAADs/0-dRxzvO7-8/s1600/5.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="275" src="https://2.bp.blogspot.com/-Jx09nTnBQxw/VPoNjcBW4VI/AAAAAAAAADs/0-dRxzvO7-8/s1600/5.png" width="320" /></a></div>
<div class="separator" style="clear: both; text-align: center;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
11. On the component you just created add a dialog to it so it will show up in the sidekick.</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
12. Open the jsp file that was created for your component and put in the following code:</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<script src="https://gist.github.com/scottwestover/7a14c8712bab64fee375.js"></script>

<br />
<div class="separator" style="clear: both; text-align: left;">
13. In the jsp file you will want to update the recipient address with your email address so you can test out the email service.</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
14. Now you just need a template to add this component to. If you already have a page that you can add components to, you can skip these next few steps and go to step 19.&nbsp;</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
15. In your project folder go to your "components" folder, right click on it and choose "Create Component". An example is posted below:</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-llJTWS3GJow/VQMX7OTdVsI/AAAAAAAAAFs/s8YQHchzyiQ/s1600/Untitled.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="273" src="https://3.bp.blogspot.com/-llJTWS3GJow/VQMX7OTdVsI/AAAAAAAAAFs/s8YQHchzyiQ/s1600/Untitled.png" width="320" /></a></div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
You can keep clicking next until you have the option to create the component.</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
16. Open up the "empty.jsp" file that was created and replace all the code inside with the following code:</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<script src="https://gist.github.com/scottwestover/5012f073d3ef6b06f233.js"></script>

<br />
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
17. In your project folder, create a "templates" folder if one does not already exist. Right click on this folder and choose "Create Template". An example is posted below:</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-r_vZ8o4yf2w/VQMbOCy8YKI/AAAAAAAAAGE/33tY-YG3ksU/s1600/Untitled2.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="274" src="https://2.bp.blogspot.com/-r_vZ8o4yf2w/VQMbOCy8YKI/AAAAAAAAAGE/33tY-YG3ksU/s1600/Untitled2.png" width="320" /></a></div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: left;">
You will want to update the "Resource Type:" field with the path to the "empty" component you just created. Click next and in the "Allowed Paths" option, add "/content(/.*)?". Then keep clicking next until you have an option to create a template.&nbsp;</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
18. Next go to the websites console and choose the option to create a page. Make sure to choose the "Empty Template" from the template options.</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
19. Now, open the web page and add the email component to the page. You can do this by switching over to the Classic UI, and then selecting design mode from the sidekick. Next, click on edit the design of your paragraph system, and check the box next to the "Simple Email Component". Then switch back to edit mode, and add the component to your page.</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
If everything works correctly you should see a message on your page that the email was sent successfully. &nbsp;Every time this page is visited, or refreshed, the code will be called and will send out a new email.</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
Now this is a very simple component that you can build upon. One example of building upon this component is that you could add in a html form where a user would put in their their name and email address, and then take that information and send that user an email.</div>
<div class="separator" style="clear: both; text-align: left;">
<br /></div>
<div class="separator" style="clear: both; text-align: left;">
I hope you enjoyed this tutorial. If you have any questions or comments please feel free to post them below.</div>
<br />
Note: On the ACS AEM Commons website there is a tutorial on how to use their email API, however it did not work right out the box for me. That is why I created this tutorial on how I was able to get this feature to work.<br />
<br />
You can download a package of the component on GitHub from here:<br />
<br />
<a href="https://github.com/scottwestover/AEM-Email-Example" target="_blank"><span style="color: blue;">AEM-Email-Example</span></a>.<br />
<br />
You will have to update the OSGI settings and the email template with you email information.
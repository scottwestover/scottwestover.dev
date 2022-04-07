---
title: "AEM Brackets Extension Tutorial"
date: 2015-03-14 00:00:00
desc: "AEM Brackets Extension Tutorial"
tags: [
  "AEM",
  "Brackets",
  "Tutorial"
]
categories: [
  "AEM",
  "Brackets",
  "Tutorial"
]
---

The purpose of this tutorial is to install the AEM Sightly Brackets Extension and see how easy it is to transfer content back and forth between Brackets and your local instance of AEM.<br />
<br />
For this tutorial I was using: AEM 6.0, AEM Brackets Extension 0.0.12, and Brackets 1.1. You should be able to follow along with other versions of this software.<br />
<br />
In order to follow along you will need the following:<br />
<br />
<ul>
<li>The Brackets text editor. If you do not already have this installed, you can get a copy from here:&nbsp;<a href="http://brackets.io/" target="_blank"><span style="color: blue;">http://brackets.io/</span></a>. Just follow the download and install instructions from the website to get started.</li>
<li>You will need to download the following package from GitHub to install into your local instance of AEM: <a href="https://github.com/scottwestover/3D-Model-Component-AEM" target="_blank"><span style="color: blue;">3D-Model-Component-AEM</span></a>. You are welcome to create your own package to follow along with the tutorial, but that will not be covered here.</li>
</ul>
<div>
If you have completed the following steps, we can get started.</div>
<div>
<br /></div>
<div>
1. The first thing you need to do is open up Brackets. Then you need to go to "File" and then choose "Extension Manager". Then in the search bar, type in "sightly". This should bring up the AEM Brackets Extension.&nbsp;</div>
<div>
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-kgcduz7gimI/VQL6qw8fZyI/AAAAAAAAAE4/9o8y03qJY1w/s1600/Untitled.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="267" src="https://2.bp.blogspot.com/-kgcduz7gimI/VQL6qw8fZyI/AAAAAAAAAE4/9o8y03qJY1w/s1600/Untitled.png" width="400" /></a></div>
<div>
<br /></div>
<div>
2. Click on "Install", and restart your instance of Brackets when it prompts you.</div>
<div>
<br /></div>
<div>
3. You will need to unzip the "3D-Model-Component-AEM" file that you downloaded from GitHub. Once you do this, navigate to the "3dmodelcomponent-1.0" zipped folder, and unzip this file as well. You will want to keep the zipped version, and the unzip version for use in this tutorial.</div>
<div>
<br /></div>
<div>
4. In your instance of AEM, go to crxde lite, and go to the package manager. Once you are here, click on "upload package". Now browse to the location of the "3dmodelcomponent-1.0" zipped folder on your local file system. Then just click on "install" to install the package in your AEM instance.</div>
<div>
<br /></div>
<div>
5. Now switch back to Brackets, and click on the new "AEM" menu item at the top and choose "Project Settings". You will want to fill in the pop up window with the settings for your local instance of AEM. An example is posted below:</div>
<div>
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-66Ag9PognIM/VQL-ITRj-cI/AAAAAAAAAFE/g7W_mHf-PYI/s1600/Untitled2.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="210" src="https://1.bp.blogspot.com/-66Ag9PognIM/VQL-ITRj-cI/AAAAAAAAAFE/g7W_mHf-PYI/s1600/Untitled2.png" width="400" /></a></div>
<div>
<br /></div>
<div>
6. You will then need to open the "3dmodelcomponent-1.0" folder in Brackets. Go up to "File" and choose "Open Folder". Then browse your local file system for this folder, not the zipped folder. You should see a similar project structure like this:</div>
<div>
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-G9CpCR8lZN0/VQMAbZwz1SI/AAAAAAAAAFQ/SVlqIVYTqEU/s1600/Untitled3.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://2.bp.blogspot.com/-G9CpCR8lZN0/VQMAbZwz1SI/AAAAAAAAAFQ/SVlqIVYTqEU/s1600/Untitled3.png" /></a></div>
<div>
<br /></div>
<div>
7. Next, navigate to "3dmodel" folder, by going clicking on "jcr_root/apps/test/components/3dmodel". Once you are here, right click on the folder and click "New File". Type in the name "text.txt". Then just type in some text, such as "hello all".</div>
<div>
<br /></div>
<div>
8. Now just save the file. Now you should see the AEM Brackets Extension Icon flash blue to show it is syncing with your AEM instance, and then turn green to show that everything is synced up.&nbsp;</div>
<div>
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-f3EIj9elTj0/VQMCOFPVrWI/AAAAAAAAAFc/tjp8btpnwzY/s1600/Untitled31.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="https://1.bp.blogspot.com/-f3EIj9elTj0/VQMCOFPVrWI/AAAAAAAAAFc/tjp8btpnwzY/s1600/Untitled31.png" /></a></div>
<div>
<br /></div>
<div>
9. To make sure that it worked, switch back to your local instance of AEM, and go to crxde lite. If you navigate to "apps/test/components/3dmodel" you should see the new "test.txt" file, and if you open up the file it should show your text. If you already had crxde lite open, you will need to refresh your folder structure, or the web page.</div>
<div>
<br /></div>
<div>
10. While in crxde lite, add some text to the "text.txt" file, such as "hello". Now, save the file and switch back to Brackets.&nbsp;</div>
<div>
<br /></div>
<div>
11. Click on the "AEM" menu item, and choose "Import Content Package", in order to have it update your files. If you still have the "text.txt" file open, close it, and reopen it. You should see the new text in the file.&nbsp;</div>
<div>
<br /></div>
<div>
Summary: This tutorial showed us how to install the AEM Brackets Extension into Brackets, set up the setting to connect to your instance of AEM, and how to sync content between AEM and Brackets.</div>
<div>
<br /></div>
<div>
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.</div>

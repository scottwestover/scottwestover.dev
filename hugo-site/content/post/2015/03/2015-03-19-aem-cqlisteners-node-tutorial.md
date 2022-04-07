---
title: "AEM CQ:Listeners Node Tutorial"
date: 2015-03-19 00:00:00
desc: "AEM CQ:Listeners Node Tutorial"
tags: [
  "AEM",
  "Tutorial"
]
categories: [
  "AEM",
  "Tutorial"
]
---

The purpose of this tutorial is to show you how to add the "cq:listeners" node to a component so when the component is modified the page will automatically refresh. You can read more about "cq:listeners" from a previous post I made here:&nbsp;<a href="http://scottwestover.blogspot.com/2015/03/aem-cqlisteners-node-for-components.html" target="_blank"><span style="color: blue;">cq:listeners node</span></a><br />
<br />
For this tutorial we will be using crxde lite. This tutorial does not go into full detail, but does provide all the code that was used in the creation of this component for learning purposes.<br />
<br />
For this tutorial I was using: AEM 6.0. You should be able to follow along with other versions of this software.<br />
<br />
In order to follow along with this tutorial, you will need to have complete the following tutorial:<br />
<br />
<a href="http://scottwestover.blogspot.com/2015/03/aem-sharethis-component-tutorial.html" target="_blank"><span style="color: blue;">ShareThis Component Tutorial</span></a><br />
<br />
If you have not completed the tutorial listed above, you can download a package from GitHub that has the completed component from here:&nbsp;<a href="https://github.com/scottwestover/ShareThis-AEM-Component" target="_blank"><span style="color: blue;">ShareThis-AEM-Component</span></a>. Just follow the instructions in the "readme" file to install the package into your instance of AEM.<br />
<br />
If you have completed the previous steps, we can get started.<br />
<br />
1. Once your instance of AEM is up and running, navigate to crxde lite. Navigate to the "shareThis" component in your projects "components" folder.<br />
<br />
2. Right click on the component and choose "Create Node". Enter the following information:<br />
<ul>
<li>Name: cq:editConfig</li>
<li>Type: cq:EditConfig</li>
</ul>
<div>
<br />
3. On the node you just created, right click and choose "Create Node". Enter the following information:</div>
<div>
<ul>
<li>Name: cq:listeners</li>
<li>Type: cq:EditListenersConfig</li>
</ul>
<div>
<br />
4. On the "cq:listeners" node that you just created, add the following property:</div>
</div>
<div>
<ul>
<li>Name: afteredit</li>
<li>Type: String</li>
<li>Value: REFRESH_PAGE</li>
</ul>
<div>
<br />
5. Now, open the web page the has the "ShareThis Component" on it. If you click on the component to open the dialog box, and click the "OK" button, you will see that the page will automatically refresh.<br />
<br />
Summary: This tutorial showed you how to add the "cq:listeners" node to a component and how to use the "afteredit" property to refresh the page when the component is modified.</div>
</div>
<br />
I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.<br />
<br />
You can download a package of the component on GitHub from here:&nbsp;<a href="https://github.com/scottwestover/ShareThis-AEM-Component/tree/EventListener" target="_blank"><span style="color: blue;">ShareThis Component 1.1</span></a>
---
title: "AEM CQ:Listeners Node For A Component"
date: 2015-03-16 00:00:00
desc: "AEM CQ:Listeners Node For A Component"
tags: [
  "AEM"
]
categories: [
  "AEM"
]
---

There are many times when an author is modifying a component on a page, and they will have to manually refresh the page in order to see the changes that were made to it. Now, this does not take up a lot of time, but if it happens often it can add up significantly.<br />
<br />
There is a way to have the page automatically refresh when a change is made to the component. This can be accomplished by using the "cq:listeners" node that is the following type: "cq:EditListenersConfig". This node type is used when you want the page to refresh whenever a certain action is done to the component.<br />
<br />
Some of the properties that the node can have are:<br />
<ul>
<li>beforeedit</li>
<li>beforecopy</li>
<li>afteredit</li>
<li>aftermove</li>
<li>afterdelete</li>
</ul>
<div>
<br />
You can find more properties that the node can have here:&nbsp;<a href="http://docs.adobe.com/docs/en/cq/5-6-1/developing/components.html#cq:listeners" target="_blank"><span style="color: blue;">cq:listeners</span></a></div>
<div>
<br /></div>
<div>
In order to use this node you need to create a "cq:editConfig" node under your component, and then add the "cq:EditListenersConfig" node as a child of the "cq:editConfig" node.</div>
<div>
<br /></div>
<div>
You can find an example here:&nbsp;<a href="https://helpx.adobe.com/experience-manager/kb/RefreshPageWhenModifyDialog.html" target="_blank"><span style="color: blue;">Refresh Page When Component Is Modified</span></a></div>
<div>
<br /></div>
<div>
<br /></div>

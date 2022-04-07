---
title: "How To Connect To The Engagement History API Through Postman"
date: 2016-10-29 00:00:00
desc: "How To Connect To The Engagement History API Through Postman"
tags: [
  "Tutorial",
  "LiveEngage"
]
categories: [
  "Tutorial",
  "LiveEngage"
]
---

I have gotten a lot of request from people on how to connect to the APIs that are available from LivePerson using Postman, so I decided to share how to do this here.<br />
<br />
In order to follow along with this tutorial, you will need the API keys that are available for Engagement History API, and you will need access to the Postman App. To get these keys, you can log into the LiveEngage console, and grab them from them from the API tab under data sources, which is on the campaigns tab. If you are not sure on how to setup your keys, you can learn how to do so&nbsp;<a href="https://s3-eu-west-1.amazonaws.com/ce-sr/CA/API+Guides/Getting+Started+with+LiveEngage+APIs.pdf" target="_blank"><span style="color: blue;">here</span></a>.<br />
<br />
If you do not already have Postman installed, you can learn more about it and install it from here:&nbsp;<a href="https://www.getpostman.com/" target="_blank"><span style="color: blue;">https://www.getpostman.com/</span></a><br />
<br />
If you would just like to import a template of the query into Postman, you can do so here:&nbsp;<a href="https://www.getpostman.com/collections/6bd9d4cc64bbee6843f1" target="_blank"><span style="color: blue;">https://www.getpostman.com/collections/6bd9d4cc64bbee6843f1</span></a><br />
<br />
Let's get started.<br />
<br />
1) The first thing you need to do is find out what the base URI is for your account. This will be needed to make any API calls. In Postman, make a new GET request with the following URL:&nbsp;https://api.liveperson.net/api/account/<span style="color: red;">{Your Account Number}</span>/service/engHistDomain/baseURI.json?version=1.0<br />
<br />
You will need to update the '<span style="color: red;">{Your Account Number}</span>' with just your account number. For example, your updated link should look similar to this:&nbsp;https://api.liveperson.net/api/account/56072331/service/engHistDomain/baseURI.json?version=1.0<br />
<br />
2) Now, click on the Send button and you should get a 200 response with your base URI.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://2.bp.blogspot.com/-V_t46wZTiXk/WBNAag1-gVI/AAAAAAAABfY/4bnXpi5NTjwi9J_pGG0RIz14N_VGRVI0QCLcB/s1600/2016-10-28_0810.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="215" src="https://2.bp.blogspot.com/-V_t46wZTiXk/WBNAag1-gVI/AAAAAAAABfY/4bnXpi5NTjwi9J_pGG0RIz14N_VGRVI0QCLcB/s400/2016-10-28_0810.png" width="400" /></a>
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://3.bp.blogspot.com/-F2Qxx9Q31Vk/WBNG0quXT3I/AAAAAAAABgU/tkIj8LdCwTIBgnW7Sp_WfNbD8BAYhI1JACLcB/s1600/2016-10-28_0838.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="96" src="https://3.bp.blogspot.com/-F2Qxx9Q31Vk/WBNG0quXT3I/AAAAAAAABgU/tkIj8LdCwTIBgnW7Sp_WfNbD8BAYhI1JACLcB/s320/2016-10-28_0838.png" width="320" /></a>
</div>
<div class="separator" style="clear: both; text-align: center;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  3) In a new tab in Postman, update the request to be a POST request, and add the following URL to the request:&nbsp;https://<span style="color: red;">{YOUR BASE URI}</span>/interaction_history/api/account/<span style="color: red;">{YOUR ACCOUNT NUMBER}</span>/interactions/search?offset=0&amp;limit=10
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  You will need to update the '<span style="color: red;">{YOUR BASE URI}</span>' and the '<span style="color: red;">YOUR ACCOUNT NUMBER}</span>' parts of the URL with your LiveEngage account number, and with the base URI that you received in the steps before. For example, your updated link should look similar to this:&nbsp;https://va-a.enghist.liveperson.net/interaction_history/api/account/56072331/interactions/search?offset=0&amp;limit=10
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://2.bp.blogspot.com/-01fcuwKlg7E/WBNGfRAUuuI/AAAAAAAABgQ/XXiSTCYvB1MnOvHfNWjTpOwN76LWSAcdQCLcB/s1600/2016-10-28_0836.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="75" src="https://2.bp.blogspot.com/-01fcuwKlg7E/WBNGfRAUuuI/AAAAAAAABgQ/XXiSTCYvB1MnOvHfNWjTpOwN76LWSAcdQCLcB/s640/2016-10-28_0836.png" width="640" /></a>
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  4) For the API call to be successful, you will need to add the following to the request: a body, a content type header, and an OAuth 1 header. To add the Body, click on Body, and choose "raw" as the type. Add the following parameters to the body:&nbsp;{"start":{"from":1477052344000,"to":1477657144000}}
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://4.bp.blogspot.com/-XC-C5SidCXQ/WBNH7USRUgI/AAAAAAAABgc/C90ggHLmnV0Tx9By8RRG8i9Kv5wWdIqUwCLcB/s1600/2016-10-28_0843.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="236" src="https://4.bp.blogspot.com/-XC-C5SidCXQ/WBNH7USRUgI/AAAAAAAABgc/C90ggHLmnV0Tx9By8RRG8i9Kv5wWdIqUwCLcB/s640/2016-10-28_0843.png" width="640" /></a>
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  The data that you just added is the timeframe that you would like to query the API for. The time is entered as an epoch timestamp in milliseconds. To quickly get the date that you would like to use in an epoch timestamp format, you can use this website here: <a href="http://www.epochconverter.com/" target="_blank"><span style="color: blue;">http://www.epochconverter.com/</span></a>. Note: You may need to update the timeframe for the query to work with your account.
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  5) Next, lets add the Content-Type header to the request. Click on "Headers" tab, and in the "key" field type in:&nbsp;Content-Type, and in the "value" field type in:&nbsp;application/json.
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://4.bp.blogspot.com/-AnQGB-h37Nw/WBNNhCvOmWI/AAAAAAAABg4/LQwwbFerQF8__I8dsUnHcHxmZIQ2HYcngCLcB/s1600/2016-10-28_0906.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="115" src="https://4.bp.blogspot.com/-AnQGB-h37Nw/WBNNhCvOmWI/AAAAAAAABg4/LQwwbFerQF8__I8dsUnHcHxmZIQ2HYcngCLcB/s400/2016-10-28_0906.png" width="400" /></a>
</div>
<div class="separator" style="clear: both; text-align: left;">
  <br />
</div>
<div class="separator" style="clear: both; text-align: left;">
  6) Lastly, you just need to add your OAuth 1 header to the API call. Click on "Authorization" tab, and in the type drop down choose "OAuth 1.0". In the fields that appear, you will need to add your API keys from LiveEngage:
</div>
<div class="separator" style="clear: both; text-align: left;"></div>
<ul>
  <li>Consumer Key - Your App Key</li>
  <li>Consumer Secret - Your Secret</li>
  <li>Token - Your Access Token</li>
  <li>Token Secret - You Access Token Secret</li>
</ul>
<div>
  Also, on the right hand side, make sure the check for "Add params to header" is checked.
</div>
<div>
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://1.bp.blogspot.com/-WY3M1El60Aw/WBNPCRXsilI/AAAAAAAABhI/MbtBJyrwS6c9corSLCZDmYKhQyuDEG9MACLcB/s1600/2016-10-28_0910.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="387" src="https://1.bp.blogspot.com/-WY3M1El60Aw/WBNPCRXsilI/AAAAAAAABhI/MbtBJyrwS6c9corSLCZDmYKhQyuDEG9MACLcB/s640/2016-10-28_0910.png" width="640" /></a>
</div>
<div>
  <br />
</div>
<div>
  Once you fill in your keys, click on the "Update Request" button to update your request.
</div>
<div>
  <br />
</div>
<div>
  Now, click on the "Send" button, and you should get a 200 response back with your chat transcripts.
</div>
<div>
  <br />
</div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://1.bp.blogspot.com/-Y2mTiTHayqY/WBNVd6w5wVI/AAAAAAAABh8/fLeSN2afaaUvL04dkQWhHNct0ZaUNUIlgCLcB/s1600/2016-10-28_0923.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="276" src="https://1.bp.blogspot.com/-Y2mTiTHayqY/WBNVd6w5wVI/AAAAAAAABh8/fLeSN2afaaUvL04dkQWhHNct0ZaUNUIlgCLcB/s640/2016-10-28_0923.png" width="640" /></a>
</div>
<div>
  <br />
</div>
<div>
  You can import a template for this query directly into Postman by clicking this link here:&nbsp;<a href="https://www.getpostman.com/collections/6bd9d4cc64bbee6843f1" target="_blank"><span style="color: blue;">https://www.getpostman.com/collections/6bd9d4cc64bbee6843f1</span></a>
</div>
<br />
<br />
<div>
  Summary: This tutorial showed you how to use Postman to query the Engagement History API that is available from LivePerson.
</div>
<div>
  <br />
</div>
<div>
  I hope you enjoyed this tutorial. If you have any questions or comments, please feel free to post them below.
</div>
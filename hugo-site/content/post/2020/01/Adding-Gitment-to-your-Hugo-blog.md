---
title: Adding Gitment to your Hugo blog
date: 2020-01-18 06:00:00
tags: [
  "Gitment",
  "Tutorial"
]
categories: [
  "Gitment",
  "Tutorial"
]
desc: Adding Gitment to your Hugo blog
---

In my last post, I talked a little bit about [Gitment](https://github.com/imsun/gitment) and how you could use that library for using GitHub Issues for comments on your blog. In this post, I am going to share with you how you can add Gitment to your Hugo blog. If you are not familiar with Gitment, it is a small JS library that leverages GitHub Issues for storing comments on each post.

Some key things to note about Gitment:
  - Each post will have a seperate matching GitHub Issue.
  - Users have to be logged into GitHub to post a comment. Even though this is an ask on the users for leaving a comment or question, signing up for GitHub is easy and free. I also figured the audience for my post may already have a GitHub login.
  - Each comment will be saved as a comment on the matching GitHub issue.
  - Gitment will automatically display the form for creating comments, and it will also display the relevant comments for each post.

With that out of the way, let's get started!

### Libraries

The first thing you need to do is add the required `css` and `js` files for Gitment to your site. You can either use the hosted versions of these libraries or you can build them yourself. For this tutorial, we will be using the hosted versions. You will need to add the code below `<head>` section of your site:

```
<!-- Gitment Assets -->
<link rel="stylesheet" href="https://imsun.github.io/gitment/style/default.css">
<script src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
```

If you are using a theme, you can add these files to your default layout.

### GitHub OAuth App

Once you have added the required files, you will need to add a new OAuth App to GitHub. You can do that here: [GitHub OAuth Apps](https://github.com/settings/applications/new).

You will need to do the following:
  - Fill out the form to register a new application.
  - Save the clientId and secret. You will need these in a bit.
  - For your callback URL, you will need to put in the same domain as your blog. For example, I used [https://scottwestover.github.io/](https://scottwestover.github.io/).

### Update Site For Gitment

Now that you have the required clientId and secret, we just need to add the required script and `div` tags to your site. First, you will need to add a `div` element to tell Gitment were to display your comments. If you are using a theme, there is usually a `comments.html` file that you can modify. You will need to add the following code to your site were you want the comments displayed:

```
{{ if and .Site.Params.gitmentClientSecret .Site.Params.gitmentClientId }}
<section class="comments">
	<div id="gitment-comments"></div>
</section>
<script>
	const gitment = new Gitment({
    id: document.title.replace(/[^\w\s]/gi, ""),
    owner: 'your github id',
    repo: 'your repo name',
    oauth: {
      client_id: '{{ .Site.Params.gitmentClientId }}',
      client_secret: '{{ .Site.Params.gitmentClientSecret }}'
    }
	});
	gitment.render(document.getElementById('gitment-comments'));
</script>
{{ end }}
```

Some things to note:
  - the `id` needs to be unique per post. This is how Gitment will match a GitHub Issue with your post.
  - the `script` tag needs to be executed after the `div` tag has rendered on your page.
  - you will need to have a GitHub repository that can be used for storing the issues. This can be the same repository you use for hosting your site, or a different one.

Next, you just need to add the clientId and secret to your configuration file. This file is usually called `config.toml`. You will need to add the following code to this file:

```
[Params]
  gitmentClientId = "your client id" # Needed for Gitment comments
  gitmentClientSecret = "your client secret" # Needed for Gitment comments
```

After you do this, you are ready to start using GitHub Issues for your comments. You will just need to deploy your blog and then visit one of your blog posts while being logged into GitHub. Once you do, you will need to click on the `initialize comments` link at the bottom of the page to create a GitHub Issue for that blog post. Once that is done, you can start leaving comments on that page!

I hope you enjoyed this post. Please feel free to post any questions or comments below.

# Blog Content for scottwestover.github.io

This repository is a hugo website that contains all of the site content for my personal site [https://scottwestover.github.io/](https://scottwestover.github.io/).

## Prerequisite

You will need to have [hugo](https://gohugo.io/getting-started/quick-start/) installed locally to run this site locally.

This repository also contains two submodules, so you will need to either clone this repository with the following command:

```bash
git clone --recursive https://github.com/scottwestover/blog.git
```

Or, if you have already cloned the repo you will need to run the following command:

```bash
git submodule update --init --recursive
```

## Running Locally

To run the site locally, run the following command from the `hugo-site` subfolder:

```bash
hugo server -D
```

This will start the hugo server locally, and you can view the site on <http://localhost:1313/>.

## Deploying

Coming soon...

# scottwestover.dev

[![Publish Site](https://github.com/scottwestover/scottwestover.dev/actions/workflows/deploy.yaml/badge.svg)](https://github.com/scottwestover/scottwestover.dev/actions/workflows/deploy.yaml)

This repository is a hugo website that contains all of the site content for my personal site [https://scottwestover.dev/](https://scottwestover.dev/).

## Prerequisite

You will need to have [hugo](https://gohugo.io/getting-started/quick-start/) installed locally to run this site locally.

This repository also contains two submodules, so you will need to either clone this repository with the following command:

```Bash
git clone --recursive https://github.com/scottwestover/scottwestover.dev.git
```

Or, if you have already cloned the repo you will need to run the following command:

```Bash
git submodule update --init --recursive
```

## Running Locally

To run the site locally, run the following command from the `hugo-site` folder:

```Bash
hugo server -D
```

This will start the hugo server locally, and you can view the site on http://localhost:1313/.

## Deploying

This repository makes use of GitHub Actions to deploy the site to GitHub Pages any time there is a new commit to the main branch.

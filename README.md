# Gold Lines Ask

This repo houses the (currently WIP) professional website for [Gold Lines Ask: Salary Negotiation for Software Engineers](https://goldlinesask.github.io/goldlinesask/).

## Installation

- git clone the repo
- make sure you're on the right node version `nvm use` (get nvm if you don't have it)
- ensure you have gatsby installed on your machine `npm i -g gatsby`
- `npm install`
- run `gatsby develop` in the terminal to start the dev site
- navigate to [localhost:8000](http://localhost:8000/)

## Template Design

Is based off [Stellar site starter](https://github.com/codebushi/gatsby-starter-stellar) designed by HTML5 UP.

## Deployment

```bash
  git checkout master 
  git pull          # pull the latest changes from master 
  npm run deploy    # deploy - all contents of the public folder will be moved to your repository’s gh-pages branch
```
From: https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/#deploying-to-a-path-on-github-pages

**DO NOT DOs**
* touch gh-pages branch 

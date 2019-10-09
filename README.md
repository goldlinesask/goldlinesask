# Gold Lines Ask

This repo houses the (currently WIP) professional website for <a href="https://goldlinesask.github.io/goldlinesask/" target="_blank">Gold Lines Ask: Salary Negotiation for Software Engineers</a>.

## Installation

- git clone the repo
- ensure you have gatsby installed on your machine
- `npm install`
- run `gatsby develop` in the terminal to start the dev site

## Template Design

Is based off [Stellar site starter](https://github.com/codebushi/gatsby-starter-stellar) designed by HTML5 UP.

## Deployment

```bash
  git checkout master // make sure you are on master branch
  git pull // make sure you have the latest changes
  git log // ditto ^, with the gh-pages branch behind
  git checkout gh-pages // checkout the deployment branch
  git rebase master // bring gh-pages up to date with master
  git log // all should be together now
  git push origin gh-pages -f // force push the updates to gh-pages branch
  npm run deploy // run deploy script to update publish website
```

**DO NOT DOs**
* do not run deploy script while on master branch
* do not commit anything directly to gh-pages branch, instead pull changes from master as described above

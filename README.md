# Danny-T.co.uk 2016 theme
_Another day another website repo..._

Latest attempt to get my site modernised.

## Dev diary

A log of what I'm messing about with. Experience tells me to be thorough because there's every chance I'll spend the next 12 months using nothing but email and Word and forget even the basics so...

### Install Node
Was already running [NodeJS](https://nodejs.org/en/) v5.0.0 at the time so sticking with that for now.
Added package.json (played about with `npm init` to create this, pretty handy)

### Install Grunt
Will be using grunt for build automation.

First install grunt cli globally:
```
npm install grunt-cli -g
```
Then install grunt locally
```
cd path\to\project
npm install grunt --save-dev
```
_Use `--save-dev` to indicate dependencices only for development as I'll be bundling the minified/concatenated stuff into the repo anyway._


# Danny-T.co.uk 2016 theme
> Another day another website repo...

Latest attempt to get my personal site modernised.

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

> Side note: Using Visual Studio Code is working well so far and `Ctrl + Shift + V` is an awesome shortcut for previewing markdown.

### Sass
Sass is a preprocessor that adds a load of cool stuff to CSS. It does however depend on Ruby so download from [rubyinstaller.org](http://rubyinstaller.org), I went with 2.1.7 at time of writing (which we can check by running `ruby -v`)

With Ruby installed we can install Sass using 
```
gem install sass
```
Running `sass -v` tells me I'm running `Sass 3.4.20 (Selective Steve)`
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

### IISExpress
The easiest(ish) way to host the site locally on Windows is to use IISExpress (already installed with Visual Studio but [available here](https://www.microsoft.com/en-us/download/details.aspx?id=48264) if not.
> TIP: Add iisexpress to PATH variable (in an admin privileged command line: `SET PATH=%PATH%;%PROGRAMFILES%\IIS Express\`) 
Add the following site config to your applicationhost.config file (Start > Run > `%UserProfile%\Documents\IISExpress\config` > OK)

```
<site name="danny-t.co.uk" id="1" serverAutoStart="true">
		<application path="/">
			<virtualDirectory path="/" physicalPath="%userprofile%\Projects\danny-t.co.uk" />
		</application>
		<bindings>
			<binding protocol="http" bindingInformation=":8080:localhost" />
		</bindings>
	</site>
	<siteDefaults>
		<logFile logFormat="W3C" directory="%IIS_USER_HOME%\Logs" />
		<traceFailedRequestsLogging directory="%IIS_USER_HOME%\TraceLogFiles" enabled="true" maxLogFileSizeKB="1024" />
	</siteDefaults>
	<applicationDefaults applicationPool="Clr4IntegratedAppPool" />
	<virtualDirectoryDefaults allowSubDirConfig="true" />
</sites>
```
The just run `iisexpress /site:danny-t.co.uk` to start the site at [http://localhost:8080/](http://localhost:8080/)


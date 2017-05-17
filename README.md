# Webpack + Vue 

A rapid prototyping boilerplate with support for Cordova.

#### Install

```js
yarn init && yarn
```

#### Develop

```js
yarn start

// Preview at localhost:3000
```

#### Build

```js
yarn build

// yarn buildfast - for no compression
```

#### Bump

```js
yarn bump // Bump version number e.g. 0.0.1 > 0.0.2
```

<br/><br/>
## Make an iOS App

Make sure Cordova is installed gloablly

```
yarn global add cordova@latest
```

then...

```js
yarn cordova

/*
Installs console, splash and status plugins. 
Generates icons and splash screens.
Once complete, open the XCode project in `platforms/ios` and hit RUN.
*/
```

#### Build for Cordova

```js
yarn buildCordova
```

#### Icons & Splash

Edit sketch files in `source/design/` and export to `source/img/`

`yarn icon` to generate the icons for your project

`yarn splash` to generate the splash screens for your project

Favicons for desktop and webapps are generated automatically.


<br/><br/>

## Tips

[Read some tips](docs/TIPS.markdown)

There is an [examples](source/examples) folder, check it out.<br/>
Or view a demo here https://normally.github.io/webpack-vue/ 


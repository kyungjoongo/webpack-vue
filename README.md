# Webpack + Vue 

A rapid prototyping boilerplate with support for Cordova.

#### Installation

```js
yarn init && yarn
```

#### Development

```js
yarn start

// Now open http://localhost:3000
```

#### Build

```js
yarn build

// yarn buildfast - for no compression
```

#### Bump version number

```js
yarn bump // 0.0.1 > 0.0.2
```

<br/><br/>
## Packaging as an iOS Cordova App

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

#### Icons & splash screen

Edit sketch files in `source/design/` and export to `source/img/`

`yarn icon` to generate the icons for your project

`yarn splash` to generate the splash screens for your project

Favicons for desktop and webapps are generated automatically.


<br/><br/>

## Tips

[Read some tips](docs/TIPS.markdown)


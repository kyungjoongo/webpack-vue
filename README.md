# Webpack + Vue

A rapid prototyping boilerplate with support for Cordova.

| **Deprecation notice:** Please use [vue-template](https://github.com/Normally/vue-template) instead |
| :-------------------------------------------------------------------------------------------------- |


#### Clone

```
git clone --depth=1 https://github.com/Normally/webpack-vue.git folder-name
```

#### Update details & install dependencies

```js
yarn init && yarn
```

#### Develop

```js
yarn start

// Live preview at localhost:3000
```

#### Build

```js
yarn build

// Creates www folder with compiled code
```

<br/><br/>

## Make an iOS App

Make sure [Cordova](https://cordova.apache.org/) is installed gloablly

```
yarn global add cordova@latest
```

Make sure [ImageMagick](https://github.com/ImageMagick/ImageMagick/blob/master/Install-mac.txt) is installed for icon/splash generation

```
brew install imagemagick
```

Convert the project to a Cordova project

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

#### Bump

```js
yarn bump // Bump version number e.g. 0.0.1 > 0.0.2
```

#### Icons & Splash

Edit sketch files in `source/design/` and export to `source/img/`

`yarn icon` to generate the icons for your project

`yarn splash` to generate the splash screens for your project

Favicons for desktop and webapps are generated automatically.

<br/><br/>

## Tips

This boilerplate uses [Prettier](https://prettier.io/) - _You press save and code is formatted_. Please [integrate](https://prettier.io/docs/en/editors.html) it with your editor. Or run `yarn pretty` which will format all of your `.js`, `.vue`, `.scss` and `.css` files.

[Read some tips](docs/TIPS.markdown)

There is an [examples](source/examples) folder, check it out.<br/>
Or view a demo here https://normally.github.io/webpack-vue/

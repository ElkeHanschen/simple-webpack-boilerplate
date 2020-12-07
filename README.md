# WIP - Simple Webpack v4 Boilerplate

### What is this about?

- take/create HTML, CSS, JavaScript files
- minimize/distribute them into `dist` folder
- automatically watch saved files on change
- distribute on `localhost`; live reload on change
- only use the utmost necessary packages
- configure this from scratch

### This Repo is based on:

- [a mix of helpful sources I found out there](#Sources)

### Preconditions

- only Front-End related
- at point of writing: node v12.12.0, webpack 4.44.1

### How to run this?

- clone this repo
- cd into project
- `npm start` (combines `npm run build` (builds minified files for production) and `npm start` (serves on localhost)), will open the `index.html` on `localhost`

## Need to install node?

- see here [How to install NodeJS and NPM on Mac using Homebrew](https://medium.com/@hayasnc/how-to-install-nodejs-and-npm-on-mac-using-homebrew-b33780287d8f)
  - check for node / node version in your terminal `node -v`
  - check for homebrew `brew -v`
  - install [homebrew](https://formulae.brew.sh/formula/node)
  - run this command in your terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - install node via homebrew `brew install node`
  - check for node again `node -v`

## ToDo

- [ ] live reload not working since I moved the index.html and had some changes in dev-server config
- [ ] to check, if autoprefixer works (when having more content)

## npm packages - short explanation

Of course find all of them on [npm](https://www.npmjs.com/package/npm) but to make it easier to follow my approach, a short explanation here:
Please be careful when installing locally / globally!
Installing locally is what's being recommended.

#### webpack

Module bundler for JavaScript applications.
Takes all the code from your application and makes it usable in a web browser.
Out of the box it only understands JavaScript and JSON.

#### webpack-cli

Flexible set of commands for DEVs to increase speed when setting up a custom webpack project.
As of webpack v4, you also need to install -cli.

#### style-loader - use for Development

`npm install --save-dev style-loader`
It’s recommended to combine style-loader with css-loader.
Injects CSS into the DOM.
It's faster than extracting the styles each time, like you do it with mini-css-extract-plugin.

#### mini-css-extract-plugin - use for Production

`npm install --save-dev mini-css-extract-plugin`
It’s recommended to combine mini-css-extract-plugin with css-loader.
Extract CSS into separate files.
It creates a CSS file per JS file which contains CSS.

#### css-loader

`npm install --save-dev css-loader`
Interprets `@import` and `url()` like `import/require()` and will resolve them.

#### postcss-loader

`npm install --save-dev postcss`
A mighty tool for transforming styles with JS plugins.
These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images and more.
The Autoprefixer PostCSS plugin is one of the most popular.

#### Autoprefixer

`npm install --save-dev autoprefixer`
PostCSS plugin to parse CSS and add vendor prefixes to CSS.

#### sass

`npm install --save-dev sass`
A pure JavaScript implementation of Sass.
Is a distribution of Dart Sass.

#### sass-loader

`npm install sass-loader sass webpack --save-dev`
sass-loader requires you to install either Dart Sass or Node Sass.
It's recommended to install Dart Sass.
Loads a Sass/SCSS file and compiles it to CSS.

#### webpack-dev-server

`npm i webpack-dev-server`
A development server that provides live reloading.
This should be used for development only.
webpack-dev-server is configured by default to support live-reload of files as you edit your assets while the server is running.

#### Trouble shooting

- sometimes it's helpful to delete the dist folder and build files anew
- for this, run `m -rf ./dist` and build files again with `npm run build`
- sometimes it's also helpful to delete the node_modules folder and build it anew
- for this, run `rm -rf node_modules` to delete node_modules and run `npm install` to generate it again

## Sources

[Webpack Getting Started](https://webpack.js.org/guides/getting-started/)

[Webpack Development](https://webpack.js.org/guides/development/)

[Article: A tale of Webpack 4 and how to finally configure it in the right way](https://medium.com/hackernoon/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1)

[Github to aboves article](https://github.com/marharyta/webpack-boilerplate)

[Article, super helpful: Why Webpack](https://blog.andrewray.me/webpack-when-to-use-and-why/)

[Article: How to configure webpack from scratch for a basic website](https://dev.to/pixelgoo/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5)

[Article: 30 answers from Stack Overflow to the most popular webpack questions](https://medium.com/wizardnet972/30-answers-from-stack-overflow-to-the-most-popular-webpack-questions-49980770d5dc)

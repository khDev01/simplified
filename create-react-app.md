React JS

Options to create React app:
1. create-react-app
2. Manual setup


### create-react-app
```
npx create-react-app MyApp
cd MyApp
npm start
```


### Manual setup
JS build toolchain typically consists of:
* Package manager - npm or yarn
* Bundler - Webpack or Parcel
* Compiler - Babel

## React CDN https://reactjs.org/docs/cdn-links.html

= manual setup tutorial  https://javascript.plainenglish.io/create-a-react-app-from-scratch-in-2021-8e9948602e9c

```
mkdir myapp && cd myapp
```
`npm init -y`

```
npm i webpack babel-loader @babel/preset-react babel-preset-react html-webpack-plugin webpack-dev-server css-loader style-loader @babel/plugin-proposal-class-properties webpack-cli -D && npm i react react-dom -S
```
`mkdir src && cd src && touch index.js`
`touch index.html`

my-app-from-scratch/
┣ node_modules/
┣ src/
 ┣ index.html
 ┗ index.js
┣ package-lock.json
┗ package.json

``` index.html
<!doctype html>
<html lang=”en”>
<head>
 <meta charset=”utf-8">
 <title>My React App from Scratch</title>
</head>
<body>
 <div id=”app”></div>
</body>
</html>
```
````index.js
import ReactDOM from ‘react-dom’;
import React from ‘react’;
const App = () => {
 return <h1>This is my React app!</h1>;
 }
ReactDOM.render(<App />, document.getElementById(‘app’));
````
back to root
`touch .babelrc && touch webpack.config.js`


my-app-from-scratch/
┣ node_modules/
┣ src/
 ┣ index.html
 ┗ index.js
┣ .babelrc
┣ package-lock.json
┣ package.json
┗ webpack.config.js
```.babelrc
{
 “presets”: [“@babel/preset-react”],
 “plugins”: [“@babel/plugin-proposal-class-properties”]
}
```

``` webpack.config.js
const HtmlWebPackPlugin = require(“html-webpack-plugin”);
const htmlPlugin = new HtmlWebPackPlugin({
 template: “./src/index.html”,
 filename: “./index.html”
});
module.exports = {
mode: ‘development’,
  module: {
    rules: [{
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: “babel-loader”
   }
 },
  {
   test: /\.css$/,
   use: [“style-loader”, “css-loader”]
  }
]},
 plugins: [htmlPlugin]
};
```

add script to package.json `“start”: “webpack serve — open” `


`npm run start`

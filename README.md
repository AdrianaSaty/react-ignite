# React Ignite

## Chapter I

### 1 - Created project structure

### 2 - Config Babel
* To generate the js file from index.jsx file, use:
$ yarn babel src/index.jsx --out-file dist/bundle.js

### 3 - Config Webpack
 * To execute Webpack, use:
$ yarn webpack

### 4 - Created React structure

### 5 - Installed and used html-webpack-plugin
This lib inject the javascript (generated by webpack) in a index.html file in our dist file.  

### 6 - Install 'webpack-dev-server' lib
It executes the command 'yarn webpack' everytime a file at the 'src' folder changes.
Use 'yarn webpack serve' to 

### 6 - Using 'source-map'
Allow us to see the original code (written by us) of the application after it was processed with Webpack. It was important when we need to debug code in the browser.

### 7 - Config env vars
To execute our application:
* dev: yarn dev
* production: yarn build

### 8 - Importing CSS files
Use libs 'style
-loader' and  'css-loader' to link your css files to the index.html file 
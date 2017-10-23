# React Boilerplate

## Table of Contents
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Development guidelines](#development-guidelines)
  - [Project structure](#project-structure)
  - [Dependences](#dependences)
  - [Development Dependences](#development-dependences)
  - [Developmet coding flow](#developmet-coding-flow)
## Prerequisites
- Install [NodeJS](https://nodejs.org/en/)
- Install [React](https://facebook.github.io/react/)
## Install
Clone the repository:
```
$ git clone git@github.com:at-fe-rd/r-react.git
$ cd r-react/react-boilerplate
```
Install dependencies:
```
$ npm install
```
Run development server:
```
$ npm run dev
```
Open the web browser to http://localhost:3001

## Development guidelines
- [Document]()
- [Coding Convention](http://172.16.110.17/attachments/article_attachment/attachment/64/c45b80ead1.pdf)

## Project structure

```
    .
    ├── assets                         		<- static assets
    │   ├── fonts
    │   ├── images
    │   └── ...
    ├── src                                 <- source code of the application
    │   ├── components
    │   │   ├── header
    │   │   │   ├── index.jsx
    │   │   │   └── style.scss
    │   │   ├── logo
    │   │   │   ├── index.jsx
    │   │   │   └── style.scss
    │   │   └── ...
    │   ├── config                          <- configuration of project
    │   ├── containers
    │   │   ├── search
    │   │   │   ├── action.js
    │   │   │   └── reducer.js
    │   │   ├── show-modal
    │   │   │   ├── action.js
    │   │   │   └── reducer.js
    │   │   └── ...
    │   ├── pages
    │   │   ├── home
    │   │   │   ├── index.jsx
    │   │   │   └── style.scss
    │   │   ├── detail
    │   │   │   ├── index.jsx
    │   │   │   └── style.scss
    │   │   └── ...
    │   ├── store
    │   │   └── ...
    │   ├── styles	                      	<- gobal stylesheets
    │   │   ├── _base.scss
    │   │   ├── _extend.scss
    │   │   ├── _mixin.scss
    │   │   ├── _reset.scss
    │   │   ├── _variables.scss
    │   │   └── style.scss              	<- main stylesheets file
    │   └── index.jsx
    ├── .babelrc                            <- configuration of babel
    ├── index.html                          <- main html
    ├── package.json                        <- dependencies of the project
    ├── webpack.config.js                   <- configuration of the webpack
    ├── README.md
    .
```

## Dependences

```json
"dependencies": {
  "bootstrap": "^4.0.0-alpha.6",
  "font-awesome": "^4.7.0",
  "jquery": "^3.2.1",
  "popper.js": "^1.12.5",
  "react": "^15.6.1",
  "react-dom": "^15.6.1",
  "react-redux": "^5.0.6",
  "react-scripts": "1.0.12",
  "redux": "^3.7.2",
  "tether": "^1.4.0"
}
```

## Development Dependences

```json
"devDependencies": {
  "babel": "^6.23.0",
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-preset-es2015": "^6.24.1",
  "babel-preset-react": "^6.24.1",
  "babel-register": "^6.26.0",
  "css-loader": "^0.28.7",
  "extract-text-webpack-plugin": "^3.0.0",
  "file-loader": "^0.11.2",
  "html-webpack-plugin": "^2.30.1",
  "node-sass": "^4.5.3",
  "sass-loader": "^6.0.6",
  "style-loader": "^0.18.2",
  "web": "0.0.2",
  "webpack": "^3.5.5",
  "webpack-dev-server": "^2.7.1"
}
```

## Developmet coding flow

### Main html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Boilerplate</title>
  </head>
  <body>
    <div id="root">Loading....!</div>
  </body>
</html>
```

### Main Render

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

// library
import 'bootstrap';

// Stylesheets
import 'styles/style.scss';

// Import component here
    
class ReactBoilerplate extends React.Component {
  render() {
    return (
      <div>
        // something
      </div>
    );
  }
};

ReactDOM.render(<ReactBoilerplate/>, document.getElementById('root'));
```

### Component, Pages

- Folder structure
```
name
├── index.jsx
└── style.scss
```

- Folder name: `snake-case`
- Class name: `CamelCase`
- Using into another component: `<Name />`
- Example: `home/index.jsx`
```jsx
import React from 'react';
import './style.scss'
    
class Home extends React.Component {
  render() {
    return (
      <div className="container">
        This is homepage
      </div>
    );
  }
};
```
- Component's HTML element using style through `className`
```html
<div className="container"></div>
```

> **container** class is defined

> There is **a space** between the names

### StyleSheets (SCSS)

```scss
/* reset bootstrap's variables and global variables*/
@import 'variables';

/* import bootstrap */
@import '~bootstrap/scss/bootstrap';

/* import font-awesome */
$fa-font-path: '~font-awesome/fonts';
@import '~font-awesome/scss/font-awesome';

/* global stylesheet */
@import 'extend';
@import 'mixin';
@import 'reset';
@import 'base';
```

#### Global SCSS

- SCSS class name: `.snake-case`
- SCSS id name: `#snake-case`
- SCSS variable name: `$snake-case`
- Folder structure
```
styles                         
├── _base.scss
├── _extend.scss
├── _mixin.scss
├── _reset.scss
├── _variables.scss
└── style.scss
```

- Define variables in `_variables.scss`
```scss
$primary-color: #333333;
$navy-blue: #00c0ff;
```

- Define global class in `_base.scss`
```scss
.container {
  width: 1240px;
  margin: 0 auto;
}
```

- Reset stylesheet of basic element in `_reset.scss`
```scss
body {
  margin: 0;
  padding: 0;
  border: 0;
}

* {
  box-sizing: border-box;
}
```

#### Component CSS

```scss
.header {
  padding: 10px 0;
}
```

Using variables
```scss
.text {
  color: $navy-blue;
}
```

Import component's stylesheet `style.scss` inside component's `index.jsx`

```jsx
import React from 'react';
// import here
import './style.scss'
    
class Home extends React.Component {
  render() {
    return (
      <div className="container">
        This is home
      </div>
    );
  }
}
```
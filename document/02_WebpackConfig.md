# React với ES6, Webpack, Babel, JSX
## Nội dung
- [Introduction](#introduction)
- [Cài đặt Webpack](#cai-dat-webpack)
    - [Cài đặt và thiết lập](#cai-dat-va-thiet-lap)
    - [Cấu trúc thư mục](#cau-truc-thu-muc)
    - [Chạy webpack](#chay-webpack)
- [Cài đặt Babel loader](#cai-dat-babel-loader)
- [Tối ưu các câu lệnh scripts](#toi-uu-cac-cau-lenh-scripts)
- [Cài đặt Webpack Dev Server](#cai-dat-webpack-dev-server)
    - [Hot Module Reloading](#hot-module-reloading)
    - [Tối ưu hóa Importing Bundle](#toi-uu-hoa-importing-bundle)
- [Tổng hợp](#tong-hop)
    - [Dependencies](#dependencies)
    - [Webpack.config.js](#webpackconfigjs)
    - [NPM scripts](#npm-scripts)
    - [Vấn đề liên quan](#van-de-lien-quan)

## Introduction

**Webpack** là một **module bundler** được sử dụng phổ biến hiện nay, nó **đóng gói** và **compile** các code viết bằng `js`, `jsx`, `jade`, `coffee`, `less`, `sass`, `png`,... thành `js`, `css`, `png`...
Như trong React app này, **Webpack** sử dụng **Babel Compiler** để chuyển các code React từ `ES6` -> `ES5`. Vì sao phải mất công như vậy? Vì các trình duyệt web chỉ mới hỗ trợ được `ES5`.

Bên cạnh đó **Webpack** sử dụng các **Style Loader** để compile [SASS](http://sass-lang.com/documentation/) và [LESS](http://lesscss.org/3.x/) qua `CSS`.

[Tại sao lại sử dụng ES6 mà không dùng ES5?](#tai-sao-lai-su-dung-es6-ma-khong-dung-es5)

[JSX là gì? Tại sao lại dùng JSX?](#jsx-la-gi-tai-sao-lai-dung-jsx)

## Cài đặt Webpack
Cần `NodeJS` version >=6
Hoặc `Yarn` version >= 0.27.x

### Cài đặt và thiết lập
```
$ npm install webpack --save-dev
```

Tham số `--save` để lưu vào trong `package.json`

Tạo file `webpack.config.js` như bên dưới
```js
const webpack = require('webpack');
const path = require('path');

// Build folder
const BUILD_DIR = path.resolve(__dirname, './build');
// App folder contain React component
const APP_DIR = path.resolve(__dirname, './src');
const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
}
module.exports = config;
```
### Cấu trúc thư mục
```
hello-app
├── node_modules
├── build
├── src
│   └── index.jsx
├── .gitignore
├── index.html
├── webpack.config.js
├── package.json
├── README.md
└── yarn.lock
```

Nếu cấu trúc thư mục thay đổi, thì cần phải sửa lại `webpack.config.js` cho phù hợp.

`index.jsx`
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello!!!!!!</h1>
        <App />
      </div>
    )
  }
}

ReactDOM.render(<HelloApp />, document.getElementById('root'));
```

`index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- Add -->
    <script src="/build/bundle.js" type="text/javascript"></script>
    <!-- End -->
  </body>
</html>
```
### Chạy Webpack
Tại thư mục `hello-app` chạy lệnh sau:
```
$ ./node_modules/.bin/webpack -d
```

Mở file index.html bằng trình duyệt sẽ thấy kết quả

## Cài đặt Babel loader
**Webpack** sử dụng [Babel Loader](https://webpack.js.org/loaders/babel-loader/) để thực hiện việc chuyển đổi (*transpile*).
**Babel Loader** sẽ chuyển đổi code sử dụng `ES6` như `class`, `let`, `const`, `arrow`,... thành `React.CreateClass()`, `React.CreateElement(h1,...)`,...

#### Cài đặt Babel Loader và các Preset (React và ES6)
```
$ npm install babel-loader babel-preset-es2015 babel-preset-react babel-core --save-dev
```

Tạo file `.babelrc` với nội dung sau:

```json
{
    "presets": ["es2015", "react"]
}
```
Thay đổi lại `webpack.config.js` như sau:
```js
const webpack = require('webpack');
const path = require('path');

// Build folder
const BUILD_DIR = path.resolve(__dirname, './build');
// App folder contain React component
const APP_DIR = path.resolve(__dirname, './src');
const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  // Start add
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory=true'
      }
    ]
  }
  // End add
}
module.exports = config;
```
## Tối ưu hóa các câu lệnh script
Mỗi lần có sự thay đổi, thì phải chạy lại lệnh:
```
$ ./node_modules/.bin/webpack -d
```

Chỉ cần thêm tham số `--watch` là xong
```
$ ./node_modules/.bin/webpack -d --watch
```

Tối ưu lệnh Script trong `package.json`
```json
{
    ...
    "scripts": {
        "dev": "webpack -d --watch",
        "build": "webpack -p"
    }
    ...
}
```
Chạy môi trường dev
```
$ npm run dev
```

Chạy build production

```
$ npm run build
```

**Note**: Nếu yêu cầu permission thì gõ thêm `sudo` phía trước

## Cài đặt Wepack Dev Server
**webpack-dev-server** là một plugin khá hữu ích, giúp tạo ra một server với tính năng tải lại trang khi bundle thay đổi (*live reloading*). Chỉ nên được sử dụng ở môi trường Development.

Cài đặt `webpack-dev-server`:
```
$ npm install webpack-dev-server --save-dev
```

Sau khi cài đặt, cách đơn giản để sử dụng là sửa lại NPM script `"dev"` trong file `package.json` 

```json
{
    ...
    "scripts": {
        "dev": "webpack-dev-server -d --port 8000 --progress",
        "build": "webpack -p"
    }
    ...
}
```
Mặc định **dev server** sẽ có cổng là `8080`, tuy nhiên có thể sử dụng option `--port` để thay đổi cổng. Ngoài ra còn có nhiều option `--progress` hiển thị trạng thái của build process, và nhiều option khác (có thể xem thêm tại: [https://webpack.github.io/docs/webpack-dev-server.html](https://webpack.github.io/docs/webpack-dev-server.html))

Khi chạy môi trường dev, các code sau khi được chuyển đổi (*transpile*) sẽ được đóng gói lại vào một file `bundle.js`, và file này nằm trong **server dev**. Lúc này, file `index.html`cần phải sử dụng file `bundle.js` trên server dev.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- Change -->
    <script src="/build/bundle.js" type="text/javascript"></script>
    <!-- To -->
    <script src="bundle.js" type="text/javascript"></script>
    <!-- End -->
  </body>
</html>
```
### Hot Module Reloading

Nếu có sự thay đổi nhỏ trong một **component** thì việc **reload** lại cũng được diễn ra một cách nhanh chóng, vì lúc này file `bundle.js` sẽ được cập nhật liên tục trong khi `server dev` đang chạy.

### Tối ưu hóa Importing Bundle

Sử dụng công cụ `html-webpack-plugin` của **Webpack**. Có thể hiểu đơn giản là công cụ này sẽ import file `bundle.js` vào main HTML.

Cài đặt `html-webpack-plugin`: 

```
$ npm install html-webpack-plugin --save-dev
```

Chỉnh sửa `webpack.config.js` sau khi cài đặt

```js
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './src');

// Import html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory=true'
      }
    ]
  },
  // Start add (remember add , at above)
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
  // End add
}
module.exports = config;
```

Bây giờ chúng ra ko cần dòng import script trong HTML nữa, mà html-webpack-plugin sẽ làm việc đó.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- Delete -->
    <!-- <script src="bundle.js" type="text/javascript"></script> -->
    <!-- End delete -->
  </body>
</html>
```



## Tổng hợp

### Dependencies

- webpack
- webpack-dev-server
- babel-loader
- babel-preset-es2015
- babel-preset-react
- babel-core
- html-webpack-plugin

### Webpack.config.js

```js
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './src');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory=true'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
module.exports = config;
```



### NPM scripts

```json
{
    ...
    "scripts": {
        "dev": "webpack-dev-server -d --port 8000 --progress",
        "build": "webpack -p"
    }
    ...
}
```



### Vấn đề liên quan

#### Tại sao lại sử dụng ES6 mà không dùng ES5?

ECMAScript 6 (ES6) cung cấp 1 số tính năng mới cho JavaScript, đồng thời giúp code trở nên tường minh và dễ viết hơn. Những ưu điểm ES6 mang lại:

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Template String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- Biến cục bộ `Let` thay thế cho `Var`, điều khác nhau giữa `Let` và `Var` là ở phạm vi sử dụng, [xem thêm](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- Các hằng `Const` 
- `Class` và `Module`
- Default parameter, destructuring, spread operator
- [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) & [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### JSX là gì? Tại sao lại dùng JSX?

- JSX (**JavaScript Syntax Extension**) có cú pháp giống HTML/XML. Bằng việc dùng JSX code HTML và JS có thể được viết trong cùng một file, sau đó `Babel` transpiler sẽ chuyển đổi code sang code JS thực sự. Không như trước kia, code JS được đặt trong HTML, JSX cho phép chúng ta làm điều ngược lại.
- Trên HTML, các element có thuộc tính `class` thì trong JSX là `className` và `for` là `htmlFor`
- Nếu không sử dụng JSX thì để tạo một phần tử con trong một element nào đó thì sẽ như đoạn code dưới đây:

```js
React.render(
    React.createElement(
    	"ul", { id: "nav" },
        React.createElement("li", null,
          	React.createElement("a", { href: "#" }, "Home")
        ),
        React.createElement("li", null,
          	React.createElement("a", { href: "#" }, "About")
        ),
      	React.createElement("li", null,
          	React.createElement("a", { href: "#" }, "Clients")
        ),
      	React.createElement("li", null,
          	React.createElement("a", { href: "#" }, "Contact Us")
        )
    ),
    document.getElementById('myDiv')
);
```

Nếu dùng JSX thì ta có thể viết theo phong cách của HTML, `Babel` sẽ tranform code dưới đây thành đoạn code như ở ví dụ trên:

```jsx
React.render(
    <ul id="nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Clients</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>,
    document.getElementById('myDiv')
)
```


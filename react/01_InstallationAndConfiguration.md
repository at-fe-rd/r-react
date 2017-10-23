# Create a new React app - Hello World
## Nội dung
- [Installation](#installation)
- [Tạo Hello World app](#tao-hello-world-app)
- [Structure](#structure)
    + [Chạy App trên môi trường dev](#chay-app-tren-moi-truong-dev)
    + [Build app product](#build-app-product)

## Installation
Cần NodeJS version >=6

Install: [https://nodejs.org/en/download/](#NodeJS)

Hoặc Yarn version >= 0.27.x

Install: [https://yarnpkg.com/lang/en/docs/install/](#yarn)

**Install React**
```
$ npm install -g create-react-app
```

## Tạo Hello World app
```
$ create-react-app hello-app
$ cd hello-app
```

## Structure
Trong folder hiện tại đã xuất hiện một folder tên my-app, nơi chứa source code của React App. Cấu trúc của nó như sau:
```
hello-app
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── registerServiceWorker.js
├── .gitignore
├── node_modules
├── package.json
├── README.md
└── yarn.lock
```

Main HTML: **index.html**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RealEstate React</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Main App render: **index.js**
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import registerServiceWorkder from './registerServiceWorkder';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorkder();
```

Main App: **App.js**
```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello world!
        </p>
      </div>
    );
  }  
}

export default App;
```

React Script sẽ chạy file *main App render* dùng *React DOM* lấy thành phần HTML từ **App.js** và trỏ tới element mình muốn render các thành phần đó, như ví dụ là element có ID là *root*.


### Chạy App trên môi trường dev
```
$ npm start
```
hoặc
```
$ yarn start
```
Mở http://localhost:3000 để xem kết quả

### Build app product
```
npm run build
```
hoặc
```
yarn run build
```
production được chứa trong thư mục **build**.

Đây là cách tạo một React app đơn giản.
Nguồn từ web chính của [React](http:///facebook.github.io/react)

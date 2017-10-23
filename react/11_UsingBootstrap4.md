# Bootstrap 4
## Nội dung

- [Hướng dẫn sử dụng Bootstrap 4](#huong-dan-su-dung-bootstrap-4)
- [Cài đặt và thiết lập React App sử dụng Bootstrap 4](#cai-dat-va-thiet-lap-react-app-su-dung-bootstrap-4)
  - [Cài đặt Bootstrap 4](#cai-dat-bootstrap-4)
  - [Nhúng Bootstrap JavaScripts](#nhung-bootstrap-javascripts)
  - [Nhúng Bootstrap Styles](#nhung-bootstrap-styles)
  - [Tùy biến Bootstrap Styles](#tuy-bien-bootstrap-styles)
  - [Tổng hợp](#tong-hop)

## Hướng dẫn sử dụng Bootstrap 4

### Layout

Các tính năng nỗi bật của boostrap là hệ thống grid layout. Sử dụng grid layout của boostrap giúp bạn tạo bố cục trang thông qua các hàng (row) và cột (col). Mỗi row của boostrap được bọc bên trong container normal or container-fluid. 
```jsx
const ContainerComponent = (
    <div className="container">
        {/* Content here */}
    </div>
);

const ContainerFluid = (
    <div className='container-fluid'>
        {/* Content here */}
    </div>
);
```

Component để defines một horizontal div nơi bạn có thể đặt các columns:
```jsx

const MyRow = (
    <div class="row">
        {/* My Content */}
    </div>
);
```
Cuối cùng là sử dụng các col:
```jsx
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
           <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">Nguyen</div>
                    <div className="col-md-6">Cong</div>
                    <div className="col-md-2">Y</div>
                </div>
            </div>
        );
    }
}
```
### Buttons

Boostrap sử dụng các button khác nhau bạn có thể sử dụng như sau:
```jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-primary">Primary</button>
                <button type="button" className="btn btn-outline-secondary">Secondary</button>
                <button type="button" className="btn btn-outline-success">Success</button>
                <button type="button" className="btn btn-outline-info">Info</button>
                <button type="button" className="btn btn-outline-warning">Warning</button>
                <button type="button" className="btn btn-outline-danger">Danger</button>
            </div>
        );
    }
}
```
### Modals
Modals trong boostrap được sử dụng:
```jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <!-- Button trigger modal -->
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
                </button>
                <!-- Modal -->
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
```
Và một số thành phần khác bạn có thể tham khảo tại <a href="https://v4-alpha.getbootstrap.com/getting-started/introduction/">đây</a>

## Cài đặt và thiết lập React App sử dụng Bootstrap 4

### Cài đặt Bootstrap 4

Cài đặt **Bootstrap 4** như một `node module` thông qua `npm`

```
$ npm install bootstrap@4.0.0-alpha.6 --save
```

### Nhúng Bootstrap JavaScripts

Nhúng **Bootstrap JavaScripts** bằng cách thêm dòng này vào `entry point` của App (thường là `index.jsx` hoặc `app.jsx`)

```jsx
import 'bootstrap';
```

Ngoài ra còn có thể nhúng các `plugins` một cách riêng lẻ:

```jsx
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
```

Bootstrap phụ thuộc vào `jQuery` và `popper`, vì vậy cần phải cài đặt chúng:

```
$ npm install jquery popper.js --save
```

Chúng cũng phải được khai báo sử dụng rõ ràng, bằng cách thêm chúng vào trong `module.plugins` trong file cấu hình `webpack.config.js`

```js
plugins: [
  ...
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default']
  }),
  ...
],
```



### Nhúng Bootstrap Styles

Nhúng Bootstrap Styles bằng cách thêm dòng này vào trong file style chính của App `style.scss`

```scss
@import "~bootstrap/scss/bootstrap";
```

```scss
/*style.scss*/
/*lib css*/
@import 'variables';
@import "~bootstrap/scss/bootstrap";

/*commmon css*/
@import 'mixin';
@import 'extend';
@import 'reset';
@import 'base';

/*page css*/
@import 'pages/home';
/* ... */

/*component css*/
@import 'components/header';
@import 'components/navbar';
/* ... */
```

Như vậy là đã sử dụng được các styles của Bootstrap kết hợp với cái styles của mình tự định nghĩa trong các thành phần của App.

### Tùy biến Bootstrap Styles

Để khai thác hết tiềm năng của Bootstrap và tùy chỉnh theo yêu cầu mỗi dự án, sử dụng một file nguồn để thay đổi các giá trị về màu sắc, kích thước, ... Như ở dự án, sẽ dùng file `variables.scss` để thay đổi lại các giá trị đó. Ví dụ:

```scss
/*style.scss*/
/*lib css*/
@import 'variables';
@import "~bootstrap/scss/bootstrap";

/*...*/
```

Ví dụ tùy chỉnh trong file `variables.scss`

```scss
/* Bootstrap variables */
$white:  #fff !default;
$gray-100: #f8f9fa !default;
$gray-200: #e9ecef !default;
$gray-300: #dee2e6 !default;
$gray-400: #ced4da !default;
$gray-500: #adb5bd !default;
$gray-600: #868e96 !default;
$gray-700: #495057 !default;
$gray-800: #343a40 !default;
$gray-900: #212529 !default;
$black:  #000 !default;

$blue:    #007bff !default;
$indigo:  #6610f2 !default;
$purple:  #6f42c1 !default;
$pink:    #e83e8c !default;
$red:     #dc3545 !default;
$orange:  #fd7e14 !default;
$yellow:  #ffc107 !default;
$green:   #28a745 !default;
$teal:    #20c997 !default;
$cyan:    #17a2b8 !default;

/* Own variables */
$color-peach:       #ff5a5f;
$color-peach-dark:  #e37059;
$color-sur:         #96dbe4;
$color-sur-dark:    #24828f;
$color-pear:        #93daab;
$color-pear-dark:   #2e854b;
$color-blue-dark:   #101d46;
$color-orange:      #e0a036;

$theme-colors: (
  primary: $blue,
  secondary: $color-orange, // Change secondary theme-color
  success: $green,
  info: $cyan,
  warning: $yellow,
  danger: $red,
  light: $gray-100,
  dark: $color-blue-dark // Change dark theme-color
) !default;

/* Change color of navber-light */
$navbar-light-color:                rgba($blue,1) !default;
$navbar-light-hover-color:          rgba($blue,.7) !default;
$navbar-light-active-color:         rgba($blue,.9) !default;
$navbar-light-disabled-color:       rgba($blue,.3) !default;
$navbar-light-toggler-icon-bg: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-light-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !default;
$navbar-light-toggler-border-color: rgba($blue,1) !default;

```



### Tổng hợp

#### Dependencies

- bootstrap@4.0.0-alpha.6
- jquery
- popper.js

#### Webpack.config.js

```js
const webpack = require('webpack');
const path = require('path');

// Build folder
const BUILD_DIR = path.resolve(__dirname, './build');
// App folder contain React component
const APP_DIR = path.resolve(__dirname, './src');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader' ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: 'main.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
}
module.exports = config;
```

#### index.jsx

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
// lib
import 'bootstrap';

// Stylesheets
import 'styles/style.scss';

// components
import Home from 'pages/home/index';
import Header from 'components/header/index';
import Footer from 'components/footer/index';
import Login from 'components/login/index';
import Register from 'components/register/index';

class RealEstate extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
        <Login />
        <Register />
      </div>
    );
  }
}

ReactDOM.render(<RealEstate />, document.getElementById('root'));

```

#### styles.scss

```scss
/*lib css*/
@import 'variables';
@import "~bootstrap/scss/bootstrap";

/*commmon css*/
@import 'mixin';
@import 'extend';
@import 'reset';
@import 'base';

/*page css*/
@import 'pages/home';
/* ... */

/*component css*/
@import 'components/header';
@import 'components/navbar';
/* ... */
```


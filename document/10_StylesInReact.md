# Styles in React

## Nội dung

- [Những cách style cho React Component](#nhung-cach-style-cho-react-component)
  - [Inline Styling](#inline-styling)
  - [CSS Stylesheets](#css-stylesheets)
  - [CSS Modules](#css-modules)
  - [Styled-Components](#styled-components)
  - [SCSS Stylesheets](#scss-stylesheets)
- [Cách style được chọn cho dự án](#cach-style-duoc-chon-cho-du-an)
  - [Tổng quát](#tong-quat)
  - [SCSS Stylesheets áp dụng vào dự án](#scss-stylesheets-ap-dung-vao-du-an)
    - [Compiling SCSS with Webpack](#compiling-scss-with-webpack)
    - [Tối ưu hóa nhúng Stylesheets](#toi-uu-hoa-nhung-stylesheets)



## Những cách style cho React Component

### Inline Styling

Trong React, inline style không được thể hiện dưới dạng string. Thay vào đó chúng sẽ được thể hiện như một Object.

#### Cú pháp

```js
const object = {
  key1: 'value',
  key2: 'value'
};
```

- Tên Object và Key: `camelCase`
- Value là giá trị của các style: `'string'`

Ví dụ:

```jsx
import React from 'react';

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

const Box = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);

export default Box;
```

#### Cách sử dụng

Gán các **object** vào thuộc tính `style` của thẻ.

Có thể sử dụng trực tiếp giá trị của các style `style={{color: 'red'}}`

```jsx
<p style={{color: 'red'}}>Get started with inline style</p>
```

Cách style này khá là gần giống với style trong React Native Component



### CSS Stylesheets

CSS Stylesheets không đặt trong Component (Internal CSS). Thay vào đó chúng sẽ được được đặt vào một file riêng biệt `*.css` (External CSS), sau đó sẽ đươc nhúng vào component `import '*.css'`.

#### Cú pháp

```css
selector {
  thuộc-tính : giá trị; 
}
```

- Tên selector: 
  - Id: `#snake-case`
  - Class: `.snake-case`
  - Element: `snake-case`
- Thuộc tính (trong selector): `snake-case`
- Giá trị của thuộc tính (value)

Ví dụ: file `Box.css`

```css
.container {
  margin: 40px;
  border: 5px dotted pink;
}

.content {
  font-size: 15px;
  text-align: center;
}
```

#### Cách sử dụng

Import css file `import './Box.css'`  và sử dụng bằng cách gán style vào `className` của thẻ.

```jsx
import React from 'react';
import './Box.css';

const DottedBox = () => (
  <div className="container">
    <p className="content">Get started with CSS Stylesheets</p>
  </div>
);

export default DottedBox;
```



### CSS Modules

Một CSS Module là một CSS file mà tên các `class` và các `animation` có scope mặc định là `:local`

#### Cú pháp

```css
:local(.class) {
  thuộc-tính: giá trị; 
}
:local(#id) {
  thuộc-tính: giá trị; 
}
:local(element) {
  thuộc-tính: giá trị; 
}
```

- Tên selector: 
  - Id: `#snake-case`
  - Class: `.snake-case`
  - Element: `snake-case`
- Thuộc tính (trong selector): `snake-case`
- Giá trị của thuộc tính (value)

Ví dụ:

```css
:local(.container) {
  margin: 40px;
  border: 5px dashed pink;
}
:local(.content) {
  font-size: 15px;
  text-align: center;
}
```

#### Cách sử dụng

Tương tự như **CSS Stylesheets**, import css file `import styles from './Box.css'`

Sau đó, thông qua `className`  truy cập tới các `:local(.class)` như truy cập đến các thuộc tính trong một đối tượng.

```jsx
import React from 'react';
import styles from './Box.css';

const DashedBox = () => (
  <div className={styles.container}>
    <p className={styles.content}>Get started with CSS Modules style</p>
  </div>
);

export default DashedBox;
```

Để sử dụng được, cần phải thiết lập Webpack Config sử dụng một số **loader** để tạo các CSS Module.

`webpack.config.js` file:

```js
. . .
{
  test: /\.css$/,
  loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
}
. . .
```



### Styled-Components

`styled-components` là một thư viện của React và React Native, nó cho phép sử dụng các thành phần styles trong ứng dụng được viết dưới dạng hỗn hợp ngôn ngữ JavaScript và CSS.

```jsx
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const OutsetBox = () => (
  <Div>
    <Paragraph>Get started with styled-components 💅</Paragraph>
  </Div>
);

export default OutsetBox;
```

#### Cài đặt

Đầu tiên cần cài đặt thư viện `styled-components`

```
$ npm install styled-components --save
```

#### Cú pháp

```js
import styled from 'styled-components';
const Object = styled.div`
  thuộc-tính: giá trị;
`
```

- Tên Object: `CamelCase`
- Thuộc tính và giá trị : ``string``

#### Sử dụng

Import thư viện: `import styled from 'styled-components';`

Tiếp theo, tạo một biến chứa các style mong muốn

```jsx
const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;
```

Sử dụng biến đó như một phần tử HTML bình thường

```jsx
<Paragraph>Get started with styled-components</Paragraph>
```

Phần tử `<Paragraph>` đã có sẵn những style được khai báo trước đó.



### SCSS Stylesheets

Về cú pháp và cách sử dụng giống như CSS Stylesheets.

Ngoài ra, SCSS Stylesheets còn có thể viết lồng vào nhau (nested).

Ví dụ file SCSS  `Box.scss`

```scss
.container {
  margin: 40px;
  border: 5px dotted pink;
  
  .content {
    font-size: 15px;
    text-align: center;
  }
}
```

Import scss file `import './Box.scss'` và sử dụng bằng cách gán style vào `className` của thẻ.

```jsx
import React from 'react';
import './Box.css';

const DottedBox = () => (
  <div className="container">
    <p className="content">Get started with CSS styling</p>
  </div>
);

export default DottedBox;
```



## Cách style được chọn cho dự án

### Tổng quát

Có nhiều cách khác nhau để style cho React Component. Tất cả phụ thuộc vào sở thích cá nhân và độ phức tạp của ứng dụng (React App).

- Nếu ứng dụng sử dụng ít style thì [Inline Styling](#inline-styling) là một lựa chọn hợp lý
- Nếu muốn sử dụng lại các thuộc tính style trong cùng một thành phần thì [Styled-Components](#styled-components) là sự lựa chọn hoàn hảo
- Nếu ứng dụng quá phức tạp và cần rất nhiều thuộc tính style khác nhau thì nên dùng [CSS Modules](#css-modules), [CSS Stytesheets](#css-stylesheets) hoặc [SCSS Stylesheets](#scss-stylesheets)

### Cách áp dụng SCSS Stylesheets vào dự án

#### Compiling SCSS with Webpack

Tạo một file SCSS đơn giản `Box.scss`

```scss
.container {
  margin: 40px;
  border: 5px dotted pink;
}

.content {
  font-size: 15px;
  text-align: center;
}
```

và gọi để sử dụng `import './Box.scss'`.

Webpack chỉ hiểu được `JS`. Để biên dịch các file SCSS, cần phải có các loader `style-loader`, `css-loader` và `sass-loader`.  Về cơ bản, khi gọi `import './Box.scss'` , `sass-loader` sẽ  biến file `scss` thành `css`. Sau đó chuyển thành JavaScript với `css-loader`, cuối cùng được nhúng vào giống như nhúng một stylesheet thông qua `style-loader`.

```
$ npm install --save-dev sass-loader css-loader style-loader
```

Thêm một **module loader** mới vào file cấu hình của Webpack `webpack.config.js`

```js
const webpack = require('webpack');
const path = require('path');

// Build folder
const BUILD_DIR = path.resolve(__dirname, './build');
// App folder contain React component
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
      },
      // new loader
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
      // end
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



Thật chất React App được chia ra từng thành phần riêng để quản lý và bảo trì. Style cho nó cũng vậy, `SCSS`, nó giúp mỗi thành phần của React App có một style riêng.

Nếu gặp lỗi trong quá trình biên dịch từ `scss` qua `css` thì chỉ cần hạ phiên bản của `sass-loader` xuống `0.5`, bằng cách sửa trong file `package.json` và chạy lại lênh `npm install`.



#### Tối ưu hóa nhúng Stylesheets

Nếu xem kĩ các **stylesheet** được tạo ra thông qua các `loader` trong Webpack, các dòng style đó được chứa trong thẻ `<style></style>`. Điều đó thật sự không tốt, nó ngăn trình duyệt lưu trữ stylesheets. Vì vậy cần phải di chuyển chúng vào một file chuyên dụng cho việc sử dụng stylesheet.

> A stylesheet, internal or external, specifies the style once for a range of HTML elements selected by `class`, type or relationship to others. This is much more efficient than repeating style information inline for each occurrence of the element. An external stylesheet is usually stored in the [browser cache](https://en.wikipedia.org/wiki/Browser_cache), and can therefore be used on multiple pages without being reloaded, further reducing data transfer over a network. [Read more](https://en.wikipedia.org/wiki/Cascading_Style_Sheets).



Sử dụng `extract-text-webpack-plugin` để làm việc đó:

```
$ npm install --save-dev extract-text-webpack-plugin
```

Sau khi cài đặt, nâng cấp thiết lập trong `webpack.config.js`

```js
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './src');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// Import extract-text-webpack-plugin
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
        // change
        loaders: ['style-loader', 'css-loader', 'sass-loader']
        // to
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader' ]
        })
      	// end
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // add
    new ExtractTextPlugin({
      filename: 'main.css'
    })
    //end
  ]
}
module.exports = config;
```



Đầu tiên, thay vì sử dụng các `loaders` thì dùng một `loader` được cung cấp bởi `ExtractTextPlugin`. Trong `ExtractTextPlugin.extract` sử dụng các loader `css-loader`, `sass-loader` và `style-loader` là một loader dự phòng.

Sau khi biên dịch, các stylesheet được di chuyển vào trong file `main.css` được định nghĩa trong `plugin`.

Bây giờ đã loại bỏ kiểu stylesheet trực tiếp vào trang HTML thông qua thẻ `<style></style>` nữa. Chỉ cần nhúng stylesheet `main.css`  thông qua thẻ `<link>`, vậy là đã có được toàn bộ stylesheet.



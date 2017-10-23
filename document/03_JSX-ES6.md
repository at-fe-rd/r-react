# JSX and ES6

## Nội dung
- [JSX](#jsx)
  - [JSX là gì?](#jsx-la-gi?)
  - [Cú pháp JSX](#cu-phap-jsx)
  - [Vì sao phải sử dụng JSX với React](#vi-sao-phai-su-dung-jsx-voi-react)
- [ES6](#es6)
  - [ES6 là gì?](#es6-la-gi)
  - [Những điểm mới trong ES6](#nhung-diem-moi-trong-es6)
    - [Default Parameters](#default-parameters)
    - [Template Literals](#template-literals)
    - [Multi-line String](#multi-line-string)
    - [Destructuring Assignment](#destructuring-assignment)
    - [Arrow Functions](#arrow-functions)
    - [Block-scope variables](#block-scope-variables)
    - [Classes](#classes)
    - [Enhanced Object Literals](#enhanced-object-literals)
    - [Exporting](#exporting)
    - [Importing Modules](#importing-modules)
    - [For..Of](#forof)

## JSX

### JSX là gì?

Cái tên nói lên tất cã
<b>JSX = JS + XML</b>
Hiểu một cách đơn giản JSX là cú pháp để thay thế javascript cách viết gần giống với XML
Ví dụ:

```jsx
var dropdown =
  <Dropdown>
    A dropdown list
    <Menu>
      <MenuItem>Do Something</MenuItem>
      <MenuItem>Do Something Fun!</MenuItem>
      <MenuItem>Do Something Else</MenuItem>
    </Menu>
  </Dropdown>;
render(dropdown); 
```
### Cú pháp JSX

Cú pháp JSX cũng giống như XML
Có thẻ mở tag:
```jsx
  <JSXElementName JSXAttributesopt>
```
Thẻ đóng tag:
```jsx
  </JSXElementName>
```
Ngoài ra JSX cũng có SelfClosingElement:
```jsx
  <JSXElementName JSXAttributesopt/>
```
### Vì sao phải sử dụng JSX với React

Việc sử dụng JSX trong React là không bắt buộc bạn có thể sử dụng chỉ javascript thuần. Nhưng có rất nhiều lý do sử dụng JSX thay vì dùng javascript thuần:

* Thứ nhất: JSX với cú pháp gần giống XML, cấu trúc cây khi biểu thị các attributes, điều đó giúp ta dễ dàng định nghĩa, quản lý được các component phức tạp, thay vì việc phải định nghĩa và gọi ra nhiều hàm hoặc object trong javascript. Khi nhìn vào cấu trúc đó cũng dễ dàng đọc hiểu được ý nghĩa của các component. Code JSX ngắn hơn, dễ hiểu hơn code JS.
* Thứ hai: JSX không làm thay đổi ngữ nghĩa của Javascript
* Thứ ba: với cách viết gần với các thẻ HTML, nó giúp những developers thông thường (ví dụ như các designer) có thể hiểu được một cách dễ dàng, từ đó có thể viết hoặc sửa code mà không gặp nhiều khó khăn.

## ES6

### ES6 là gì?

ES6 là chữ viết tắt của ECMAScript 6, đây được coi là một tập hợp các kỹ thuật nâng cao của Javascript và là phiên bản mới nhất của chuẩn ECMAScript. ECMAScript do hiệp hội các nhà sản xuất máy tính Châu Âu đề xuất làm tiêu chuẩn của ngôn ngữ Javascript. Bạn cứ nghĩ xem hiện nay có khá nhiều trình duyệt Browser ra đời và nếu mỗi Browser lại có cách chạy Javascript khác nhau thì các trang web không thể hoạt động trên tất cả các trình duyệt đó được, vì vậy cần có một chuẩn chung để bắt buộc các browser phải phát triển dựa theo chuẩn đó.

### Những điểm mới trong ES6

#### Default Parameters

Chúng ta có các dòng lệnh định nghĩa các tham số mặc định:

```jsx
  var link = function (height, color, url) {
      var height = height || 50
      var color = color || 'red'
      var url = url || 'http://azat.co'
      ...
  }
```
Mọi thứ vẫn ổn cho đến khi giá trị là 0 và bởi vì trong JavaScript 0 là falsy nên nó sẽ mặc định là giá trị mà chúng ta hard-coded (50, 'red', 'http://azat.co'), vì thế chúng ta cần sử dụng cách khác. Trong ES6, chúng ta có thể đặt các giá trị mặc định khi khai báo tham số như thế này:

```jsx
  var link = function(height = 50, color = 'red', url = 'http://azat.co') {
    ...
  }
```
#### Template Literals

Template Literals hay interpolation trong các ngôn ngữ khác là một cách hiển thị các biến trong chuỗi. Trong ES5 chúng ta làm như thế này:
```jsx
  var name = 'Your name is ' + first + ' ' + last + '.';
  var url = 'http://localhost:3000/api/messages/' + id;
```
Trong ES6 chúng ta sử dụng cú pháp mới ${NAME}  bên trong chuỗi:

```jsx
  var name = `Your name is ${first} ${last}.`;
  var url = `http://localhost:3000/api/messages/${id}`;
```

#### Multi-line String

Một syntactic sugar khác là chuỗi có nhiều dòng (multi-line string). Trong ES5, chúng ta làm như thế này:

```jsx
  var roadPoem = 'Then took the other, as just as fair,\n\t'
    + 'And having perhaps the better claim\n\t'
    + 'Because it was grassy and wanted wear,\n\t'
    + 'Though as for that the passing there\n\t'
    + 'Had worn them really about the same,\n\t';

  var fourAgreements = 'You have the right to be you.\n\
      You can only be you when you do your best.';
```
Trong ES6, chỉ cần sử dụng dấu backticks:

```jsx
  var roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`;

  var fourAgreements = `You have the right to be you.
      You can only be you when you do your best.`;
```
#### Destructuring Assignment
Destructuring có thể là một khái niệm khó hiểu, hãy xem phép gán đơn giản này nơi các khóa house và mouse là các biến house và mouse:
```js
  var data = $('body').data(), // data has properties house and mouse
    house = data.house,
    mouse = data.mouse;
```
Một ví dụ khác của phép gán destructuring (từ Node.js):
```js
  var jsonMiddleware = require('body-parser').json

  var body = req.body, // body has username and password
    username = body.username,
    password = body.password;
```
Trong ES6, chúng ta có thể thay thế code ES5 với các câu lệnh:

```jsx
  var {house, mouse} = $('body').data(); // we'll get house and mouse variables

  var {jsonMiddleware} = require('body-parser');

  var {username, password} = req.body;
```

#### Arrow Functions

Trong Javascript để tạo một function thì thông thường chúng ta sử dụng hai cách sau:
```js
  // Cách 1
  function Name(var1, var2) {
      
  }
  
  // Cách 2
  var Name = function(var1, var2) {
      
  }
```
Với Arrow functions trong ES6 

```js
  var Name = (var1, var2) => {
    // Nội dung function
  };
```
Trường hợp truyền vào 1 tham số:

```js
  var hello = message => {
    console.log(message);
  };  
```
Trường hợp không truyền vào tham số:

```js
  var hello = () => {
    console.log('Hello World');
  };  
```
#### Block-scope variables
ES6 bổ xung thêm các cách khai báo biến cục bộ (Block-scope variables) `let` và `const`
`let` khai báo biến trong block mà không làm ảnh hưởng đến giá trị trong block khác. 
```js
  const koa = require('koa');
  if(true) {
    let x = 1;
    console.log(x); // in ra: "1"
  }
  console.log(x);  // undefined x do x chỉ được khai báo trong khối lệnh if() { ... }
```
`const` cũng giống `let` cũng được khai báo trong block nhưng không thay đổi được giá trị

#### Classes

Trong ES5 không hổ trợ class mà mô tả các đối tượng thông qua các function và prototype. Hiện ES6 đã hỗ trợ Class, đúng chất của OOP.

```js
  class SkinnedMesh extends THREE.Mesh {
    constructor(geometry, materials) {
      super(geometry, materials);
      this.idMatrix = SkinnedMesh.defaultMatrix();
      this.bones = [];
      this.boneMatrices = [];
    }
    update(camera) {
      super.update();
    }
    get boneCount() {
      return this.bones.length;
    }
    set matrixType(matrixType) {
      this.idMatrix = SkinnedMesh[matrixType]();
    }
    static defaultMatrix() {
      return new THREE.Matrix4();
    }
}
```
#### Enhanced Object Literals
Enhanced Object Literals giúp rút gọn quá trình khai báo foo: foo trong Object. Ví dụ ngày trước bạn khai báo như thế này:
```js
  var obj = {};
  obj.theProtoObj = theProtoObj;

  var handler = function() { ... }
  var obj = {
      handler: handler
  };
```
Thì bây giờ có thể viết gọn  `handler: handler` lại thành handler: 
```js
  var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
  };
```

#### Exporting
ES6 có một số thay đổi về export

```js
  // Nodejs (AMD) ES5 
  module.exports = 1
  module.exports = { foo: 'bar' }
  module.exports = ['foo', 'bar']
  module.exports = function bar () {}

  // ES6
  export default 1
  export default { foo: 'bar' }
  export default ['foo', 'bar']
  export default function bar () {}
```
```js
  // ES5 
  module.exports.name = 'David';
  module.exports.age = 25;

  // ES6
  export var name = 'David';
  export var age  = 25;
```
####  Importing Modules
```jsx
  // ES5
  var _ = require('underscore');

  // ES6
  import _ from 'underscore';
  import { sumTwo, sumThree } from 'math/addition';
  import { 
    sumTwo as addTwoNumbers, 
    sumThree as sumThreeNumbers} from
  } from 'math/addition';
  import * as util from 'math/addition';
```
#### For..Of
Giống for..in, for..of dùng để viết vòng lặp trên các `iterator function` hoặc `generator function`

```js
  let fibonacci = {
    [Symbol.iterator]() {
      let pre = 0, cur = 1;
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { done: false, value: cur };
        }
      }
    }
  }

  for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
      break;
    console.log(n);
  }
```

Và một số thay đổi khác có thể tham khảo tại <a href='https://github.com/duyetdev-collections/es6features#iterators--forof'>Đây</a>
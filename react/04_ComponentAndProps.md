
## COMPONENT &  PROPS
### Nội dung
- [Component](#component)
- [Props](#props)
  + [Pure function là gì?](#pure-function-la-gi?)
  + [PropTypes](#proptypes)
  + [Default Prop Values](#default-prop-values)
### Component
Component cho phép chúng ta chia nhỏ các thành phần UI mục đích để dể quản lý và tái sử dụng lại.

Component trong react giống như một hàm trong javascript, Đầu vào bất kỳ và trả về các thành phần xuất hiện trên màn hình.

Cách đơn giản để khai báo một Component trong react:
```jsx
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
```
Hàm này làm một Component của React vì đối số truyền vào là một đối tượng duy nhất là "props" với dữ liệu và trả về một thành phần của React. Chúng ta gọi nó là "Functional" vì nó thực sự là một hàm trong Javascript.

Chúng ta có thể dùng ES6 để define một Component:

```jsx
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
```
Thông thường ta tạo class component bằng ES6.

Render một Component:
```jsx
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

  ReactDOM.render(
    <Welcome name="user"/>,
    document.getElementById('root')
  );
```
Giải thích những gì xảy ra trong ví dụ:

* Chúng ta gọi `ReactDOM.render()` với element `<Welcome name="Sara" />`.
* React sẽ gọi Component `Welcome` với props là `{name:'Sara'}`
* Component sẽ trả về phần tử `<h1>Hello, Sara</h1> `
* React DOM sẽ cập nhật DOM phù hợp với `<h1>Hello, Sara</h1>.`

### Props
Props ở đây chính là properties của component, chúng ta có thể thay đổi props của một component bằng cách truyền dữ liệu từ ngoài vào. Props có thể là một object, function, string, ...

Chú ý: Khi một props được truyền vào component thì nó là bất biến tức là dữ liệu của nó không được thay đổi kiểu như một "pure" function vậy,

#### Pure function là gì?
Ta xét một function dưới đây:
```js
  function sum(a, b) {
    return a+b;
  }
```
Function được gọi là "pure" vì nó không làm thay đổi giá trị đầu vào của nó và luôn trả về một kết quả tương tự cho các đầu vào như nhau.

Ta xét một function khác:

```js
  function sum(sum, a) {
    sum += a;
  }
```
Ở đây function trên đã thay đổi chính giá trị sum đầu vào của nó và điều này khiến nó không là "pure" function

<b>Tất cả các component của react phải hoạt động như "pure" function</b>

#### PropTypes
Khi bạn muốn validate props, hãy sử dụng PropTypes để làm việc đó.
```jsx
  import PropTypes from 'prop-types';

  class Wellcome extends React.Component {
    static propTypes = {
      name: PropTypes.string
    }
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }
```
Một số validate props React hổ trợ:

```js
  import PropTypes from 'prop-types';

    MyComponent.propTypes = {
    // các kiểu dữ liệu nguyên thủy
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,

    //Truyền vào bất cứ thứ gì: numbers , strings, element or an array.
    optionalNode: PropTypes.node,

    // A React element.
    optionalElement: PropTypes.element,

    // Thể hiện của một lớp.
    optionalMessage: PropTypes.instanceOf(Message),

    // Truyền vào với các giới hạn cụ thể.
    optionalEnum: PropTypes.oneOf(['News', 'Photos']),

    // Có thể chứa một hoặc nhiều loại.
    optionalUnion: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Message)
    ]),

    // Một mảng
    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    // Một đối tượng của một kiểu dữ liệu
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),

    // Một đối tượng đặc biệt
    optionalObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
    }),

    // Function bắt buộc phải có
    requiredFunc: PropTypes.func.isRequired,

    // Giá trị bất kỳ bắt buộc phải có
    requiredAny: PropTypes.any.isRequired,

    // Custom props.
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
    },

    customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
      if (!/matchme/.test(propValue[key])) {
        return new Error(
          'Invalid prop `' + propFullName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
    })
  };
```
#### Default Prop Values
Chúng ta có thể định nghĩa giá trị mặc định cho props bằng cách sử dụng defaulProps

```jsx
  class Welcome extends React.Component {
  // Specifies the default values for props:
    static defaultProps = {
      name: 'Stranger'
    };
    render() {
        return (
          <h1>Hello, {this.props.name}</h1>
        );
    }
  }
  // Renders "Hello, Stranger":
  ReactDOM.render(
    <Greeting />,
    document.getElementById('example')
  );
```
Ví dụ trên sẽ trả về giá trị tương ứng với `<h1>Hello, Stranger</h1>`

Để chắc chắn property `this.props.name` luôn có giá trị thì chúng ta sử dụng `defaultProps` để gán giá trị mặc định nó, `propTypes` kiểm tra kiểu sẽ xảy ra sau khi `defaultProps` thực hiện, do đó việc kiểm tra kiểu cũng sẽ được áp dụng cho `defaultProps`.

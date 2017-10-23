# Forms, Lists and Keys
## Nội dung
- [Forms](#forms)
  - [Controlled Components](#controlled-components)
  - [Handling Multiple Inputs](#handling-multiple-inputs)
- [Lists](#lists)
  - [Rendering Multiple Components](#rendering-multiple-components)
  - [Basic List Component](#basic-list-component)
- [Keys](#keys)
## Forms
Các element của HTML form có hoạt động khác một ít so với element DOM khác trong React.
```jsx
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```
Ví dụ trên là một form HTML mặc định, nó sẽ chuyển đến trang mới khi người dùng submit. Bạn cũng có thể sử dụng form này trong React, nhưng hầu hết các trường hợp cần tạo ra một hàm javascript để sử lý việc submit form và truy cập vào dữ liệu mà người dùng nhập vào. Để giải quyết vấn đề này chúng ta sẽ sử dụng một kỹ thuật gọi là `controlled components`.


### Controlled Components
Trong HTML các thành phần như `<input>`,`<textarea>` và `<select>` thường duy trì các state riêng của mình và truy cập dựa trên input của người dùng. Còn trong react các component có state property thường được update lại mỗi khi setState() được gọi để thay đổi state trong component.

Việc kiểm soát, quản lý giá trị đầu vào của `form element` bên trong `React` được gọi là "controlled component". Ví dụ, nếu bạn truyền "cun" vào `value` của `input element` sau đó người dùng nhập thêm chữ "t" để tạo thành "cunt", thì bạn phải gán lại `value` thành "cunt". Còn nếu không, `value` sẽ vẫn là "cun".

Ví dụ: Mô tả việc nhập tên vào input, sử lý khi input thay đổi và sử lý sau khi click submit.
```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
``` 
Thuộc tính `value` được gán bằng `this.state.value`, `handleChange` luôn được gọi khi có thay đổi trong thẻ `input`, tại hàm `handleChange` chúng ta có cập nhật lại state bằng `setState()` khi đó NameForm component được render lại.

### Handling Multiple Inputs
Khi cần sử lý nhiều `input` ta chỉ cần thêm thuộc tính `name` cho mỗi phần tử `input` và để cho hàm sử lý lấy ra dựa trên `name` đó ví dụ `event.target.name`
```jsx
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```
Với ES6 chúng ta có thể cập nhật state theo name bằng cách:

```jsx
this.setState({
  [name]: value
});
```
 Còn ở phiên bản ES5:

 ```jsx
var partialState = {};
partialState[name] = value;
this.setState(partialState);
 ```
## Lists

```jsx
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```
Trong ví dụ trên chúng ta dùng `map()`  duyệt qua từng phần tử của mảng sau đó nhân đôi lên và trả về một mảng mới với với các chứa kết quả. Đoạn code trên logs ra mảng mới là [2, 4, 6, 8, 10].
### Rendering Multiple Components

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

Ví dụ trên chúng ta duyệt qua các phần tử của mảng numbers bằng hàm `map()` và return lại element `<li>` sau đó gán mảng mới (mảng các element `<li>`) vào listItems.

### Basic List Component
Thông thường bạn sẽ render list bên trong một component.
Chúng ta có thể chỉnh sửa đoạn code ở trên thành 1 component, nhận vào 1 dãy số và in list số đó ra.

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
Khi chạy đoạn mã này bạn sẽ bị cảnh báo nên có một key cho từng item của list. `key` là một thuộc tính đặc biệt bạn cần khai báo khi tạo list các phần tử.
```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```


## Keys
Khi bạn tạo các component một cách dynamically, mỗi thành phần đều cần thuộc tính key, và thuộc tính này là duy nhất (unique). Trong suốt quá trình rendering, các component sẽ bị xáo trộn, chúng cũng có thể bị destroy hay recreate tùy vào sự khác nhau của mỗi giải thuật, việc gán cho nó một key để định danh và đảm bảo rằng các component đều ở đúng vị trí của nó, tối ưu hóa việc rendering.

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```
Cách tốt nhất để chọn một `key` là sử dụng một chuổi duy nhất để chỉ định cho một item, thông thường ta sử dụng `id` để làm `key`.
```jsx
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
``` 
Khi bạn không có ID có thể dùng `index` để đánh `key`:

```jsx
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

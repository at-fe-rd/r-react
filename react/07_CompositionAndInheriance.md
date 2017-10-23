#  Composition vs Inheritance

React gợi ý nên sử dụng composition thay vì inheritance để reuse code giữa các components. Nhưng composition là gì? Inheritance là gì? Ví dụ dưới đây sẽ giúp chúng ta dễ hình dung hơn.

Inheritance:
```jsx
class PaymentMethodForm extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

class CreatePaymentMethodForm extends PaymentMethodForm {
  render() {
    const parent = super.render();
    return (
      <div>
        {parent}
        <button>Create</button>
      </div>
    )
  }
}

class UpdatePaymentMethodForm extends PaymentMethodForm {
  render() {
    const parent = super.render();
    return (
      <div>
        {parent}
        <button>Update</button>
      </div>
    )
  }
}

ReactDOM.render(
  (<div>
    <CreatePaymentMethodForm />
    <UpdatePaymentMethodForm />
  </div>), document.getElementById('root')
);
```
Ở ví dụ trên, chúng ta tạo ra 2 class - `CreatePaymentMethodForm` và `UpdatePaymentMethodForm`, được `extends` từ class `PaymentMethodForm`. Trong `render` method, chúng ta gọi `super.render()` để fetch output từ class cha, và nhét thêm một button ở bên dưới nó.

Nhưng đây không phải là cách làm duy nhất. Thay vì `extends` từ `PaymentMethodForm` class chúng ta thể một `PaymentMethodForm`component và sử dụng component đó bên trong component khác.

Composition:

```jsx
class PaymentMethodForm extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

class CreatePaymentMethodForm extends React.Component {
  render() {
    return (
      <div>
        <PaymentMethodForm />
        <button>Create</button>
      </div>
    )
  }
}

class UpdatePaymentMethodForm extends React.Component {
  render() {
    return (
      <div>
        <PaymentMethodForm />
        <button>Update</button>
      </div>
    )
  }
}

ReactDOM.render(
  (<div>
    <CreatePaymentMethodForm />
    <UpdatePaymentMethodForm />
  </div>), document.getElementById('root')
);
```
Đoạn code trên cả 2 class`CreatePaymentMethodForm` và `CreatePaymentMethodForm` đều` extends` từ `React.Component`, sử dụng `PaymentMethodForm` - `<PaymentMethodForm />` - trong render method.

## Xét ví dụ sử dụng composition
Một số component chưa xác định được các thành phần con chẳng hạn như `Dialog` hay `Sidebar` không biết các phần tử con của nó là gì bởi vì các nội dung của `Dialog` khác nhau mỗi khi `Dialog` được show ra. Trong trường hợp này, chúng tôi gợi ý sử dụng `children` prop để pass element trực tiếp từ bên ngoài vào trong `Dialog` .

```jsx
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
   
  render() {
    return (
      <div className="confirm-dialog">
        <h1>{this.props.title}</h1>
        <p>{this.props.contents}</p>
        {this.props.children}
      </div>
    );
  }
}
```
`this.props.children` sẽ nhận các element con và xuất chúng ra. Vậy làm cách nào nếu chúng ta muốn **multiple holes** trong component. Xem qua ví dụ dưới đây.

```jsx
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```

React elements `<Contacts />` và `<Chat />` đều là đối tượng, do đó bạn có thể truyền chúng đi như là props giống như bất kỳ kiểu dữ liệu khác.

Đôi khi chúng ta muốn custom lại một component chỉ sử dụng trong một số trường hợp đặc biêt. Ví dụ sau sẽ tạo component `AlertDialog` từ component `Dialog` 

AlertDialog:

```jsx
class AlertDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }
   
  handleCancel(event) {
    alert("Alert CANCEL");
  }
     
  render() {
    return (
      <Dialog
        title={this.props.title}
        contents={this.props.contents}>
        <button onClick={this.handleCancel}>CANCEL</button>
      </Dialog>
    );
  }
}
```
AlertDialog sử dụng Dialog component và thêm 1 button `CANCEL`

ConfirmDialog: 
```jsx
class ConfirmDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }
   
  handleCancel(event) {
    alert("Confirm CANCEL");
  }
   
  handleConfirm(event) {
    alert("Confirm OKAY");
  }
   
  render() {
    return (
      <Dialog
        title={this.props.title}
        contents={this.props.contents}>
        <button onClick={this.handleCancel}>CANCEL</button>
        <button onClick={this.handleConfirm}>OK</button>
      </Dialog>
    );
  }
}
```
ConfirmDialog cũng sử dụng Dialog giống AlertDialog nhưng có 2 element con là button CANCEL và button OK truyền vào.

DialogTest:
Chúng ta tạo ra một DialogTest cho phép nhập vào title contents và kiểu dialog, DialogTest cũng được tạo ra từ ConfirmDialog và AlertDialog.
```jsx
class DialogTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: "",
      dialogType: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
   
  handleInputChange(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value,
      dialogType: ""
    });
  }
 
  handleClick(event) {
    var name = event.target.name;
    this.setState({
      dialogType: name
    });
  }
   
  render() {
    var title = this.state.title;
    var contents = this.state.contents;
    var dialogType = this.state.dialogType;
     
    var popup = null;
    if (dialogType == "confirm") {
      popup = (
        <ConfirmDialog
          title={title}
          contents={contents}>
        </ConfirmDialog>
      )
    } else if (dialogType == "alert") {
      popup = (
        <AlertDialog
          title={title}
          contents={contents}>
        </AlertDialog>
      )
    }
     
    return(
      <div>
        title: <input value={title} name="title" onChange={this.handleInputChange} /><br />
        contents: <input value={contents} name="contents" onChange={this.handleInputChange} /><br />
        <button name="confirm" onClick={this.handleClick}>Confirm</button>
        <button name="alert" onClick={this.handleClick}>Alert</button>
        <br />
        <br />
        {popup}
      </div>
    )
  }
}
```

Ta có kết quả:

![enter image description here](http://cfile4.uf.tistory.com/image/2520FE4D58FEC1262CFB42)

## Tổng kết

Tại facebook, chúng tôi sử dụng React trong hàng ngàn các component và chúng tôi không có bất kỳ use cases nào khiến chúng tôi phải tạo component bằng cách kế thừa (inheritance)

Prop và composition cho phép bạn customize một component một cách linh hoạt và các behavior rõ ràng và an toàn, prop của component có thể nhận các giá trị nhuyên thuỷ (primitive values), react element, hoặc các functions.

Nếu bạn muốn tái sử dụng non-UI functionality giữa các components, chúng tôi khuyên bạn nên tạo ra một JavaScript module, các component có thể import nó và sử dụng funtion, object hoặc class mà không cần `extends` nó.
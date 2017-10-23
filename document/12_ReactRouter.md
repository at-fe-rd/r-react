# React router
## Nội dung
- [React router là gì?](#react-router-la-gi?)
- [Cài đặt](#cai-dat)
- [Bộ định tuyến](#bo-dinh-tuyen)
- [History](#history)
- [Rendering a `<Router>`](#rendering-a-router)
- [Routes](#routers)
- [Sử dụng `<Link>` và `<Navlink>` thay vì `<a>`](#su-dung-link-va-navlink-thay-vi-a)

## React router là gì?
React rounter là một thư viện routing mạnh mẽ, nó giúp bạn thêm screen và follow vào trong ứng dụng của bạn một cách nhanh chóng. Nó giúp cho việc đồng bộ giữa URL và những component được load vào hiển thị trên trang.
## Cài đặt
React Router được chia ra làm 3 package: `react-router`, `react-router-dom` và `react-router-native`.
Không nên cài đặt `react-router` một cách trực tiếp. Thay vào đó bạn nên cài đặt 1 trong 2 package còn lại (`react-router-dom` hoặc `react-router-native`) việc chọn gói package nào phụ thuộc vào môi trường của của component cụ thể (react-web hay react-native).
Nếu bạn đang xây dựng 1 website bạn nên cài đặt `react-router-dom`.
Cài đặt bằng cách:
```js
$ npm install --save react-router-dom
```
## Bộ định tuyến
Khi bắt đầu một project mới, bạn cần xác định loại router nào sẽ được sử dụng. Đối với các dự án website chúng ta có hai loại `<BrowserRouter>` và `<HashRouter>`.

`<BrowserRouter>` nên được sử dụng khi bạn có một server và nó sử lý các dynamic requests 
`<HashRouter>` nên sử dụng cho static websites.

## <a href='https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md'>History</a>
Mỗi router tạo ra một đối tượng history, mà nó sử dụng để theo dõi vị trí hiện tại và re-render bất kỳ cứ khi nào có sự thay đổi. Các thành phần khác được **react rounter** cung cấp dựa vào việc có đối tượng history đó thông qua context. Do đó chúng ta phải kết xuất nó bên trong router.

## Rendering a `<Router>`
Router components chỉ nhận thành phần con (child element) duy nhất. 
```jsx
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
```
Trên đây, chúng ta đã chọn xong Router, giờ bắt đầu đến việc xây dựng app.
## Routes
Thành phần `<Route>` là thành phần chính của React router bất cứ khi nào bạn muốn render ra một cái gì đó nếu nó phù hợp với tên đường dẫn của vị trí bạn nên dùng  `<Route>`

```jsx
import { BrowserRouter, Route } from 'react-router-dom'
<BrowserRouter>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/detail" component={Detail}/>
  </div>
</BrowserRouter>
```
nếu đường dẫn truy cập là `/` thì ta sẽ được kết quả render:
```html
<div>
  <Home/>
</div>
```
nếu đường dẫn truy cập là `/news` ta được:
```html
<div>
  <Detail/>
</div>
```
Có ba cách để render một thứ gì đó với `<Route>`
```jsx
<Route component>
<Route render>
<Route children>
```
* Router component:
```jsx
<Route path="/user/:username" component={User}/>

const User = ({ match }) => {
  return <h1>Hello {match.params.username}!</h1>
}
```
* Router render:

```jsx
<Route path="/home" render={() => <div>Home</div>}/>
```
* Router children:
```jsx
<ul>
  <ListItemLink to="/somewhere"/>
  <ListItemLink to="/somewhere-else"/>
</ul>

const ListItemLink = ({ to, ...rest }) => (
  <Route path={to} children={({ match }) => (
    <li className={match ? 'active' : ''}>
      <Link to={to} {...rest}/>
    </li>
  )}/>
)

<Route children={({ match, ...rest }) => (
  <Animate>
    {match && <Something {...rest}/>}
  </Animate>
)}/>
```
`<Route>` có thể được tạo ra bất cứ nơi nào bên trong của router, nhưng thường nó sẽ được tổ chức ở cùng một nơi. Bạn có thể sử dụng thành phần `<Switch>` để nhóm `<Route>`. `<Switch>` duyệt qua các phần tử con của nó (routes) và chỉ render phần tử đầu tiên phù hợp với tên đường dẫn hiện tại.
```jsx
<Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/roster' component={Roster}/>
  <Route path='/schedule' component={Schedule}/>
</Switch>
```
* Nested Routes
  Chúng ta có thể lồng các component lại với nhau theo dạng:
```jsx
const Roster = () => (
  <Switch>
    <Route path='/roster/:number' component={Player}>
        <Route path="profiles" component={PlayerProfile} />
    </Route>
  </Switch>
)
```

Bạn có thể xem chi tiết về `<Router>` tại <a href='https://reacttraining.com/react-router/web/api/Route'>Đây</a>



## Sử dụng `<Link>` và `<NavLink>` thay vì `<a>`

Khi tạo **anchors** cho routes bạn cần phải sử dụng `<Link to="">` thay vì dùng `<a href="">`

Khi sử dụng `<Link>` component React Route cơ bản sẽ cho bạn một **anchor** trong DOM.

```jsx
<Link to="/users" className="users">
```
`<NavLink>` tương tự như `<Link>` nhưng có tính năng khá hay là biết được khi nào thì nó được `active`
```jsx
<NavLink to="/users" activeClassName="active">Users</NavLink>
```
Nếu một user đang access vào path `/users/`, Router sẽ update class active của components

Xem thêm về link tại <a href="https://reacttraining.com/react-router/web/api/Link">Đây</a>

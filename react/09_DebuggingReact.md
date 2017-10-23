# Debugging ReactJS

Một trong những điều quan trọng nhất đối với các Developer là làm thế nào để debug ứng dụng bằng ngôn ngữ mình sử dụng. Debug không những giúp bạn tìm ra lỗi mà còn giúp bạn hiểu được hoạt động bên trong của ngôn ngữ từ đó giúp bạn tránh được các lỗi tương tự trong tương lai.
## Nội dung
- [Làm quen với trình duyệt](#lam-quen-voi-trinh-duyet)
- [Code linting](#code-linting)
- [Console](#console)
- [Network](#network)
- [React Developer Tools](#react-developer-tools)
- [Serious debugging — breakpoints](#serious-debugging-breakpoints)
## Làm quen với trình duyệt

Hầu hết các công cụ debug đã được tính hợp sẳn vào trình duyệt ở đây là browser’s developer tools chúng ta có thể mở bằng các nhấn `F12` hoặc có thể click chuột phải và chọn `Inspect`


![enter image description here](https://cdn-images-1.medium.com/max/1400/1*FtInfEp_5QY95BnmalrebA.png)

Hai phần quan trọng bạn cần quan tâm là `Console` và `Network`

## Code linting
Mặc dù nó không giúp bạn gỡ lỗi nhưng nó ngăn bạn phát sinh ra lỗi. Công cụ <a href='https://eslint.org/'>ESLint</a> sẽ giúp cho việc này.

## Console
Console là một trong những công cụ quan trọng nhất trong quá trình debug ứng dụng của bạn. Nó không chỉ hiển thị các message khi bạn sử dụng `console.log` mà nó còn hiển thị phần lớn một số lỗi trong trình duyệt mà ứng dụng bạn gây ra.
Nó là môi trường REPL mà bạn có thể gõ bất kì mã JS nào và thực thi nó ngay lập tức.

`console` object trong js có rất nhiều chức năng, để tìm hiểu kỹ hơn bạn có thể xem tại <a href='https://developer.mozilla.org/en-US/docs/Web/API/Console'>Đây</a>

Sử dụng `console` cũng là cách cơ bản để bạn debug. Giúp chúng ta biết được một phần code của chúng ta có hoạt động được hay không? hàm onClick có được gọi hay không? giá trị của một biến là bao nhiêu?... Chỉ việc log nó ra bằng lệnh `Console.log` Trong một số trường hợp bạn có thể thấy được những lỗi mà bạn mắc phải một cách nhanh chóng.

## Network

Trường hợp ứng dụng của bạn sử dụng một server. `Network` cho phép bạn xem được các request gửi lên và nhận về có bị lỗi hay không, hay trả về dữ liệu không mong muốn. Nó sẽ theo giỏi tất cã các request HTTP và Websocket đã xảy ra kể từ khi bạn mở tool 

![enter image description here](https://cdn-images-1.medium.com/max/800/1*VzqWDCSPS48PIDyEkKik5g.png)

## React Developer Tools

Một extension của Facebook giúp kiểm tra dữ liệu và cấu trúc của JSX có đúng không. Bạn có thể tải về ở <a href='https://github.com/facebook/react-devtools'>Đây</a>

Sau khi cài đặt extension biểu tượng React sẽ hiện lên thanh iconbar nó sẽ sáng lên khi bạn truy cập vào trang web sử dụng React. Khi mở bạn sẽ thấy khung nhìn hiển thị JSX:

![enter image description here](https://cdn-images-1.medium.com/max/800/1*unxAs3GfMApB581arWQY-w.png)

Click chuột vào mỗi phần tử JSX ta có thể thấy được key, ref, props và state của nó. Bạn cũng có thể dùng để thay đổi một số giá trị như boolean, number, string ...

## Serious debugging — breakpoints
Đặt breakpoint giúp bạn tạm dừng code trong quá trình thực thi, và kiểm tra giá trị của tất cả các biến tại thời điểm đó. 
Có 2 cách để đặt breakpoint:

1. Mở DevTools trên trang demo bằng cách nhấn Command + Option + I (Mac) hoặc Control + Shift + I (Windows, Linux). Thêm dòng `debugger;` vào trong source code của bạn — khi bộ phân tích cú pháp gặp phải chỉ thị này thì Developer Tools mở lên và sẽ kích hoạt một breakpoint.

2. Tìm đến vị trí mà bạn muốn đặt breakpoint bên trong Develooper Tools (“Sources” tab) và click vào số dòng (number line) — lúc này bạn sẽ thấy một marker, cách hoạt động của cách này cũng sẽ giống như cách trên.

Tại mỗi breakpoint, Js sẽ ngưng thực thi và cho phép bạn debug ngay từ vị trí breakpoint.
Sau khi debug, bạn tiếp tục thực thi Js bằng cách bấm vào play button trong trình debug.


![enter image description here](https://cdn-images-1.medium.com/max/1600/1*cki5oRD7yax_6fZoUovGQQ.png)

![enter image description here](https://cdn-images-1.medium.com/max/800/1*BBTd7qfkGJMaLdNo-C7OiQ.png)

* Bảng điều khiển trên cùng: Gồm các button resume, backwards/ forwards và button vô hiệu hóa các breakpoint.
* Callstack: liệt kê danh sách các function đã được gọi.
* Scope: hiển thị những biến có sẵn tại thời điểm đang thực thi trong các phạm vi (local, global, closure) cùng với các giá trị của chúng, bạn cũng có thể thay đổi các giá trị của chúng tại thời điểm này 

Và còn một số công cụ hổ trợ debug khác như redux-devtools, redux-logger bạn có thể xem chi tiết tại <a href='https://medium.com/@baphemot/intro-to-debugging-reactjs-applications-67cf7a50b3dd'>đây</a>
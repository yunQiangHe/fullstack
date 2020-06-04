import React from 'react'
import ReactDOM from 'react-dom'

// 组件
// 箭头函数
const App = () => {
    const now = new Date()
    const a = 10
    const b = 20
    return (
        <div>
            <p>Hello world,it is {now.toString()}.</p>
            <p>{a} plus {b} is {a + b}</p>
            <h3>JSX</h3>
            <br />
            <p>需要闭合标签</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
// 

// 看起来 React 组件返回的是 HTML 标签，但实际并不是这样。 
// React 组件的布局大部分是使用JSX编写的。 
// 尽管 JSX 看起来像 HTML，但我们其实是在用一种特殊的方法写 JavaScript 。
//  在底层，React 组件实际上返回的 JSX 会被编译成 JavaScript。

// JSX 的思想与许多模板语言非常相似，就如在 Java Spring 中使用的 Thymeleaf（是一种服务器模板语言）。
// JSX 是一种“类XML”语言，这意味着每个标签都需要关闭。


// import React from 'react'
// import ReactDOM from 'react-dom'

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }

// ReactDOM.render(
//   React.createElement(App, null),
//   document.getElementById('root')
// )
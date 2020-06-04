import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    return (
        <div>
            <p>Hello world {props.name}</p>
            <strong>React 的核心理念，就是将许多定制化的、可重用的组件组合成应用。</strong>
            <p>【props：向组件传递数据】</p>
            <p>还要记住 React 组件名称必须大写</p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="React" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))


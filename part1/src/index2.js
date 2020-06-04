import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => {
    return (
        <div>
            <p>Hello world react</p>
            <strong>React 的核心理念，就是将许多定制化的、可重用的组件组合成应用。</strong>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <h1>Greetings</h1>
            <Hello />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))


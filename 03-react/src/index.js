import React from 'react'
import ReactDOM from 'react-dom'

const Title = () => (
    <h1>TITLE</h1>
)

const App = () => (
    <div>
        <Title />
        <h2>Hello, React</h2>
    </div>
) 

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
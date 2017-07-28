import React, { Component } from 'react'

class AppOrigin extends Component {
  render() {
    return (
      <h1>Hello, REACT</h1>
    );
  }
}

// for stateless
// Only show props, no state
const App1 = (props) => (
  <div>
    <h1>{props.text}</h1>
    <h3>{props.name}</h3>
  </div>
)

// for stateless [*Famous]
const App2 = ({text, name}) => (
  <h1>{text} {name}</h1>
)

// for stateless 
const App3 = (props) => {
  console.log(props)
  return <h1>{props.name}</h1>
}

// For stateful
// class App extends React.Component is fine too
class App extends Component {
  render() {
    // return (
    //   <h1>Hello, stateful. {this.props.name}</h1>
    // )
    const {name, text} = this.props
    return (
      <h1>{name}</h1>
    )
  }
}

export default App;

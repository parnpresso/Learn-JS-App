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
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    // can have this line or bind in caller function
    //this.onClickCount = this.onClickCount.bind(this)
  }

  // Have to bind 
  onClickCount() {
    // Not recommend
    //this.state.count = this.state.count + 1

    // Recommend
    this.setState({
      count: this.state.count + 1
    })
  }

  // Don't have to bind
  onClickCountArrow = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  //[????] Async, need to use previous state
  onClickMinusArrow = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  render() {
    // return (
    //   <h1>Hello, stateful. {this.props.name}</h1>
    // )
    const {name, text} = this.props
    return (
      <div>
        <h1>{name} - {this.state.count}</h1>
        <button onClick={this.onClickCount.bind(this)}>Count</button>
        <button onClick={this.onClickCountArrow}>Count</button>
        <button onClick={this.onClickMinusArrow}>Minus</button>
      </div>
    )
  }
}

export default App;

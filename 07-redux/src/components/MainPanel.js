import React, { Component } from 'react'


class NewItem extends Component {

  state = {
    text: ''
  }

  onChangeValue = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onClickAdd = () => {
    this.props.addItem(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChangeValue} value={this.state.text}/>
        <button onClick={this.onClickAdd}>Add</button>
      </div>
    )
  }
}

const TodoItem = ({text}) => (
  <li>{text}</li>
)

const TodoList = ({ items }) => (
  <ul>
    {items.map( (item,i) => <TodoItem key={i} text={item} />)}
  </ul>
)

class MainPanel extends Component {

  state = {
    items: [
      "Learn JS",
      "Learn React",
      "Learn Redux"
    ]
  }

  addItem = (item) => {
    let newState = this.state.items
    newState.push(item)

    this.setState({
      items: newState
    })
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <NewItem addItem={this.addItem}/>
        <TodoList items={this.state.items}/>
      </div>
    );
  }
}

export default MainPanel;

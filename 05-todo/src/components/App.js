import React, { Component } from 'react'

const NewItem = () => (
  <div>
    <input type="text" />
    <button>Add</button>
  </div>
)

const TodoItem = ({text}) => (
  <li>{text}</li>
)

const TodoList = ({ items }) => (
  <ul>
    {items.map( (item,i) => <TodoItem key={i} text={item} />)}
  </ul>
)

class App extends Component {

  state = {
    items: [
      "Learn JS",
      "Learn React",
      "Learn Redux"
    ]
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <NewItem />
        <TodoList items={this.state.items}/>
      </div>
    );
  }
}

export default App;

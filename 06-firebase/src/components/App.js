import React, { Component } from 'react'
import firebase from '../firebase'

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

class App extends Component {

  state = {
    items: []
  }

  addItem = (item) => {
    const itemsRef = firebase.database().ref('items')
    itemsRef.push({
      text: item
    })

    let newState = this.state.items
    newState.push(item)

    this.setState({
      items: newState
    })
  }

  componentDidMount(){
    const itemsRef = firebase.database().ref('items')
    itemsRef.on('value', (snapshot) => {
      console.log(snapshot)
      console.log(snapshot.val())
      const items = snapshot.val()
      let newItems = []
      for (let item in items) {
        newItems.push(items[item].text)
      }
      this.setState({
        items: newItems
      })
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

export default App;

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

const AvItem = ({title, video}) => (
  <li>
    {title}
    <video src={video} />
  </li>
)

class AvList extends Component {

  state = {
    videos: []
  }

  componentDidMount(){
    fetch('https://api.avgle.com/v1/videos/5?limit=5')
      .then( (response) => response.json())
      .then( (responseJson) => {
        console.log(responseJson)
        const videos = responseJson.response.videos
        const newVideos = videos.map(
          v => ({
            title: v.title, 
            url: v.preview_video_url
          })
        )
        this.setState({
          videos: newVideos
        })
      })
  }

  render() {
    return (
        <ul>
          {this.state.videos.map( (video,i) => <AvItem key={i} title={video.title} video={video.url}/>)}
        </ul>
    ) 
  }

}

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
        <AvList />
      </div>
    );
  }
}

export default App;

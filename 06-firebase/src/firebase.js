import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDRGXMUFkhWdE1lQkBPeGdbZmCtD1SRTZo",
    authDomain: "todolist-reactjs.firebaseapp.com",
    databaseURL: "https://todolist-reactjs.firebaseio.com",
    projectId: "todolist-reactjs",
    storageBucket: "todolist-reactjs.appspot.com",
    messagingSenderId: "810005361285"
  };
  firebase.initializeApp(config);

export default firebase
import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import {config} from './Config/Firebase';
import firebase from 'firebase/app';
import { auth } from './Config/Firebase'
import firestore from 'firebase/firestore'
import Home from './Components/JSX/Home/s_Home';




class App extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount() {
    let testRef = firebase.firestore().collection('test').doc('first');

    var getTest = testRef.get().then(doc => {
      if(!doc.exists) {
        console.log('no doc');
      } else {
        console.log('Document Data: ', doc.data().new);
      }
    }).catch(err => {
      console.log('Error: ', err);
    });
  }



  render() {
    return (
      <div className="App">
      <Home />
     
      </div>
    );
  }
}

export default App;


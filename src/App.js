import React, { Component } from 'react';
import './App.css';
import Librarian from './Librarian/Librarian';

class App extends Component {
  state = {
    Username : [
      {
        tit: '123',
        name : "Max",
        age: 28
      },
      {
        id: '456',
        name : "Max",
        age: 28
      },
      {
        id: '789',
        name : "Max",
        age: 28
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>LMS - Librarian Management System</h1>
        <Librarian></Librarian>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ask from './Ask';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Test</h1>
        </header>
        <Ask />

      </div>
    );
  }
}

export default App;

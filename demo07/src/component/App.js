import React, { Component } from 'react';
import './App.css';
import logo from '../../res/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-content">
          Your content here
        </p>
      </div>
    );
  }
}

module.exports = App;



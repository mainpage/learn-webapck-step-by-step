import React, { Component } from 'react';
import './App.css';
import logo from 'res/logo.svg';
import MusicList from './MusicList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Music list</h1>
        </header>
        <div className="App-content">
          <MusicList/>
        </div>
      </div>
    );
  }
}

module.exports = App;



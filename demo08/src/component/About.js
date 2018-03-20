import React, { Component } from 'react';
import './common.css';
import logo from 'res/logo.svg';

class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">About React</h1>
        </header>
        <p className="App-intro">
          React - A JavaScript library for building user interfaces
        </p>
        <p className="App-content">
          Your content here
        </p>
      </div>
    );
  }
}

module.exports = About;



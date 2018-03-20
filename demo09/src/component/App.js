import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from '../../res/logo.svg';

class App extends Component {
  onClick() {
    let self = this;
    // 模块懒加载
    //import(/* webpackChunkName: "detail" */ './Detail')
    //.then(Detail => {
      //ReactDOM.render(<Detail />, self.refs['intro']);
    //})
    require.ensure(['./Detail'], function (require) {
      var Detail = require('./Detail');
      ReactDOM.render(<Detail />, self.refs['intro']);
    }, 'detail');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button className="see-more" onClick={this.onClick.bind(this)}>查看更多介绍</button>
        </header>
        <div className="App-intro" ref="intro">
          
        </div>
      </div>
    );
  }
}

module.exports = App;



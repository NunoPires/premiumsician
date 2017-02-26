import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MainLayout} from './components/layout.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Premiumsician, powered by React</h2>
        </div>
        <MainLayout />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import {MainLayoutContainer} from './components/layout-container.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Premiumsician</h2>
        </div>
        <MainLayoutContainer />
      </div>
    );
  }
}

export default App;

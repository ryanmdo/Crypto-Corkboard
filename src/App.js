import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Page from './components/Page'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
        <Page/>

      </div>
    );
  }
}

export default App;

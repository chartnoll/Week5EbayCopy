import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdvertsList from './components/AdvertsList'
import AdvertDetails from './components/AdvertDetails'

class App extends Component {
  render() {
    return (
      <div>
        <AdvertsList />
        <AdvertDetails />
      </div>
    )
  }
}

export default App;
//<AdvertDetails />

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdvertsList from './components/AdvertsList'
import AdvertDetails from './components/AdvertDetails'

const adverts = [
  {
    id: 1,
    name: 'Handbag',
    price: 1450
  },
  {
    id: 5,
    name: 'Heater',
    price: 550
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <AdvertsList adverts={ adverts } />
        <AdvertDetails advert={ adverts[0] } />
      </div>
    )
  }
}

export default App;

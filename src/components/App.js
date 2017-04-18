import React, { Component } from 'react';
import Fruit from './Fruit';

import { FRUITS } from '../fruits';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="app__title">Favorite Fruit?</h1>
        {FRUITS.map(name => <Fruit name={name} key={name} />)}
      </div>
    );
  }
}

export default App;

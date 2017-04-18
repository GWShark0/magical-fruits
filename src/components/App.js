import React, { Component } from 'react';
import Fruit from './Fruit';

import { FRUITS } from '../fruits';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: ''
    };
    this.select = this.select.bind(this);
  }

  select(selection) {
    if (selection === this.state.selection) {
      this.setState({ selection: '' });
    } else {
      this.setState({ selection });
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">
          Favorite Fruit?
        </h1>
        {FRUITS.map(name => (
          <Fruit
            name={name}
            selected={name === this.state.selection}
            onClick={this.select}
            key={name}
          />
        ))}
      </div>
    );
  }
}

export default App;

import React from 'react';
import Fruit from './Fruit';
import { FRUITS } from '../fruits';

import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">
        Select Yer Fruits!
      </h1>
      {FRUITS.map(name => <Fruit name={name} key={name} />)}
    </div>
  );
}

export default App;

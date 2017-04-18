import React from 'react';
import fruits from '../fruits';

import './Fruit.css';

function Fruit({ name }) {
  return (
    <div className="fruit">
      <img className="fruit__preview" src={fruits[name]} alt={name} />
    </div>
  )
}

export default Fruit;

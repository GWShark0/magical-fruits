import React from 'react';
import classNames from 'classnames';
import fruits from '../fruits';

import './Fruit.css';

function Fruit({ name, selected, onClick }) {

  const className = classNames(
    'fruit',
    { 'fruit--selected': selected },
  );

  return (
    <div className={className} onClick={() => onClick(name)}>
      <img className="fruit__preview" src={fruits[name]} alt={name} />
    </div>
  )
}

export default Fruit;

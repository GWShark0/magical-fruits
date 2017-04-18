import React, { Component } from 'react';
import classNames from 'classnames';
import fruits from '../fruits';

import './Fruit.css';

class Fruit extends Component {

  constructor(props) {
    super(props);
    this.state = { selected: false };
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    const { name } = this.props;
    const className = classNames(
      'fruit',
      { 'fruit--selected': this.state.selected },
    );

    return (
      <div className={className} onClick={this.toggleSelect}>
        <img className="fruit__preview" src={fruits[name]} alt={name} />
      </div>
    );
  }
}

export default Fruit;

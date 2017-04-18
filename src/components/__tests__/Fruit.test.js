import React from 'react';
import renderer from 'react-test-renderer';
import Fruit from '../Fruit';

it('should render', () => {
  const component = renderer.create(
    <Fruit name="apple" />
  );
  const tree = component.toJSON();

  // do something with tree?
});

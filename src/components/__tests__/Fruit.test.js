import React from 'react';
import renderer from 'react-test-renderer';
import Fruit from '../Fruit';

it('should render', () => {
  const component = renderer.create(
    <Fruit name="apple" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should toggle selected state', () => {
  const component = renderer.create(
    <Fruit name="banana" />
  );
  let tree;

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Todo from '../components/Todo';

it('toJSON으로 파일이 어떻게 스냅샷이 되는가?', () => {
  const component = renderer.create(<Todo />);
  let tree = component.toJSON();

  console.log(tree);
  expect(tree).toMatchSnapshot();

  tree.props.onChange();

  console.log(tree);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  console.log(tree);


});
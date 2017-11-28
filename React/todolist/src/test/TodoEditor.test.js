import React from 'react';
// import jest from 'jest';
import { shallow, mount } from 'enzyme';
import TodoEditor from '../components/TodoEditor';

// test case
// 1. input이 change 되었을 떄 input값은 string인가?
// 2. input에서 enter를 쳤을 때 input값이 있는가?

it('TodoEditor의 input값이 String인가?', () => {
  const wrapper = mount(<TodoEditor />);
  // console.dir('ProductList', ProductList);

  // expect(typeof wrapper.state('value')).toEqual('string');
  wrapper.find('input').simulate('change');
  expect(typeof wrapper.state('value')).toEqual('string');

});

it('input에서 enter를 쳤을 때 input값이 ""인지 아닌지', () => {
  const wrapper = mount(<TodoEditor />);

  wrapper.find('input').simulate('keydown', {
    target: {keyCode: 13}
  });
  
  expect(wrapper.state('value')).toEqual('');
});
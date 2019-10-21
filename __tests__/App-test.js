/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import {Text} from 'react-native';
import {shallow} from 'enzyme';

describe('App', () => {
  const wrapper = shallow(<App></App>);
  it('Is Text visible?', () => {
    expect(wrapper.find('Text').contains('Todo TDD')).toBe(true);
  });

  it('Is AddTodo visible?', () => {
    expect(wrapper.find('AddToDo')).toHaveLength(1);
  });
  // it('Is TodoList visible?')
});

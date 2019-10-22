/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/AddToDo';
import {Text} from 'react-native';
import {shallow} from 'enzyme';

describe('App', () => {
  // const wrapper = shallow(<AddToDo></AddToDo>);

  // Render new component when test starts
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddToDo></AddToDo>);
  });

  it('Is TextInput visible?', () => {
    expect(wrapper.find('TextInput')).toHaveLength(1);
  });

  it('Is Button visible?', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  })
});

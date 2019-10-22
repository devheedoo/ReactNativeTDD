/**
 * @format
 */

import 'react-native';
import React from 'react';
import AddToDo from '../src/AddToDo';
import {Text} from 'react-native';
import {shallow} from 'enzyme';

describe('Rendering', () => {
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

describe('Interaction', () => {
  let wrapper;
  let props;
  const text = "some ToDo";

  beforeEach(() => {
    props = { onAdded: jest.fn() };
    wrapper = shallow(<AddToDo {...props}></AddToDo>);
    wrapper.find('TextInput').simulate('changeText', text);
    wrapper.find('Button').prop('onPress')();
  });

  it('should call onAdded callback with input text', () => {
    expect(props.onAdded).toHaveBeenCalledTimes(1);
    expect(props.onAdded).toHaveBeenCalledWith(text);
  });
})
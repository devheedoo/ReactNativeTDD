import 'react-native';
import React from 'react';
import ToDoItem from '../src/ToDoItem';
import {Text} from 'react-native';
import {shallow} from 'enzyme';
import { italic } from 'ansi-colors';

describe('Rendering', () => {
  // const wrapper = shallow(<AddToDo></AddToDo>);

  // Render new component when test starts
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ToDoItem></ToDoItem>);
  });

  it('should render a Text', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('should render 2 Buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2);
  })
});

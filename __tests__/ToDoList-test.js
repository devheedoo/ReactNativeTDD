import 'react-native';
import React from 'react';
import ToDoList from '../src/ToDoList';
import {Text} from 'react-native';
import {shallow} from 'enzyme';

describe('Rendering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ToDoList></ToDoList>);
  });

  it('should render a FlatList', () => {
    expect(wrapper.find('FlatList')).toHaveLength(1);
  });
});

describe('Interaction', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      items: [
        {
          text: 'some ToDo 1',
          completed: false
        },
        {
          text: 'some ToDo 2',
          completed: true
        }
      ]
    }
  });

  beforeEach(() => {
    wrapper = shallow(<ToDoList {...props}></ToDoList>);
  });

  it('should pass props to FlatList', () => {
    expect(wrapper.find('FlatList').prop('data')).toBe(props.items);
  });
})

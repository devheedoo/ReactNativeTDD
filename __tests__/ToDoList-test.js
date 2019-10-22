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

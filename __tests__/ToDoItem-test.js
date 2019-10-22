import 'react-native';
import React from 'react';
import ToDoItem, { styles } from '../src/ToDoItem';
import {Text} from 'react-native';
import {shallow} from 'enzyme';
import { italic } from 'ansi-colors';

describe('Rendering', () => {
  // const wrapper = shallow(<AddToDo></AddToDo>);

  // Render new component when test starts
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      item: {}
    };
    wrapper = shallow(<ToDoItem {...props}></ToDoItem>);
  });

  it('should render a Text', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('should render 2 Buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2);
  });

  describe('Uncompleted', () => {
    it('should have default style', () => {
      expect(wrapper.prop('style')).toBe(styles.default);
    });
  });

  describe('Completed', () => {
    beforeEach(() => {
      props.item.completed = true;
      wrapper = shallow(<ToDoItem {...props}></ToDoItem>);
    });

    it('should have completed style', () => {
      expect(wrapper.prop('style')).toBe(styles.completed);
    });
  })
});

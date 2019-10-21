import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import AddToDo from './AddTodo';

export default class App extends Component {
  render() {
    return (
      <View testID="welcome">
        <Text>Todo TDD</Text>
        <AddToDo></AddToDo>
      </View>
    );
  }
}

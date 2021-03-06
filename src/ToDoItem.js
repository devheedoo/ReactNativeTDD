import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class ToDoItem extends Component {
  handleCompletePress = () => {
    const { onCompleted, index } = this.props;
    onCompleted(index);
  }

  handleDeletePress = () => {
    const { onDeleted, index } = this.props;
    onDeleted(index);
  }
  
  render() {
    const { item } = this.props;
    if (!item) return null;
    return (
      <View style={item.completed ? styles.completed : styles.default}>
        <Text testID={item.completed ? "completed" : item.deleted ? "deleted" : "uncompleted" }>{item.text}</Text>
        <Button testID="completeButton" title="C" onPress={this.handleCompletePress}></Button>
        <Button testID="deleteButton" title="D" onPress={this.handleDeletePress}></Button>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  default: {
    backgroundColor: 'white'
  },
  completed: {
    backgroundColor: 'red'
  }
});
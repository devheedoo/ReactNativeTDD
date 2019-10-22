import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class ToDoItem extends Component {
  handleCompletedPress = () => {
    const { onCompleted, index } = this.props;
    onCompleted(index);
  }

  handleDeletedPress = () => {
    const { onDeleted, index } = this.props;
    onDeleted(index);
  }
  
  render() {
    const { item } = this.props;
    return (
      <View style={item.completed ? styles.completed : styles.default}>
        <Text>{item.text}</Text>
        <Button title="C" onPress={this.handleCompletedPress}></Button>
        <Button title="D" onPress={this.handleDeletedPress}></Button>
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
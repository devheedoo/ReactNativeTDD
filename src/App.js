import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View testID="welcome">
        <Text>Todo TDD</Text>
      </View>
    );
  }
}

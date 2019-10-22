import React, {Component} from 'react';
import { View, TextInput, Button } from 'react-native';
export default class AddToDo extends Component {
  state = {
    text: ''
  }
  handleChangeText = (text) => {
    this.setState({text})
  }
  handlePress = () => {
    const { onAdded } = this.props;
    onAdded(this.state.text);
  }
  render() {
    return (
      <View>
        <TextInput onChangeText={this.handleChangeText}></TextInput>
        <Button title="A" onPress={this.handlePress}></Button>
      </View>
    );
  }
}

import React, {Component} from 'react';
import {View, Text, Navigator} from 'react-native';

/* This line imports BarInput component from TextInput.js */
import BarInput from './TextInput';

/* export dafault is needed to import the class into another file */
export default class BallzyLogin extends Component {
  static get defaultProps() {
    return {
      title: 'BallzyLogin'
    };
  }
  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}. </Text>
        <BarInput/>
      </View>
    )
  }
}
  

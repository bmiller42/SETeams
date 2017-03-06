import React, {Component} from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {
  Text,
  View,
} from 'react-native';

class Chat extends Component {
  render() {
    return(
      <View style={{flex:1}}>
        <View style={{flex: 10}}>
          <Text>Hello from Chat</Text>
        </View>
        <NavigationBar/>
      </View>
    )
  }
}

export default Chat;

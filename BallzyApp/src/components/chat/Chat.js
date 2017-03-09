import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import{
  Actions,
  } from 'react-native-router-flux';

class Chat extends React.Component {
  state = {
    name: '',
  };
  render() {
    return(
      <View>
          <Text style={styles.title}> 
            Enter your name: 
          </Text>
          <TextInput
            style = {styles.nameInput}
            placeholder='ex: John Snow'
            onChangeText={(text) => {
              this.setState({
                name: text,
              });
              }}
              value={this.state.name}
           />
           <TouchableOpacity
            onPress={() => {
              console.log(this.state.name);
            }}
           >
            <Text style={styles.buttonText}>
              NExt
            </Text>
           </TouchableOpacity>
        <NavigationBar/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop:20,
    marginLeft: 20,
    fontSize: 20,
  },
  nameInput: {
  padding: 5,
  height: 40,
  borderWidth: 2,
  borderColor: 'black',
  margin: 20,
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20,
  }
});

export default Chat;

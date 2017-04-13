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
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>
            Enter user nickname!
          </Text>
          <TextInput
            style = {styles.nameInput}
            placeholder='EX: Skankhunt42'
            onChangeText={ (text) => { this.setState({name: text}); } }
            value = {this.state.name}
          />
          <TouchableOpacity
            style = {styles.button}
            onPress = {() => {
            console.log(this.state.name);
            }}
          >
            <Text style = {styles.buttonText}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <NavigationBar/>
      </View>
    );
  }
}
//this a custom prop
var styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#00BFFF'
  },
  loginContainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop:20,
    //marginLeft: 20,
    fontSize: 20,
    width: 250,
    backgroundColor: '#FFFF31',
    borderWidth: 1,
    borderRadius: 5,
  },
  nameInput: {
    padding: 5,
    width: 250,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    backgroundColor: 'white'
  },
  button: {
    //marginLeft
    //justifyContent: 'center',
    //alignItems: 'center',
    height: 50,
    width: 250,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#7F8284',
    padding: 10,
    marginTop: 5,
    backgroundColor: '#AEB3B7'
  },
  buttonText: {
    //marginLeft: 20,
    fontSize: 20,
    fontWeight: '600',
    //height: 50,
    width: 50,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFFFFF'
  }
} );

export default Chat;

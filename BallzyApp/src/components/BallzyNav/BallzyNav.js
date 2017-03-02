/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Actions
} from react-native-router-flux;

export default class BallzyNav extends Component {

  render() {
    return (
      <View style={{flex:1, flexDirection:'row'}}>
        <TouchableOpacity
          onPress={()=> {
            Actions.challenges();
          }}
        >
          <View style={styles.NavigationButton}>
            <Image
              source={require('./cannon_man48_48.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=> {
            Actions.conversations();
          }}
        >
          <View style={styles.NavigationButtonSelected}>
            <Image
             source={require('./conversations_icon48_48.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> {
            Actions.chat();
          }}
        >
          <View style={styles.NavigationButton}>
            <Image
             source={require('./camera.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=> {
            Actions.payments();
          }}
        >
          <View style={styles.NavigationButton}>
            <Image
             source={require('./shopping_bag48_48.png')}
            />
          </View>
        </TouchableOpacity>
/*
        <TouchableOpacity
          onPress={()=> {
            Actions.();
          }}
        >
          <View style={styles.NavigationButton}>
            <Image
            source={require('./cog48_48.png')}
            />
          </View>
        </TouchableOpacity>
*/
      </View>
    );
  }
}


var styles = StyleSheet.create({
  NavigationButton: {
    backgroundColor: 'black',
    flex: 1,
    opacity: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavigationButtonSelected: {
    backgroundColor: 'black',
    flex: 1,
    opacity: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  }
});

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
} from 'react-native';


export default class BallzyNav extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'row'}}>
	<View style={styles.NavigationButton}>
          <Image
            source={require('./cannon_man48_48.png')}
          />
        </View>
	<View style={styles.NavigationButtonSelected}>
          <Image
           source={require('./conversations_icon48_48.png')}
          />
        </View>
	<View style={styles.NavigationButton}>
          <Image
           source={require('./camera.png')}
          />
        </View>
	<View style={styles.NavigationButton}>
          <Image
           source={require('./shopping_bag48_48.png')}
          />
        </View>
	<View style={styles.NavigationButton}>
          <Image
           source={require('./cog48_48.png')}
          />
        </View>
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



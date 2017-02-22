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
  Navigator
} from 'react-native';

import BallzyRoot from './BallzyRoot/BallzyRoot';
import BallzyNav from './BallzyNav/BallzyNav';

class BallzyApp extends Component {
  render() {
    return (
      <Text></Text>
    );
  }
}


AppRegistry.registerComponent('BallzyApp', () => BallzyApp);

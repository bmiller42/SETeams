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
import App from './BallzyNavCardstack/BallzyNavCardstack';


AppRegistry.registerComponent('BallzyApp', () => App);

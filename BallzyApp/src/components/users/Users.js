import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

class Users extends React.Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 10}}>
          <View style={styles.UserInfo}></View>
          <View style={styles.Tabs}></View>
          <View style={styles.Content}></View>
        </View>
        <NavigationBar/>
      </View>
    );
  }
}

export default Users;

var styles = StyleSheet.create({
  UserInfo: {
    flex: 3,
    backgroundColor: 'white',

  },
  Tabs: {
    flex: 1,
    backgroundColor: "#121212"
  },
  Content: {
    flex:6,
    backgroundColor: 'white',
  },
})

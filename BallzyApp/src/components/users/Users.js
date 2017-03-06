import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Button,
} from 'react-native';

class Users extends React.Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 10}}>
          <View style={styles.UserInfo}>
            <View style={{flex: 3}}>
            </View>
            <View style={styles.profileArea}>
              <View style={{flex: 7}}>
                <Image
                  style={styles.image}
                  source={require('./profile.png')}
                />
              </View>
              <View style={{flex: 3}}>
                <View style={{flex: 1}}>
                  <Text>Followers:</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text>Posts:</Text>
                </View>
              </View>
            </View>
            <View style={{flex: 3}}>
            </View>
          </View>
          <View style={styles.Tabs}>
            <TouchableHighlight style={styles.NavigationButton}>
              <Text style={{color: 'white'}}>Posts</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.NavigationButton}>
              <Text style={{color: 'white'}}>Challenges</Text>
            </TouchableHighlight>
          </View>
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
    flex: 3.5,
    backgroundColor: '#EFEFEF',
    flexDirection: 'row'
  },

  NavigationButton: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Tabs: {
    flex: 1,
    flexDirection: "row",
  },

  Content: {
    flex: 5.5,
    backgroundColor: 'white',
  },

  profileArea: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  followButton: {
    opacity: 1,
    backgroundColor: '#121212',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
})

import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

class Challenges extends React.Component {
  state = {
    title: '',
  };

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:10}}>
          <Text style={styles.title}>
            Search:
          </Text>
          <TextInput
            style={styles.titleInput}
            placeholder='Search'
            onChangeText={(text) => {
                this.setState({
                  title: text,
                });
            }}
            value={this.state.name}
          />
        </View>
        <NavigationBar/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  titleInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
  },

  buttonText: {
    marginLeft: 20,
    fontSize: 20,
  },
});

export default Challenges;

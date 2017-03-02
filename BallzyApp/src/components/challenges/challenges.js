import React from 'react';

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

class challenges extends React.Component {
  state = {
    title: '',
  };

  render() {
    return (
      <View>
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
        <TouchableOpacity
          onPress={() => {
            Actions.videos({
              title: this.state.name,
            });
          }}
        >
          <Text style={styles.buttonText}>
            videos page
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Actions.payments({
              name: this.state.name,
            });
          }}
        >
          <Text style={styles.buttonText}>
          payments page
          </Text>
        </TouchableOpacity>

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

export default challenges;

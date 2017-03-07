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

class New extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
  };
  render() {
    return (
      <View>
        <Text>
          Title:
        </Text>
        <TextInput
          style={styles.titleInput}
          placeholder='Title'
          onChangeText={(text) => {
              this.setState({
                title: text,
              });
            }}
            value={this.state.title}
        />
        <TextInput
          style={styles.titleInput}
          placeholder='Description'
          onChangeText={(text) => {
              this.setState({
                description: text,
              });
            }}
            value={this.state.description}
        />
        <TextInput
          style={styles.titleInput}
          placeholder='Price'
          onChangeText={(text) => {
              this.setState({
                price: text,
              });
            }}
            value={this.state.price}
        />

        <TouchableOpacity
        onPress={() => {
          Actions.challenges({
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
          });
        }}
        >
        <Text style={styles.buttonText}>
          Create
        </Text>
        </TouchableOpacity>

        <Text>
          //{this.props.search}
        </Text>

      </View>
    );
  }
}

New.defaultProps = {
  name: 'sky-diving'
};

New.propTypes = {
  search: React.PropTypes.string,
};

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

export default New;

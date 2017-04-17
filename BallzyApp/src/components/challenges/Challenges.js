import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ListView,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

class Challenges extends React.Component {
  state = {
    search: '',
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:10}}>
          <TextInput
            style={styles.titleInput}
            placeholder='Search'
            onChangeText={(text) => {
                this.setState({
                  search: text,
                });
            }}
            value={this.state.search}
          />

          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />

          <Text style={styles.title}>
            Title: {this.props.title}
          </Text>
          <Text style={styles.title}>
            Description: {this.props.description}
          </Text>
          <Text style={styles.title}>
            Price: {this.props.price}
          </Text>

          <View style={{flex:0.5, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Actions.new({
                search: this.state.search,
              });
            }}
          >
          <Text style={styles.buttonText}>
            Search
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Actions.new({
              search: this.state.search,
            });
          }}
        >
          <Text style={styles.buttonText}>
            Create
          </Text>
        </TouchableOpacity>
        </View>

        </View>
        <NavigationBar/>
      </View>
    );
  }
}


Challenges.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  price: React.PropTypes.string,
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF'
  },
  title: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  },
  titleInput: {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    backgroundColor: 'white'
  },

  buttonText: {
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    color: '#FFFFFF'
  },

  button: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 90,
    borderColor: '#7F8284',
    backgroundColor: '#AEB3B7',
    borderRadius: 10,
  }
});

export default Challenges;

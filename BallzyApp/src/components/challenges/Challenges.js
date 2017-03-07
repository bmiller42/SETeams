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
      <View style={{flex:1}}>
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

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
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
  title: {
    marginTop: 10,
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
    borderColor: 'black',
    borderWidth: 1,
    margin: 20,
    marginLeft: 20,
    fontSize: 20,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    height: 50,
  }
});

export default Challenges;

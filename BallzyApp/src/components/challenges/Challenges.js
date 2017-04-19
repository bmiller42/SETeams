import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import * as firebase from 'firebase';


import {
    View,
    Text,
    StyleSheet,
    TextInput,
    listView,
    TouchableHighlight,
    TouchableOpacity,
    ListView,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

var Firebase = require('firebase');

class Challenges extends React.Component {
  state = {
    search: '',
  };

  constructor(props) {
    super(props);

    const config = {
      apiKey: 'AIzaSyB3mAijmcJamuInn_lUk0vWxZhx7bHVjy0',
      authDomain: 'testballzy.firebaseapp.com',
      databaseURL: 'https://testballzy.firebaseio.com',
      storageBucket: 'testballzy.appspot.com'
    }

    const firebaseApp = firebase.initializeApp(config);
    const myFirebaseRef = firebaseApp.database().ref('list');

    this.itemsRef = myFirebaseRef.child('Challenges');

    this.state = {
      newChallenge: '',
      email: '',
      pass: '',
      title: '',
      chalArr: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
      todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row !=row2})
    };

    this.items = [];
    this.tempChallArray = [];

    //const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    //this.state = {
      //dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    //};

  }


  componentDidMount() {
    this.itemsRef.on('child_added', (dataSnapshot) => {
      this.items.push({id: dataSnapshot.key(), text: dataSnapshot.val()});
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      })
    });

    this.itemsRef.on("value", (allChallSnapshot) => {
      allChallSnapshot.forEach((challengeSnapshot) => {
        var chall = challengeSnapshot.val();
        this.tempChallArray.push(chall);
      });
      this.setState({
        chalArr: this.tempChallArray
      });
    });

    this.itemsRef.on('child_removed', (dataSnapshot) => {
      this.items = this.items.filter((x) => x.id !== dataSnapshot.key());
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      })
    });
  }

  addChallenge() {
    if (this.state.newChallenge !== '') {
      this.itemsRef.push({
        title: this.props.chaltitle,
        description: this.props.description,
        price: this.props.price
      });
      this.setState({
        newChallenge: ''
      });
    }
  }

  removeTodo(rowData) {
    this.itemsRef.child(rowData.id).remove();
  }

  renderRow(rowData) {
    return(
      <TouchableHighlight
        onPress={() => this.removeTodo(rowData)}>
        <View>
          <View style={styles.row}>
            <Text style={styles.todoText}>{rowData.text}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
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

          <View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({newChallenge: text})}
              value={this.state.newChallenge}
            />
            <TouchableHighlight
              onPress={() => this.addChallenge()}>
              <Text>Add</Text>
            </TouchableHighlight>
          </View>

          <View>
            <Text>
              {this.state.chalArr[0].title}
            </Text>
            <Text>
              {this.state.chalArr[0].description}
            </Text>
          </View>


          <Text style={styles.title}>
            Title: {this.props.chaltitle}
          </Text>
          <Text style={styles.title}>
            Description: {this.props.description}
          </Text>
          <Text style={styles.title}>
            Price: {this.props.price}
          </Text>

          <TouchableHighlight
            onPress={() => this.addChallenge()}>
            <Text style={styles.buttonText}>
              Create
            </Text>
          </TouchableHighlight>

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
  chaltitle: React.PropTypes.string,
  description: React.PropTypes.string,
  price: React.PropTypes.string,
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF'
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48afdb',
    borderRadius: 4,
    color: '#48BBEC'
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

import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';

class Payments extends React.Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 10}}>
          <Text>Hello from Payments!</Text>
	  <Button title="Pay with Card" style={styles.button1}>
	  </Button>
	  <Button title="Pay with Stripe" style={styles.button2}>
	  </Button>
        </View>
        <NavigationBar/>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  button1: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  button2: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 20,
  },
});
export default Payments;

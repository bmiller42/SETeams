import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {
  Text,
  View,
} from 'react-native';

class Payments extends React.Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 10}}>
          <Text>Hello from payments</Text>
	  <Button style={styles.button1}>
            "Pay with Card"
          </Button>
	  <Button style={styles.button2}>
	    "Pay with Stripe"
	  </Button>
        </View>
        <NavigationBar/>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  button1: {
    topMargin: 20
    marginLeft: 20,
    fontSize: 20,
  },
  button2: {
    marginTop: 40
    marginLeft: 20,
    fontSize: 20,
  },
});
export default Payments;

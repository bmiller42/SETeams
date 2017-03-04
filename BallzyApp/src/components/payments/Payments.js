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
        </View>
        <NavigationBar/>
      </View>
    );
  }

}

export default Payments;

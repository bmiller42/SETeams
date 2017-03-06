import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Alert,
  Navigator
} from 'react-native';

class Videos extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'white',}}>
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
      <Text>Hello from videos</Text>
      <View style={styles.button}>
       <Button onPress={onPress} title="Camera"/>
     </View>
     </View>
   </View>
    );
  }
}

const onPress = () => {
  Alert.alert('We are working on the upload of videos');
};

const styles = StyleSheet.create({
button: {
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  height: 50,
}
});
export default Videos;

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
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
      <View style={{flex: 2, flexDirection: 'column', alignItems: 'flex-start'}}>
      <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'flex-start'}}>
      <Text>Hello from videos</Text>
      <View style={styles.button}>
       <Button onPress={onPress} title="Camera"/>
     </View>
     </View>
     </View>
     <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
     <View style={styles.button2}>
       <Button onPress={onPress2} title="File"/>
     </View>
     </View>
   </View>
    );
  }
}

const onPress = () => {
  Alert.alert('We are working on the upload of videos');
};

const onPress2 = () => {
  Alert.alert('We are working on the upload of video files')
};

const styles = StyleSheet.create({
button: {
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
},
button2: {
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  height: 50,
}
});
export default Videos;

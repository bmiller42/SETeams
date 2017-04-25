import React from 'react';
import * as firebase from 'firebase';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';


export default class FirebaseDb extends React.Component {
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

  }


}

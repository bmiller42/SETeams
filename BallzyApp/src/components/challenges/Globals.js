import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyB3mAijmcJamuInn_lUk0vWxZhx7bHVjy0',
  authDomain: 'testballzy.firebaseapp.com',
  databaseURL: 'https://testballzy.firebaseio.com',
  storageBucket: 'testballzy.appspot.com'
}

var firebaseApp = firebase.initializeApp(config);
module.exports = firebaseApp.database().ref('list');

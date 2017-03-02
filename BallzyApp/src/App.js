import React from 'react';

import challenges from './components/challenges/challenges';
import chat from './components/chat/chat';
import payments from './components/payments/payments';
import videos from './components/videos/videos';

import {
    Router,
    Scene,
} from 'react-native-router-flux';

import {
  Platform
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: 64}}>
          <Scene key='challenges' component={challenges} title='challenges'/>
          <Scene key='chat' component={chat} title='chat'/>
          <Scene key='test' component={payments} title='payments'/>
          <Scene key='videos' component={videos} title='videos'/>
        </Scene>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react'

import { View, Text, NavigationExperimental } from 'react-native'


const {
  CardStack: NavigationCardStack,
} = NavigationExperimental


let styles = {};


const Challenges = () => (
  <View style={styles.container}>
    <Text>Hello from Challenges</Text>
  </View>
)

function reducer(state: object, action: string, route : object):
object {
  if (!state) {
    return {
      index: 0,
      routes: [{key: 'Challenges'}],
    };
  }
  
  switch (action) {
    case 'push': {
      const routes = state.routes.slice();
      routes.push(route);
      return {
        ...state
        index: routes.length - 1,
        routes,
      }
    }
    case 'pop': {
      if(state.idnex <= 0) return state
      const routes = state.routes.slice(0, -1);
      return {
        ...state,
        index: routes.length - 1,
        routes,
      }
    }
    default:
      return state
    }
  }
}
}

class BallzyNavCardstack extends Component {
  state = {navState: reducer() }
  
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Challenges':
        return <Challenges />
    }
  }
  
  render() {
    const { navState } = this.state
    return (
      <NavigationCardStack
        navigationState={navState}
        renderScene={this._renderScene}
      />
    )
  }
}

styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1

  },
}

export default BallzyNavCardstack;

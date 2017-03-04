import React from 'react';

import {
    View,
    Text,
} from 'react-native';

class New extends React.Component {
  render() {
    return (
      <View>
        <Text>
          You searched for: {this.props.search}
        </Text>
      </View>
    );
  }
}

New.defaultProps = {
  name: 'sky-diving'
};

New.propTypes = {
  search: React.PropTypes.string,
};

export default New;

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AlertIOS
} from 'react-native';
import Button from 'react-native-button';

import styles from './styles';

class About extends Component {

  _openAlert () {
    AlertIOS.alert('Hello', 'This is the About Screen :)');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          About!!
        </Text>
        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#ccc'}}
          style={{fontSize: 20, color: 'green'}}
          onPress={this._openAlert.bind(this)}
          >
          Say Hello
        </Button>
      </View>
    );
  }
}

module.exports = About;

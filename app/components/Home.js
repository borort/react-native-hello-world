import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';
import About from './About';
import styles from './styles';

class Home extends Component {

  _openAbout () {
    this.props.navigator.push({
        title: 'About Screen',
        component: About
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World!
        </Text>
        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#ccc'}}
          style={{fontSize: 20, color: 'green'}}
          onPress={this._openAbout.bind(this)}
          >
          Open About Screen
        </Button>
      </View>
    );
  }
}

module.exports = Home;

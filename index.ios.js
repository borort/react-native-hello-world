/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Home from './app/components/Home';


class HelloWorld extends Component {
  render() {
    return (
        <NavigatorIOS
            initialRoute={{
              component: Home,
              title: 'Home Screen',
            }}
            style={{flex: 1}}
        />
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

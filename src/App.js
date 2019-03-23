import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

import {apiConfig, enMessages} from 'cookbookery-shared';

apiConfig(axios, true);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Cookbookery</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

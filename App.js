/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import Form from './src/components/Form';

class App extends Component {
  render() {
    return (
      <View>
        <Header header="MyWallet" />
        <Form title="create an ether account" />
      </View>
    );
  }
}


export default App;

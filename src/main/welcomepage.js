import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import Form from '../components/Form';

class WelcomePage extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header header="MyWallet" />
        <Form title="create an ether account" nav={navigate} />
      </View>
    );
  }
}


export default WelcomePage;

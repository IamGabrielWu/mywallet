import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import Wallet from '../components/Wallet';

class WalletPage extends Component {
  static navigationOptions = {
    title: 'Wallet',
  };
  render() {
    console.log(this.props.navigation);
    const email = this.props.navigation.state.params.email;
    const address = this.props.navigation.state.params.address;
    console.log(email);
    console.log(address);
    return (
      <View>
        <Header header="MyWallet" />
        <Wallet email={email} address={address} />
      </View>
    );
  }
}


export default WalletPage;

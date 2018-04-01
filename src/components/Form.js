import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  Text
} from 'react-native';
import { Wallet } from 'ethers';

class Form extends Component<> {
  state={ email: '', password: '', address: '' };

  createAccount(email, password) {
    console.log(`${email}:${password}`);
    Wallet.fromBrainWallet(email, password).then((wallet) => {
      console.log(`Address: ${wallet.address}`);
      const address = wallet.address;
      this.setState({ address });
    });
  }
  render() {
    return (
      <View>
        <View>
          <Text>{this.props.title}</Text>
          <TextInput
          placeholder="type your email"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          />
          <TextInput
          placeholder="type your password"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          />
        </View>
        <View>
          <Button
              onPress={() => this.createAccount(this.state.email, this.state.password)}
              title="Create Account"
              color="#841584"
          />
        </View>
      </View>

    );
  }
}

export default Form;

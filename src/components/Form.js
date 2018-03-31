import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  Text
} from 'react-native';


class Form extends Component<> {
  state={ email: '', phonenumber: '' };

  createAccount(email, phonenumber) {
    console.log(email);
    console.log(phonenumber);
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
          placeholder="type your phone number"
          onChangeText={(phonenumber) => this.setState({ phonenumber })}
          value={this.state.phonenumber}
          />
        </View>
        <View>
          <Button
              onPress={() => this.createAccount(this.state.email, this.state.phonenumber)}
              title="Create Account"
              color="#841584"
          />
        </View>
      </View>

    );
  }
}

export default Form;

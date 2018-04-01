import React from 'react';
import {
  View,
  Text
} from 'react-native';

const Wallet = (props) => (

    <View style={styles.walletStyle}>
      <Text style={styles.textStyle}>{props.email}</Text>
      <Text style={styles.textStyle}>{props.address}</Text>
    </View>
);


const styles = {
    walletStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      fontSize: 10,
    }
  };

export default Wallet;

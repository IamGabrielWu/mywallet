import React from 'react';
import {
  View,
  Text
} from 'react-native';

const Header = (props) => (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{props.header}</Text>
    </View>
);

const styles = {
    headerStyle: {
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
      fontSize: 20,
    }
  };

export default Header;

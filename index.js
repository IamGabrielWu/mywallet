import { AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import WelcomePage from './src/main/welcomepage';
import WalletPage from './src/main/walletpage';


const App = StackNavigator({
  Home: { screen: WelcomePage },
  Wallet: { screen: WalletPage },
});

AppRegistry.registerComponent('mywallet', () => App);

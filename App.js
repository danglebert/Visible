import { Navigation } from 'react-native-navigation';
import Home from './src/components/home/home';
import Results from './src/components/results/results';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent('Visible.Home', () => Home, store, Provider);
Navigation.registerComponent('Visible.Results', () => Results, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Visible.Home',
    title: 'Home'
  }
});

import { Navigation } from 'react-native-navigation';
import Home from './src/components/home';
import Results from './src/components/results/results';

Navigation.registerComponent('Visible.Home', () => Home);
Navigation.registerComponent('Visible.Results', () => Results);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Visible.Home',
    title: 'Home'
  }
});

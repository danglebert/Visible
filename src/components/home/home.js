import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
import backgroundImg from '../../assets/purple-back.jpg';
import WelcomeLogo from './welcomeLogo';
import SearchInput from './searchInput';

const Home = ({ navigator }) => (
  <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <WelcomeLogo />
      <SearchInput navigator={navigator} />
    </KeyboardAvoidingView>
  </ImageBackground>
);

export default Home;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});

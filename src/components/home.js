import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  TextInput
} from 'react-native';
import MainText from '../components/ui/MainText';
import backgroundImg from '../assets/purple-back.jpg';
import teleIcon from '../assets/tv.png';

export default class Home extends Component {
  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.logoWelcome}>
            <Image style={styles.tvIcon} source={teleIcon} />
            <MainText style={styles.mainText}>Welcome to Visible</MainText>
          </View>
          <View>
            <MainText>Placeholder</MainText>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  logoWelcome: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tvIcon: {
    height: 120,
    width: 120
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

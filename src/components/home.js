import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  Animated,
  TextInput
} from 'react-native';
import MainText from '../components/ui/MainText';
import backgroundImg from '../assets/purple-back.jpg';
import teleIcon from '../assets/tv.png';

export default class Home extends Component {
  state = {
    logoAnim: new Animated.Value(0),
    inputAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.logoAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();

    Animated.timing(this.state.inputAnim, {
      toValue: 1,
      duration: 2000,
      delay: 2000,
      useNativeDriver: true
    }).start();
  }

  render() {
    const { logoAnim, inputAnim } = this.state;
    return (
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container}>
          <Animated.View style={[styles.logoWelcome, { opacity: logoAnim }]}>
            <Image style={styles.tvIcon} source={teleIcon} />
            <MainText style={styles.mainText}>Welcome to Visible</MainText>
          </Animated.View>
          <Animated.View style={{ opacity: inputAnim }}>
            <MainText>Placeholder</MainText>
          </Animated.View>
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

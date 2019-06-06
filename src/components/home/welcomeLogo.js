import React, { Component } from 'react';
import { Animated, Image, StyleSheet } from 'react-native';
import MainText from '../ui/MainText';
import teleIcon from '../../assets/tv-white.png';

export default class WelcomeLogo extends Component {
  state = {
    animOpacity: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.animOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  }

  render() {
    const { animOpacity } = this.state;
    return (
      <Animated.View style={[styles.logoWelcome, { opacity: animOpacity }]}>
        <Image style={styles.tvIcon} source={teleIcon} />
        <MainText style={styles.mainText}>Welcome to Visible</MainText>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  logoWelcome: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tvIcon: {
    height: 150,
    width: 150
  },
  mainText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8
  }
});

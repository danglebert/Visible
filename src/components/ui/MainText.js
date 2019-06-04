import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MainText = props => (
  <Text style={[styles.mainText, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
  mainText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: 'DINAlternate-Bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
});

export default MainText;

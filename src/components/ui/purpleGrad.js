import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const gradColor = ['#6700FC', '#192f6a'];

const PurpleGrad = props => (
  <LinearGradient colors={gradColor} style={props.style}>
    {props.children}
  </LinearGradient>
);

export default PurpleGrad;

import React, { Component } from 'react';
import MainText from '../ui/MainText';
import { View, TouchableOpacity, Image } from 'react-native';

class NoResults extends Component {
  render() {
    return <MainText>No Results Match Your Query :(</MainText>;
  }
}

export default NoResults;

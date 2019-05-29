import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import Home from './src/components/home';

Navigation.registerComponent('Visible.Home', () => Home);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Visible.Home',
    title: 'Home'
  }
});

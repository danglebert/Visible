import React, { Component } from 'react';
import MainText from '../ui/MainText';
import { TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class NoResults extends Component {
  handleRedirect = () => {
    this.props.navigator.pop();
  };

  render() {
    const gradColor = ['#03045B', '#242461', '#2D2C6F', '#8905F7', '#7A2850'];
    return (
      <LinearGradient colors={gradColor} style={styles.container}>
        <MainText>No Results Match Your Query</MainText>
        <TouchableOpacity onPress={this.handleRedirect}>
          <MainText>Redirect to main page</MainText>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default NoResults;

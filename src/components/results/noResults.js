import React, { Component } from 'react';
import MainText from '../ui/MainText';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tvOff from '../../assets/tv-off-white.png';

class NoResults extends Component {
  handleRedirect = () => {
    this.props.navigator.pop();
  };

  render() {
    const backColor = ['#03045B', '#242461', '#2D2C6F', '#8905F7', '#7A2850'];
    const btnColor = ['#6700FC', '#192f6a'];
    return (
      <LinearGradient colors={backColor} style={styles.container}>
        <Image source={tvOff} style={styles.icon} />
        <View style={styles.textAndBtn}>
          <MainText style={{ fontSize: 20 }}>
            No Results Match Your Query
          </MainText>
          <LinearGradient style={styles.grad} colors={btnColor}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleRedirect}
            >
              <MainText>Return to Search</MainText>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    marginBottom: 20
  },
  textAndBtn: {
    height: '25%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  grad: {
    width: 175,
    height: 40,
    borderWidth: 1,
    borderRadius: 50
  },
  button: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default NoResults;

import React, { Component } from 'react';
import MainText from '../ui/MainText';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tvOff from '../../assets/tv-off-white.png';
import PurpleGrad from '../ui/purpleGrad';

class NoResults extends Component {
  handleRedirect = () => {
    this.props.navigator.pop();
  };

  render() {
    const backColor = ['#03045B', '#242461', '#2D2C6F', '#8905F7', '#7A2850'];
    return (
      <LinearGradient colors={backColor} style={styles.container}>
        <Image source={tvOff} style={styles.icon} />
        <View style={styles.textAndBtn}>
          <MainText style={{ fontSize: 20 }}>
            No Results Match Your Query
          </MainText>
          <PurpleGrad style={styles.grad}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleRedirect}
            >
              <MainText>Return to Search</MainText>
            </TouchableOpacity>
          </PurpleGrad>
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
    marginTop: 20,
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
    borderWidth: 0.3,
    borderRadius: 50,
    borderColor: 'black'
  },
  button: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default NoResults;

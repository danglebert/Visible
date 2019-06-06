import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainText from '../ui/MainText';
import { selectCountry } from '../../store/actions/media';
import { connect } from 'react-redux';

class CountrySelect extends Component {
  handlePress = country => {
    this.props.setCountry(country);
  };

  render() {
    const btnColor = ['#6700FC', '#192f6a'];
    const { country } = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient
          style={[styles.usBtnContainer, country !== 'us' && { opacity: 0.6 }]}
          colors={btnColor}
        >
          <TouchableOpacity
            style={styles.usBtn}
            onPress={() => this.handlePress('us')}
          >
            <MainText>US</MainText>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          style={[styles.ukBtnContainer, country !== 'uk' && { opacity: 0.6 }]}
          colors={btnColor}
        >
          <TouchableOpacity
            style={styles.ukBtn}
            onPress={() => this.handlePress('uk')}
          >
            <MainText>UK</MainText>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const mapState = state => ({
  country: state.media.country
});

const mapDispatch = dispatch => ({
  setCountry: country => dispatch(selectCountry(country))
});

export default connect(
  mapState,
  mapDispatch
)(CountrySelect);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 40
  },
  usBtnContainer: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent: 'center',
    height: 30,
    width: 50
  },
  usBtn: {
    borderWidth: 1,
    borderColor: '#D905DC',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ukBtnContainer: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    height: 30,
    width: 50
  },
  ukBtn: {
    borderWidth: 1,
    borderColor: '#D905DC',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

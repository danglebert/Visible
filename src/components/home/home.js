import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  Animated,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainText from '../ui/MainText';
import backgroundImg from '../../assets/purple-back.jpg';
import teleIcon from '../../assets/tv-white.png';
import { fetchMedia } from '../../store/actions/media';
import CountrySelect from './countrySelect';

class Home extends Component {
  state = {
    logoAnim: new Animated.Value(0),
    inputAnim: new Animated.Value(0),
    inputVal: '',
    validSearch: false
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

  inputChangeHandler = text => {
    this.setState({
      ...this.state,
      inputVal: text,
      validSearch: text.trim() !== '' ? true : false
    });
  };

  handleSubmit = () => {
    this.props.fetchMedia(this.state.inputVal, this.props.country);
    this.props.navigator.push({
      screen: 'Visible.Results',
      title: 'Search Results',
      passProps: {
        navigator: this.props.navigator
      },
      animated: true
    });
  };

  render() {
    const { logoAnim, inputAnim, inputVal, validSearch } = this.state;
    const btnColor = ['#6700FC', '#192f6a'];
    return (
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Animated.View style={[styles.logoWelcome, { opacity: logoAnim }]}>
            <Image style={styles.tvIcon} source={teleIcon} />
            <MainText style={styles.mainText}>Welcome to Visible</MainText>
          </Animated.View>
          <Animated.View
            style={[styles.searchContainer, { opacity: inputAnim }]}
          >
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="What do you want to watch?"
                value={inputVal}
                onChangeText={this.inputChangeHandler}
              />
              <LinearGradient
                style={[styles.btnContainer, !validSearch && { opacity: 0.8 }]}
                colors={btnColor}
              >
                <TouchableOpacity
                  disabled={!validSearch}
                  style={styles.btn}
                  onPress={this.handleSubmit}
                >
                  <MainText>Search</MainText>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <CountrySelect />
          </Animated.View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const mapState = state => ({
  country: state.media.country
});

const mapDispatch = dispatch => ({
  fetchMedia: (query, country) => dispatch(fetchMedia(query, country))
});

export default connect(
  mapState,
  mapDispatch
)(Home);

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
  },
  searchContainer: {
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  input: {
    width: 250,
    fontFamily: 'DINAlternate-Bold',
    backgroundColor: 'white',
    color: 'black',
    borderColor: '#D905DC',
    borderWidth: 1,
    padding: 7,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    height: 30
  },
  btnContainer: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    width: 50,
    height: 30
  },
  btn: {
    borderWidth: 1,
    borderColor: '#D905DC',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3
  }
});

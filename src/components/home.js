import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  Animated,
  TextInput,
  TouchableOpacity
} from 'react-native';
import MainText from '../components/ui/MainText';
import backgroundImg from '../assets/purple-back.jpg';
import teleIcon from '../assets/tv-white.png';
import { fetchMedia } from '../store/actions/media';

class Home extends Component {
  state = {
    logoAnim: new Animated.Value(0),
    inputAnim: new Animated.Value(0),
    inputVal: ''
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
    this.setState({ ...this.state, inputVal: text });
  };

  handleSubmit = () => {
    this.props.fetchMedia(this.state.inputVal);
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
    const { logoAnim, inputAnim, inputVal } = this.state;
    return (
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Animated.View style={[styles.logoWelcome, { opacity: logoAnim }]}>
            <Image style={styles.tvIcon} source={teleIcon} />
            <MainText style={styles.mainText}>Welcome to Visible</MainText>
          </Animated.View>
          <Animated.View
            style={[styles.inputContainer, { opacity: inputAnim }]}
          >
            <TextInput
              style={styles.input}
              placeholder="What do you want to watch?"
              value={inputVal}
              onChangeText={this.inputChangeHandler}
            />
            <TouchableOpacity
              style={styles.searchBtn}
              onPress={this.handleSubmit}
            >
              <MainText>Search</MainText>
            </TouchableOpacity>
          </Animated.View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const mapDispatch = dispatch => ({
  fetchMedia: query => dispatch(fetchMedia(query))
});

export default connect(
  null,
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
  inputContainer: {
    flexDirection: 'row'
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
    borderBottomLeftRadius: 50
  },
  searchBtn: {
    borderWidth: 1,
    borderColor: '#D905DC',
    backgroundColor: '#512E80',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    color: 'white',
    width: 50,
    padding: 3
  }
});

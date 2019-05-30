import React, { Component } from 'react';
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
import teleIcon from '../assets/tv.png';

export default class Home extends Component {
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
    this.props.navigator.push({
      screen: 'Visible.Results',
      title: 'Search Results',
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
    height: 120,
    width: 120
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  inputContainer: {
    flexDirection: 'row'
  },
  input: {
    width: 250,
    fontFamily: 'DINAlternate-Bold',
    backgroundColor: '#A582B6',
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
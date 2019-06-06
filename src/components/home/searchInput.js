import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import MainText from '../ui/MainText';
import PurpleGrad from '../ui/purpleGrad';
import CountrySelect from './countrySelect';
import { fetchMedia } from '../../store/actions/media';

class SearchInput extends Component {
  state = {
    animOpacity: new Animated.Value(0),
    inputVal: '',
    validSearch: false
  };

  componentDidMount() {
    Animated.timing(this.state.animOpacity, {
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
    const { animOpacity, inputVal, validSearch } = this.state;
    return (
      <Animated.View style={[styles.searchContainer, { opacity: animOpacity }]}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="What do you want to watch?"
            value={inputVal}
            onChangeText={this.inputChangeHandler}
          />
          <PurpleGrad
            style={[styles.btnContainer, !validSearch && { opacity: 0.6 }]}
          >
            <TouchableOpacity
              disabled={!validSearch}
              style={styles.btn}
              onPress={this.handleSubmit}
            >
              <MainText>Search</MainText>
            </TouchableOpacity>
          </PurpleGrad>
        </View>
        <CountrySelect />
      </Animated.View>
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
)(SearchInput);

const styles = StyleSheet.create({
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

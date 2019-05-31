import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import ListItem from './listItem';
import SingleMedia from '../singleMedia/singleMedia';
import backgroundImg from '../../assets/results-background.jpg';
import { selectMedia } from '../../store/actions/media';

class Results extends Component {
  handleClick = media => {
    this.props.selectMedia(media);
  };

  render() {
    const { media } = this.props;
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <SingleMedia />
        <ScrollView>
          {media.map(media => (
            <ListItem
              handleClick={this.handleClick}
              key={media.id}
              media={media}
            />
          ))}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapState = state => ({
  media: state.media.media
});

const mapDispatch = dispatch => ({
  selectMedia: media => dispatch(selectMedia(media))
});

export default connect(
  mapState,
  mapDispatch
)(Results);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});

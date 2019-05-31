import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import ListItem from './listItem';
import backgroundImg from '../../assets/results-background.jpg';

class Results extends Component {
  render() {
    const { media } = this.props;
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <ScrollView>
          {media.map(media => (
            <ListItem key={media.id} media={media} />
          ))}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapState = state => ({
  media: state.media.media
});

export default connect(mapState)(Results);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});

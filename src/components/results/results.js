import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ListItem from './listItem';
import SingleMedia from '../singleMedia/singleMedia';
import { selectMedia } from '../../store/actions/media';
import NoResults from './noResults';

class Results extends Component {
  handleClick = media => {
    this.props.selectMedia(media);
  };

  render() {
    const { media } = this.props;
    const gradColor = ['#03045B', '#242461', '#2D2C6F', '#8905F7', '#7A2850'];
    return media.length ? (
      <LinearGradient colors={gradColor} style={styles.container}>
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
      </LinearGradient>
    ) : (
      <NoResults />
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

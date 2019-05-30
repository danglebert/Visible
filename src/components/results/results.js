import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, StyleSheet } from 'react-native';
import ListItem from './listItem';

class Results extends Component {
  render() {
    const { media } = this.props;
    return (
      <View styles={styles.container}>
        <ScrollView>
          {media.map(media => (
            <ListItem key={media.id} media={media} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapState = state => ({
  media: state.media.media
});

export default connect(mapState)(Results);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

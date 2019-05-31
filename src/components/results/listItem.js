import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import MainText from '../../components/ui/MainText';

export default class ListItem extends Component {
  render() {
    const { media } = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <Image source={{ uri: media.picture }} style={styles.image} />
        <MainText style={styles.text}>{media.name}</MainText>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    borderBottomWidth: 0.25,
    borderTopWidth: 0.25,
    borderColor: '#000',
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6700FC'
  },
  image: {
    width: '25%',
    height: '95%',
    marginRight: 15
  },
  text: {
    fontSize: 18,
    width: '70%'
  }
});

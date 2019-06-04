import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import MainText from '../../components/ui/MainText';
import LinearGradient from 'react-native-linear-gradient';

export default class ListItem extends Component {
  render() {
    const { media, handleClick } = this.props;
    const gradColor = ['#6700FC', '#192f6a'];
    return (
      <LinearGradient colors={gradColor} style={styles.container}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => handleClick(media)}
        >
          <Image source={{ uri: media.picture }} style={styles.image} />
          <MainText style={styles.text}>{media.name}</MainText>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    marginTop: 5,
    alignItems: 'center'
  },
  touch: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#04015D'
  },
  image: {
    width: '30%',
    height: '99%',
    marginRight: 15
  },
  text: {
    fontSize: 22,
    width: '65%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1
  }
});

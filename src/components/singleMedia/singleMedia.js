import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MainText from '../../components/ui/MainText';
import LocationList from './locationList';
import { selectMedia } from '../../store/actions/media';

class SingleMedia extends Component {
  handleClose = () => {
    this.props.deselectMedia();
  };

  render() {
    const { selectedMedia } = this.props;
    const gradColor = ['#77295D', '#8905F7', '#6C16E8', '#4916E8', '#192f6a'];
    return (
      <Modal visible={!!selectedMedia} animationType="slide">
        <LinearGradient colors={gradColor} style={styles.gradient}>
          <View style={styles.container}>
            <TouchableOpacity
              style={{ alignSelf: 'flex-end' }}
              onPress={this.handleClose}
            >
              <View>
                <Icon name="ios-close" size={40} color="purple" />
              </View>
            </TouchableOpacity>
            <Image
              source={{ uri: selectedMedia.picture }}
              style={styles.image}
            />
            <MainText style={styles.name}>{selectedMedia.name}</MainText>
            <LocationList locations={selectedMedia.locations} />
          </View>
        </LinearGradient>
      </Modal>
    );
  }
}

const mapState = state => ({
  selectedMedia: state.media.selectedMedia
});

const mapDispatch = dispatch => ({
  deselectMedia: () => dispatch(selectMedia(''))
});

export default connect(
  mapState,
  mapDispatch
)(SingleMedia);

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    width: '95%',
    alignItems: 'center',
    marginTop: 35,
    padding: 10
  },
  image: {
    height: 250,
    width: 300,
    margin: 5,
    borderRadius: 10
  },
  name: {
    fontSize: 30,
    textTransform: 'uppercase'
  }
});

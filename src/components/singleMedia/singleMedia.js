import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Modal, StyleSheet, Button } from 'react-native';
import MainText from '../../components/ui/MainText';
import { selectMedia } from '../../store/actions/media';

class SingleMedia extends Component {
  handleClose = () => {
    this.props.deselectMedia();
  };

  render() {
    const { selectedMedia } = this.props;
    return (
      <Modal visible={!!selectedMedia} animationType="slide">
        <View style={styles.container}>
          <MainText>Placeholder</MainText>
          <Button title="Close" color="red" onPress={this.handleClose} />
        </View>
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
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 50
  }
});

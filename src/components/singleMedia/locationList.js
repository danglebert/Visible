import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Linking,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MainText from '../ui/MainText';

class LocationList extends Component {
  render() {
    const { locations } = this.props;
    return (
      <ScrollView style={styles.container}>
        <MainText style={styles.avail}>Available On</MainText>
        {locations.map(loc => (
          <View key={loc.id} style={styles.location}>
            <MainText style={styles.locName}>{loc.display_name}</MainText>
            <TouchableOpacity onPress={() => Linking.openURL(loc.url)}>
              <Icon name="ios-link" size={30} color="black" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default LocationList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '95%'
  },
  avail: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    textDecorationLine: 'underline',
    textDecorationStyle: 'double'
  },
  location: {
    flexDirection: 'row',
    height: 75,
    borderTopWidth: 0.25,
    borderBottomWidth: 0.25,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  locName: {
    fontSize: 20
  },
  image: {
    height: '50%',
    width: 90
  }
});

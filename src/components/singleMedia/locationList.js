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
    const locationSet = new Set();
    const filteredLocs = [];

    for (let loc of locations) {
      if (!locationSet.has(loc.display_name)) {
        locationSet.add(loc.display_name);
        filteredLocs.push(loc);
      }
    }

    return (
      <ScrollView style={styles.container}>
        <MainText style={styles.avail}>Available On</MainText>
        {filteredLocs.map(loc => (
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
    textDecorationLine: 'underline'
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

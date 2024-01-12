import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MapView from 'react-native-maps';
import { useState } from 'react';

export default function MainScreen() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 41.46397,
    longitude: 31.797772,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <SafeAreaView style={styles.container}>
      {/*  <View style={styles.searchBar}>
        <TextInput style={styles.textInput} placeholder='Find a location' />
        <Pressable style={styles.iconButton}>
          <Ionicons name='search' size={16} color='black' />
        </Pressable>
      </View> 
      */}
      <MapView style={styles.map} region={mapRegion} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchBar: {
    width: 350,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 50,
    marginBottom: 10,
  },
  textInput: {
    fontSize: 20,
    paddingLeft: 30,
    fontWeight: 'bold',
  },
  iconButton: {
    paddingLeft: 140,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

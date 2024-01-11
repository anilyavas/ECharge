import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MapView from 'react-native-maps';

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput style={styles.textInput} placeholder='Find a location' />
        <Pressable style={styles.iconButton}>
          <Ionicons name='search' size={16} color='black' />
        </Pressable>
      </View>
      <MapView style={styles.map} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    height: '100%',
    width: '100%',
  },
});

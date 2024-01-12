import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function OnProgressScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name='exclamation-circle' color={'grey'} size={40} />
      <Text style={styles.text}>There is no activity.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
  },
});

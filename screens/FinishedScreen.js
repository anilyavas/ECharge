import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function FinishedScreen() {
  return (
    <View style={styles.body}>
      <View style={styles.card}>
        <FontAwesome5
          style={styles.icon}
          name='receipt'
          color={'grey'}
          size={60}
        />
        <View style={{ flexDirection: 'column' }}>
          <View style={styles.informationContainer}>
            <Text style={styles.information}>12/11/2023</Text>
            <Text>52m</Text>
          </View>
          <View style={styles.informationPlace}>
            <Text style={styles.text}>Istanbul-Ankara North Way</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', marginRight: 5 }}>
          <Text style={styles.type}>DC</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    margin: 8,
    borderColor: 'grey',
    borderWidth: 1,
  },
  icon: {
    padding: 10,
  },
  information: {
    paddingLeft: 30,
    paddingRight: 50,
    fontWeight: 'bold',
  },
  informationContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  informationPlace: {
    paddingLeft: 40,
    flexDirection: 'row',
    paddingTop: 10,
  },
  text: {
    fontWeight: 'bold',
    paddingRight: 70,
  },
  type: {
    backgroundColor: 'lightgrey',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

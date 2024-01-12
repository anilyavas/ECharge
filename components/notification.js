import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';

const chargingStatus = [
  {
    id: 1,
    description:
      'Your charging progress has been completed. Please unplug your car for other drivers.',
  },
  {
    id: 2,
    description:
      'Your battery has reached to 80%, be ready for unplug your car.',
  },
  {
    id: 3,
    description: 'Discount for all the stations today!',
  },
  {
    id: 4,
    description: 'Your payment has successfully completed.',
  },
  {
    id: 5,
    description:
      'Your battery has reached to 80%, unplugging your car is recommended for your battery health.',
  },
  {
    id: 6,
    description: '%50 Discount for all the stations today!',
  },
  {
    id: 7,
    description: 'New payment method is added.',
  },
];

export default function Notification() {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={chargingStatus}
      renderItem={({ item }) => (
        <>
          <View style={styles.body}>
            <View style={{ justifyContent: 'center', paddingRight: 3 }}>
              <Entypo name='battery' color={'black'} size={40} />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        </>
      )}
    />
  );
}
const styles = StyleSheet.create({
  body: {
    width: 400,
    height: 100,
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    flexDirection: 'row',
  },
  description: {
    width: 300,
    fontSize: 16,
    padding: 5,
    marginLeft: 10,
  },
});

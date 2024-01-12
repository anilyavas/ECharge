import { View, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Notification from '../components/notification';

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name='notifications' color={'black'} size={50} />
      </View>
      <Notification />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

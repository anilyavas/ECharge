import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InProgressScreen from './InProgressScreen';
import FinishedScreen from './FinishedScreen';

const Tab = createMaterialTopTabNavigator();
export default function SessionsScreen() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarContentContainerStyle: { paddingTop: 50 } }}
    >
      <Tab.Screen name='In Progress' component={InProgressScreen} />
      <Tab.Screen name='Finished' component={FinishedScreen} />
      {/*  
        <View style={styles.menu}>
          <Text style={styles.title}>Sessions</Text>
        </View>
        <View style={styles.sessionsContainer}></View>
      
      */}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  menu: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

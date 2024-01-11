import MainScreen from './screens/MainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SessionsScreen from './screens/SessionsScreen';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Main' component={MainScreen} />
        <Tab.Screen name='Notifications' component={NotificationsScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
        <Tab.Screen name='Sessions' component={SessionsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

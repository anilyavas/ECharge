import MainScreen from './screens/MainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from './screens/NotificationsScreen';
import SessionsScreen from './screens/SessionsScreen';
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: 'gainsboro',
        }}
      >
        <Tab.Screen
          name='Main'
          component={MainScreen}
          options={{
            tabBarIcon: () => <Entypo name='home' size={20} color={'black'} />,
          }}
        />
        <Tab.Screen
          name='Notifications'
          component={NotificationsScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name='notifications' size={20} color={'black'} />
            ),
          }}
        />
        <Tab.Screen
          name='Sessions'
          component={SessionsScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name='receipt' color={'black'} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

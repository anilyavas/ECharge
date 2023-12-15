import { SafeAreaView } from 'react-native';
import MainScreen from './screens/MainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="MainScreen" component={MainScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

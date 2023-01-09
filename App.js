import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './screens/LogInScreen';
import HomeScreen from './screens/HomeScreen';
import AccelerometerScreen from './screens/Accelerometer';
import { LogBox } from 'react-native';


const Stack = createNativeStackNavigator()
LogBox.ignoreAllLogs();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LogInScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/>
        <Stack.Screen name="AccelerometerScreen" component={AccelerometerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



import React from 'react';

import {
  SafeAreaView
} from 'react-native';
import Splash_Screen from './src/pages/Splash_Screen';
import On_BordingScreen01 from './src/pages/On_BordingScreen01';
import Box from './src/pages/box';
import On_BordingScreen02 from './src/pages/On_BordingScreen02';
import On_BordingScreen03 from './src/pages/On_BordingScreen03';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function App(): React.JSX.Element {
 
  const Stack = createNativeStackNavigator();


  return (
    <SafeAreaView style={{ flex: 1}}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="On_BordingScreen01">
    
        <Stack.Screen  options={{ headerShown:false}} name="On_BordingScreen01" component={On_BordingScreen01} />
        <Stack.Screen  options={{ headerShown:false}} name="On_BordingScreen02" component={On_BordingScreen02} />
        <Stack.Screen  options={{ headerShown:false}} name="On_BordingScreen03" component={On_BordingScreen03} />
        <Stack.Screen  options={{ headerShown:false}} name="box" component={Box} />
      </Stack.Navigator>
    </NavigationContainer>
 
    </SafeAreaView>
  );
}


export default App;

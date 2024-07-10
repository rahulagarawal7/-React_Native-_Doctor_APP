import React from 'react';

import {SafeAreaView} from 'react-native';



import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnBoardingScreen03 from './src/screens/onBoarding/onBoardingScreen03';
import OnBoardingScreen02 from './src/screens/onBoarding/onBoardingScreen02';
import OnBoardingScreen01 from './src/screens/onBoarding/onBoardingScreen01';


import BottomTab from './src/screens/bottomTab/bottomTabBar';

import SplashScreen from './src/screens/SplashScreen';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splachScreen">
    
          <Stack.Screen
            options={{headerShown: false}}
            name="OnBoardingScreen01"
            component={OnBoardingScreen01}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="OnBoardingScreen02"
            component={OnBoardingScreen02}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="OnBoardingScreen03"
            component={OnBoardingScreen03}
          />
              <Stack.Screen
            options={{headerShown: false}}
            name="splachScreen"
             component={SplashScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="bottomTabBar"
            component={BottomTab}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen03 from './src/screens/onBoarding/onBoardingScreen03';
import OnBoardingScreen02 from './src/screens/onBoarding/onBoardingScreen02';
import OnBoardingScreen01 from './src/screens/onBoarding/onBoardingScreen01';
import BottomTab from './src/screens/bottomTab/bottomTabBar';
import SplashScreen from './src/screens/splashScreen';
import SelectTimeScreen from './src/screens/selectTimeScreen';
import FindDoctorCard from './src/components/findDoctorCard';
import FindDoctor from './src/screens/findDoctor';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="splashScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="OnBoardingScreen01"
            component={OnBoardingScreen01}
          />
          <Stack.Screen
            name="OnBoardingScreen02"
            component={OnBoardingScreen02}
          />
          <Stack.Screen
            name="OnBoardingScreen03"
            component={OnBoardingScreen03}
          />
          <Stack.Screen name="splashScreen" component={SplashScreen} />
          <Stack.Screen name="bottomTabBar" component={BottomTab} />
          <Stack.Screen name="selectTimeScreen" component={SelectTimeScreen} />
          <Stack.Screen name="findDoctor" component={FindDoctor} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

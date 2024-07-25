import './gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen03 from './src/screens/onBoarding/onBoardingScreen03';
import OnBoardingScreen02 from './src/screens/onBoarding/onBoardingScreen02';
import OnBoardingScreen01 from './src/screens/onBoarding/onBoardingScreen01';
import BottomTab from './src/navigation/bottomTabBar';
import PopularDoctors from './src/screens/popularDoctorScreens/popularDoctor';
import SelectTimeScreen from './src/screens/searchDoctor/selectTimeScreen';
import FindDoctor from './src/screens/searchDoctor/findDoctor';
import FeatureDoctors from './src/screens/featureDoctorScreens/featureDoctors';
import DoctorDetailsScreen from './src/screens/doctorDetailsScreen';
import AppointmentFirst from './src/screens/appointmentScreens/appointmentFirst';
import AppointmentSecond from './src/screens/appointmentScreens/appointmentSecond';
import DoctorListType from './src/screens/doctorListType';
import SplashScreen from './src/screens/SplashScreen';
import SignUpScreen from './src/screens/signUpScreen';
import LoginScreen from './src/screens/loginScreen';
import DrawerNavigation from './src/navigation/drawerNavigation';

function App() {
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
          <Stack.Screen name="drawerNavigation" component={DrawerNavigation} />
          <Stack.Screen name="selectTimeScreen" component={SelectTimeScreen} />
          <Stack.Screen name="findDoctor" component={FindDoctor} />
          <Stack.Screen name="popularDoctors" component={PopularDoctors} />
          <Stack.Screen name="featureDoctors" component={FeatureDoctors} />
          <Stack.Screen
            name="doctorDetailsScreen"
            component={DoctorDetailsScreen}
          />
          <Stack.Screen name="appointmentFirst" component={AppointmentFirst} />
          <Stack.Screen
            name="appointmentSecond"
            component={AppointmentSecond}
          />
          <Stack.Screen name="doctorListType" component={DoctorListType} />
          <Stack.Screen name="signUpScreen" component={SignUpScreen} />
          <Stack.Screen name="loginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

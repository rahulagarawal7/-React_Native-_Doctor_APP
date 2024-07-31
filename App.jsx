import './gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabBar} from './src/navigation/index';

import {
  LoginScreen,
  UserProfile,
  SignUpScreen,
  SplashScreen,
  OnBoardingScreen01,
  OnBoardingScreen02,
  OnBoardingScreen03,
  AppointmentFirst,
  AppointmentSecond,
  AddRecords,
  FeatureDoctors,
  PopularDoctors,
  SelectTimeScreen,
  FindDoctor,
  DoctorDetailsScreen,
  DoctorListType,
} from './src/screens/index';
import {DrawerNavigation} from './src/navigation/index';

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
          <Stack.Screen name="bottomTabBar" component={BottomTabBar} />
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
          <Stack.Screen name="addRecords" component={AddRecords} />
          <Stack.Screen name="userProfile" component={UserProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

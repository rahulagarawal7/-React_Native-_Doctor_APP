import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home';
import FindDoctor from '../findDoctor';
import ChatScreen from '../chatScreen';
import Book from '../book';
import homeIcon from '../../../src/assets/icons/Group.png';
import bookIcon from '../../../src/assets/icons/Group(2).png';
import findIcon from '../../../src/assets/icons/Group(1).png';
import chatIcon from '../../../src/assets/icons/Vector.png';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 74,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
      initialRouteName="home">
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <Image source={homeIcon} />;
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="findDoctor"
        component={FindDoctor}
        options={{
          tabBarIcon: () => {
            return <Image source={findIcon} />;
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
        <Tab.Screen
        name="book"
        component={Book}
        options={{
          tabBarIcon: () => {
            return <Image source={bookIcon} />;
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="chatScreen"
        component={ChatScreen}
        options={{
          tabBarIcon: () => {
            return <Image source={chatIcon} />;
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    
    </Tab.Navigator>
  );
};

export default BottomTab;

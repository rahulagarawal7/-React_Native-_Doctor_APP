import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import homeIcon from '../../src/assets/icons/homeIcon.png';
import bookIcon from '../../src/assets/icons/bookIcon.png';
import favIcon from '../../src/assets/icons/favoriteIcon.png';
import chatIcon from '../../src/assets/icons/chatIcon.png';
import {Image, StyleSheet, View} from 'react-native';
import Home from '../screens/home';

import color from '../commons/colors';

import FavoriteDoctor from '../screens/favoriteDoctor';
import Book from '../screens/book';
import ChatScreen from '../screens/chatScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabNavigatorStyle,
      }}
      initialRouteName="home">
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused && styles.circle}>
                <Image
                  source={homeIcon}
                  style={focused && styles.focusedStyle}
                />
              </View>
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="favoriteDoctor"
        component={FavoriteDoctor}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused && styles.circle}>
                <Image
                  source={favIcon}
                  style={focused && styles.focusedStyle}
                />
              </View>
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="book"
        component={Book}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused && styles.circle}>
                <Image
                  source={bookIcon}
                  style={focused && styles.focusedStyle}
                />
              </View>
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="chatScreen"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused && styles.circle}>
                <Image
                  source={chatIcon}
                  style={focused && styles.focusedStyle}
                />
              </View>
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabNavigatorStyle: {
    height: 74,
    backgroundColor: color.commonTextColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  focusedStyle: {
    tintColor: color.commonTextColor,
  },
  circle: {
    height: 48,
    width: 48,
    borderRadius: 48,
    backgroundColor: color.buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BottomTab;

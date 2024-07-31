import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BookIcon, ChatIcon, HomeIcon, HeartIcon} from '../assets/index';
import {Image, StyleSheet, View} from 'react-native';
import color from '../commons/colors';
import {Home, ChatScreen, Book, FavoriteDoctors} from '../screens/index';
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
                  source={HomeIcon}
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
        component={FavoriteDoctors}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused && styles.circle}>
                <Image
                  source={HeartIcon}
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
                  source={BookIcon}
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
                  source={ChatIcon}
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

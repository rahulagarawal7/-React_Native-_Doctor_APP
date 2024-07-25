import React from 'react';
import {Image, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './bottomTabBar';
import color from '../commons/colors';
import myDoctorIcon from '/Users/dr.mac/Desktop/DoctorAPP/src/assets/icons/myDoctors.png';
import MyDoctorScreen from '../screens/drawerScreens/myDoctorScreen';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator
        initialRouteName="bottomTabBar"
        screenOptions={{
          headerShown: false,
          drawerStyle: {backgroundColor: color.drawerBackGroundColor},
        }}>
        <Drawer.Screen
          name="User Profile"
          component={BottomTab}
          options={{
            drawerItemStyle: {backgroundColor: color.drawerBackGroundColor},
            drawerLabelStyle: {
              color: color.commonTextColor,
              fontSize: 16,
              fontWeight: '500',
            },
          }}
        />
        <Drawer.Screen
          name="myDoctorScreen"
          component={MyDoctorScreen}
          options={{
            drawerIcon: () => {
              return (
                <View>
                  <Image source={myDoctorIcon} />
                </View>
              );
            },
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigation;

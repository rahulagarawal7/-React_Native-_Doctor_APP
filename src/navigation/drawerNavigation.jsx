import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabBar} from './index';
import color from '../commons/colors';
import {
  closeIcon,
  HelpCenterIcon,
  SettingIcon,
  TestBookingIcon,
  PrivacyPolicyIcon,
  MyDoctorsIcon,
  PaymentIcon,
  PhoneIcon,
  LogoutIcon,
  MedicineOrderIcon,
  MedicalRecordsIcon,
  UserImage,
} from '../assets/index';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {
  Settings,
  Payments,
  HelpCenter,
  PrivacyPolicy,
  TestBookings,
  MedicalRecords,
  MedicineOrders,
  MyDoctorScreen,
  Logout,
} from '../screens/index';
const Icon = ({img}) => {
  return (
    <View style={styles.iconStyle}>
      <Image source={img} />
    </View>
  );
};

Icon.propTypes = {
  img: PropTypes.any,
};
const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator
        initialRouteName="bottomTabBar"
        screenOptions={{
          headerShown: false,
          drawerStyle: styles.drawerItemStyle,
        }}>
        <Drawer.Screen
          name="bottomTabBar"
          component={BottomTabBar}
          options={{
            drawerItemStyle: styles.drawerItemStyle,
            drawerLabelStyle: styles.drawerLabelStyle,
            headerShown: false,
            drawerIcon: () => {
              return (
                <View style={styles.headerBox}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('userProfile', {userImg: UserImage})
                    }>
                    <Image style={styles.userImgStyle} source={UserImage} />
                  </TouchableOpacity>

                  <View style={styles.detailsBox}>
                    <Text style={styles.userNameTextStyle}>User Name</Text>
                    <View style={styles.numberBox}>
                      <Image source={PhoneIcon} />
                      <Text style={styles.userPhoneTextStyle}>123333770</Text>
                    </View>
                  </View>
                  <Image style={styles.closeStyle} source={closeIcon} />
                </View>
              );
            },
          }}
        />
        <Drawer.Screen
          name="myDoctorScreen"
          component={MyDoctorScreen}
          options={{
            drawerIcon: () => <Icon img={MyDoctorsIcon} />,
          }}
        />
        <Drawer.Screen
          name="medicalRecords"
          component={MedicalRecords}
          options={{
            drawerIcon: () => <Icon img={MedicalRecordsIcon} />,
          }}
        />
        <Drawer.Screen
          name="payments"
          component={Payments}
          options={{
            drawerIcon: () => <Icon img={PaymentIcon} />,
          }}
        />
        <Drawer.Screen
          name="medicineOrder"
          component={MedicineOrders}
          options={{
            drawerIcon: () => <Icon img={MedicineOrderIcon} />,
          }}
        />
        <Drawer.Screen
          name="testBooking"
          component={TestBookings}
          options={{
            drawerIcon: () => <Icon img={TestBookingIcon} />,
          }}
        />
        <Drawer.Screen
          name="privacyPolicy"
          component={PrivacyPolicy}
          options={{
            drawerIcon: () => <Icon img={PrivacyPolicyIcon} />,
          }}
        />
        <Drawer.Screen
          name="settings"
          component={Settings}
          options={{
            drawerIcon: () => <Icon img={SettingIcon} />,
          }}
        />
        <Drawer.Screen
          name="helpCenter"
          component={HelpCenter}
          options={{
            drawerIcon: () => <Icon img={HelpCenterIcon} />,
          }}
        />

        <Drawer.Screen
          name="logout"
          component={Logout}
          options={{
            drawerIcon: () => <Icon img={LogoutIcon} />,
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    height: 40,
    width: 212,
    justifyContent: 'center',
  },
  drawerItemStyle: {
    backgroundColor: color.drawerBackGroundColor,
  },
  drawerLabelStyle: {
    color: color.commonTextColor,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: color.drawerBackGroundColor,
    marginLeft: 10,
  },
  headerBox: {
    height: 44,
    width: 300,
    flexDirection: 'row',
  },
  userImgStyle: {
    height: 44,
    width: 44,
    borderRadius: 44,
  },
  userNameTextStyle: {
    height: 19,
    width: 125,
    fontSize: 16,
    fontWeight: '500',
    color: color.commonTextColor,
  },
  userPhoneTextStyle: {
    marginLeft: 5,
    height: 19,
    width: 125,
    fontSize: 14,
    fontWeight: '400',
    color: color.commonTextColor,
  },
  numberBox: {
    height: 14,
    width: 95,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsBox: {
    marginLeft: 10,
    height: 45,
    width: 160,
    justifyContent: 'space-around',
  },
  closeStyle: {
    alignSelf: 'center',
  },
});
export default DrawerNavigation;

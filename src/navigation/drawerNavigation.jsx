import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabBar from './bottomTabBar';
import color from '../commons/colors';
import myDoctorIcon from '../../src/assets/icons/myDoctors.png';
import paymentsIcon from '../../src/assets/icons/payments.png';
import medicalOrderIcon from '../../src/assets/icons/medicineOrder.png';
import medicalRecordsIcon from '../../src/assets/icons/medicalRecords.png';
import testBookingsIcon from '../../src/assets/icons/testBookings.png';
import privacyPolicyIcon from '../../src/assets/icons/privacyPolicy.png';
import settingsIcon from '../../src/assets/icons/settings.png';
import helpCenterIcon from '../../src/assets/icons/helpCenter.png';
import MyDoctorScreen from '../screens/drawerScreens/myDoctorScreen/myDoctorScreen';
import MedicalRecords from '../screens/drawerScreens/medicalRecords/medicalRecords';
import MedicineOrder from '../screens/drawerScreens/medicineOrders/medicineOrders';
import TestBooking from '../screens/drawerScreens/testBookings/testBookings';
import PrivacyPolicy from '../screens/drawerScreens/privacyPolicy/privacyPolicy';
import HelpCenter from '../screens/drawerScreens/helpCenter/helpCenter';
import Payments from '../screens/drawerScreens/payments/payments';
import Settings from '../screens/drawerScreens/settings/settings';
import UserImg from '../../src/assets/images/userProfile.jpg';
import phoneIcon from '../../src/assets/icons/phoneIcon.png';
import close from '../../src/assets/icons/close.png';
import logoutIcon from '../../src/assets/icons/Logout.png';
import Logout from '../screens/drawerScreens/logout/logout';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

const Icon = ({img}) => {
  return (
    <View style={styles.iconStyle}>
      <Image source={img} />
    </View>
  );
};

Icon.propTypes = {
  img: PropTypes.string,
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
                      navigation.navigate('userProfile', {userImg: UserImg})
                    }>
                    <Image style={styles.userImgStyle} source={UserImg} />
                  </TouchableOpacity>

                  <View style={styles.detailsBox}>
                    <Text style={styles.userNameTextStyle}>User Name</Text>
                    <View style={styles.numberBox}>
                      <Image source={phoneIcon} />
                      <Text style={styles.userPhoneTextStyle}>123333770</Text>
                    </View>
                  </View>
                  <Image style={styles.closeStyle} source={close} />
                </View>
              );
            },
          }}
        />
        <Drawer.Screen
          name="myDoctorScreen"
          component={MyDoctorScreen}
          options={{
            drawerIcon: () => <Icon img={myDoctorIcon} />,
          }}
        />
        <Drawer.Screen
          name="medicalRecords"
          component={MedicalRecords}
          options={{
            drawerIcon: () => <Icon img={medicalRecordsIcon} />,
          }}
        />
        <Drawer.Screen
          name="payments"
          component={Payments}
          options={{
            drawerIcon: () => <Icon img={paymentsIcon} />,
          }}
        />
        <Drawer.Screen
          name="medicineOrder"
          component={MedicineOrder}
          options={{
            drawerIcon: () => <Icon img={medicalOrderIcon} />,
          }}
        />
        <Drawer.Screen
          name="testBooking"
          component={TestBooking}
          options={{
            drawerIcon: () => <Icon img={testBookingsIcon} />,
          }}
        />
        <Drawer.Screen
          name="privacyPolicy"
          component={PrivacyPolicy}
          options={{
            drawerIcon: () => <Icon img={privacyPolicyIcon} />,
          }}
        />
        <Drawer.Screen
          name="settings"
          component={Settings}
          options={{
            drawerIcon: () => <Icon img={settingsIcon} />,
          }}
        />
        <Drawer.Screen
          name="helpCenter"
          component={HelpCenter}
          options={{
            drawerIcon: () => <Icon img={helpCenterIcon} />,
          }}
        />

        <Drawer.Screen
          name="logout"
          component={Logout}
          options={{
            drawerIcon: () => <Icon img={logoutIcon} />,
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

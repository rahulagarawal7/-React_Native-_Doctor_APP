import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../../commons/colors';
import googleLogo from '/Users/dr.mac/Desktop/DoctorAPP/src/assets/Logo/google.png';
import facebookIcon from '/Users/dr.mac/Desktop/DoctorAPP/src/assets/Logo/faceBook.png';

const GoogleFaceBookBtn = () => {
  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.btnBox}>
        <Image style={styles.imgStyle} source={googleLogo} />
        <Text style={styles.logoTextStyle}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBox}>
        <Image style={styles.imgStyle} source={facebookIcon} />
        <Text style={styles.logoTextStyle}>Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 54,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  btnBox: {
    height: 54,
    width: 160,
    borderRadius: 12,
    backgroundColor: color.commonTextColor,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logoTextStyle: {
    fontSize: 16,
    fontWeight: '300',
    color: color.containTextColor,
  },
  imgStyle: {
    height: 20,
    width: 20,
  },
});

export default GoogleFaceBookBtn;
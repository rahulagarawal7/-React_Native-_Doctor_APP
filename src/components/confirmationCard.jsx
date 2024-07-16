import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import color from '../commons/colors';
import like from '../../src/assets/Logo/like.png';
import CommonButton from './commonbutton';

const ConfirmationCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.innerCard}>
        <Image style={styles.likeImg} source={like} />
        <Text style={styles.headingTextStyle}>Thank You !</Text>
        <Text style={styles.lowerHeadingTextStyle}>
          Your Appointment Successful
        </Text>
        <View style={styles.textBox}>
          <Text style={styles.textBoxTextStyle}>
            You booked an appointment with Dr. Pediatrician Purpieson on
            February 21, at 02:00 PM
          </Text>
        </View>
        <View style={styles.lastBox}>
          <CommonButton btnText={'Done'} url={'home'} />
          <Text style={styles.editTextStyle}>Edit your appointment</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    alignSelf: 'center',
    height: 520,
    width: 335,
    borderRadius: 16,
    backgroundColor: color.commonTextColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCard: {
    height: 480,
    width: 300,
    justifyContent: 'space-around',
  },
  likeImg: {
    alignSelf: 'center',
  },
  headingTextStyle: {
    fontWeight: '500',
    fontSize: 38,
    color: color.headingTextColor,
    alignSelf: 'center',
  },
  lowerHeadingTextStyle: {
    fontWeight: '400',
    fontSize: 20,
    color: color.containtTextColor,
    alignSelf: 'center',
  },
  textBox: {
    height: 80,
    justifyContent: 'center',
  },
  textBoxTextStyle: {
    fontWeight: '400',
    fontSize: 14,
    color: color.containtTextColor,
    alignSelf: 'center',
    textAlign: 'center',
  },
  lastBox: {
    height: 89,
    width: 295,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  editTextStyle: {
    fontWeight: '400',
    fontSize: 14,
    color: color.containtTextColor,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
export default ConfirmationCard;

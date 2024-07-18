import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import color from '../commons/colors';
import like from '../../src/assets/Logo/like.png';
import CommonButton from './commonButton';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

const ConfirmationCard = ({drName, time}) => {
  const navigation = useNavigation();
  const handleSubmit = () => {
    navigation.navigate('home');
  };

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
            You booked an appointment with {drName} on February 21, at{' '}
            {time.time}
            {time.period}
          </Text>
        </View>
        <View style={styles.lastBox}>
          <CommonButton btnText={'Done'} handleSubmit={handleSubmit} />
          <Text style={styles.editTextStyle}>Edit your appointment</Text>
        </View>
      </View>
    </View>
  );
};

ConfirmationCard.propTypes = {
  drName: PropTypes.string.isRequired,
  time: PropTypes.shape({
    time: PropTypes.string,
    period: PropTypes.string,
  }).isRequired,
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
    color: color.containTextColor,
    alignSelf: 'center',
  },
  textBox: {
    height: 80,
    justifyContent: 'center',
  },
  textBoxTextStyle: {
    fontWeight: '400',
    fontSize: 14,
    color: color.containTextColor,
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
    color: color.containTextColor,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
export default ConfirmationCard;

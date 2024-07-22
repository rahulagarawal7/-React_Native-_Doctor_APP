import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import color from '../../../commons/colors';
import HeadingCard from './headingCard';
import InputTextField from '../inputTextField';
import CommonButton from '../../commonButton';
import PropTypes from 'prop-types';

const ForgetPasswordCard = ({setIsForgetPassword, setIsOtpCard}) => {
  function forgetCardHandle() {
    setIsForgetPassword(false);
    setIsOtpCard(true);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsForgetPassword(false)}
        style={styles.line}
      />
      <HeadingCard
        heading="Forgot password"
        contain="Enter your email for the verification process,
we will send 4 digits code to your email."
      />
      <InputTextField placeholder={'Email'} keyboardType={'text'} />
      <View style={styles.CommonButtonStyle}>
        <CommonButton btnText="Continue" handleSubmit={forgetCardHandle} />
      </View>
    </View>
  );
};

ForgetPasswordCard.propTypes = {
  setIsForgetPassword: PropTypes.func,
  setIsOtpCard: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: '100%',
    backgroundColor: color.commonTextColor,
    position: 'absolute',
    top: 380,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  line: {
    height: 5,
    width: 130,
    borderRadius: 6,
    alignSelf: 'center',
    backgroundColor: color.lineColor,
    marginTop: 20,
  },
  CommonButtonStyle: {
    marginTop: 40,
  },
});
export default ForgetPasswordCard;

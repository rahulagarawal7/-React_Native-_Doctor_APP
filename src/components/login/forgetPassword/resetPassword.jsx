import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import color from '../../../commons/colors';
import HeadingCard from './headingCard';
import CommonButton from '../../commonButton';
import PasswordTextField from '../passwordTextField';
import PropTypes from 'prop-types';

const ResetPasswordCard = ({setIsResetPassword}) => {
  function forgetCardHandle() {
    setIsResetPassword(false);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsResetPassword(false)}
        style={styles.line}
      />
      <HeadingCard
        heading="Reset Password"
        contain="Set the new password for your account so you can login and access all the features."
      />
      <View style={styles.inputTextFieldStyle}>
        <PasswordTextField placeholder={'New Password'} />
        <PasswordTextField placeholder={'Re-enter Password'} />
      </View>
      <View style={styles.commonButtonStyle}>
        <CommonButton
          btnText="Update Password"
          handleSubmit={forgetCardHandle}
        />
      </View>
    </View>
  );
};

ResetPasswordCard.propTypes = {
  setIsResetPassword: PropTypes.func,
};
const styles = StyleSheet.create({
  container: {
    height: 450,
    width: '100%',
    backgroundColor: color.commonTextColor,
    position: 'absolute',
    bottom: 0,
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
  commonButtonStyle: {
    marginTop: 40,
  },
  inputTextFieldStyle: {
    gap: 20,
  },
});
export default ResetPasswordCard;

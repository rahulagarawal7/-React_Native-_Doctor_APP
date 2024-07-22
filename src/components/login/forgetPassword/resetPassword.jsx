import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../../../commons/colors';
import HeadingCard from './headingCard';
import CommonButton from '../../commonButton';
import PasswordTextField from '../passwordTextField';

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
      <View style={styles.CommonButtonStyle}>
        <CommonButton
          btnText="Update Password"
          handleSubmit={forgetCardHandle}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    backgroundColor: color.commonTextColor,
    position: 'absolute',
    top: 280,
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
  inputTextFieldStyle: {
    gap: 20,
  },
});
export default ResetPasswordCard;

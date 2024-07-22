import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import color from '../../../commons/colors';
import HeadingCard from './headingCard';
import InputTextField from '../inputTextField';
import CommonButton from '../../commonButton';

const OtpCard = ({setIsOtpCard, setIsResetPassword}) => {
  function handleSubmit() {
    setIsOtpCard(false);
    setIsResetPassword(true);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsOtpCard(false)}
        style={styles.line}
      />
      <HeadingCard
        heading="Forgot password"
        contain="Enter your email for the verification process,
    we will send 4 digits code to your email."
      />
      <View style={styles.inputTextFieldStyle}>
        <InputTextField
          customStyles={styles.inputTextField}
          keyboardType={'text'}
        />
        <InputTextField
          customStyles={styles.inputTextField}
          keyboardType={'text'}
        />
        <InputTextField
          customStyles={styles.inputTextField}
          keyboardType={'text'}
        />
        <InputTextField
          customStyles={styles.inputTextField}
          keyboardType={'text'}
        />
      </View>
      <View style={styles.CommonButtonStyle}>
        <CommonButton btnText="Continue" handleSubmit={handleSubmit} />
      </View>
    </View>
  );
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
  inputTextField: {
    width: 54,
    fontSize: 26,
    color: color.buttonColor,
    justifyContent: 'center',
    textAlign: 'center',
  },
  inputTextFieldStyle: {
    gap: 30,
    flexDirection: 'row',
    justifyContent: 'center',
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
export default OtpCard;

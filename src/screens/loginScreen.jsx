import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import backGroundImage from '../assets/background/bg.png';
import HeadingText from '../components/login/headingText';
import GoogleFaceBookBtn from '../components/login/googleFacebookBtn';
import InputTextField from '../components/login/inputTextField';
import color from '../commons/colors';
import CommonButton from '../components/commonButton';
import ForgetPasswordCard from '../components/login/forgetPassword/forgetPassword';
import OtpCard from '../components/login/forgetPassword/otpCard';
import ResetPasswordCard from '../components/login/forgetPassword/resetPassword';
import PasswordTextField from '../components/login/passwordTextField';
import PropTypes from 'prop-types';
const LoginScreen = ({navigation}) => {
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [isOtpCard, setIsOtpCard] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

  const handleSubmit = () => {
    navigation.navigate('drawerNavigation');
  };
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <ScrollView>
        <View
          style={[
            isForgetPassword
              ? styles.containerOnForgetPassword
              : styles.container,
            isOtpCard ? styles.containerOnForgetPassword : styles.container,
            isResetPassword
              ? styles.containerOnForgetPassword
              : styles.container,
          ]}>
          <View style={styles.firstContainer}>
            <HeadingText
              heading="Welcome back"
              contain="You can search course, apply course and find
 scholarship for abroad studies"
            />
            <GoogleFaceBookBtn />
          </View>
          <View style={styles.secondContainer}>
            <InputTextField placeholder={'Email'} keyboardType={'email'} />
            <PasswordTextField
              placeholder={'Password'}
              keyboardType={'password'}
            />

            <Text
              onPress={() => setIsForgetPassword(!isForgetPassword)}
              style={styles.forgetPasswordTextStyle}>
              Forget password
            </Text>
          </View>
          <View style={styles.thirdContainer}>
            <CommonButton btnText="Login" handleSubmit={handleSubmit} />
            <Text style={styles.haveAccountTextStyle}>
              Don’t have an account?{'  '}
              <Text
                onPress={() => navigation.navigate('signUpScreen')}
                style={styles.haveAccountTextStyle}>
                Join us
              </Text>
            </Text>
          </View>
        </View>
        {isForgetPassword && (
          <ForgetPasswordCard
            setIsForgetPassword={setIsForgetPassword}
            setIsOtpCard={setIsOtpCard}
          />
        )}
        {isOtpCard && (
          <OtpCard
            setIsOtpCard={setIsOtpCard}
            setIsResetPassword={setIsResetPassword}
          />
        )}
        {isResetPassword && (
          <ResetPasswordCard
            setIsResetPassword={setIsResetPassword}
            setIsOtpCard={setIsOtpCard}
          />
        )}
      </ScrollView>
    </ImageBackground>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.any,
};

const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
  container: {
    gap: 40,
  },
  containerOnForgetPassword: {
    opacity: 0.4,
    gap: 40,
  },
  firstContainer: {
    gap: 40,
    height: 300,
    justifyContent: 'flex-end',
  },
  secondContainer: {
    gap: 10,
  },
  forgetPasswordTextStyle: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: color.buttonColor,
  },
  thirdContainer: {
    height: 200,
    gap: 90,
  },
  haveAccountTextStyle: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: color.buttonColor,
  },
});
export default LoginScreen;

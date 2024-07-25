import React from 'react';
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
import PasswordTextField from '../components/login/passwordTextField';
import PropTypes from 'prop-types';

const SignUpScreen = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('drawerNavigation');
  };
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.firstContainer}>
            <HeadingText
              heading="Join us to start searching"
              contain="You can search course, apply course and find
 scholarship for abroad studies"
            />
            <GoogleFaceBookBtn />
          </View>
          <View style={styles.secondContainer}>
            <InputTextField keyboardType={'text'} placeholder={'Name'} />
            <InputTextField placeholder={'Email'} keyboardType={'email'} />
            <PasswordTextField placeholder={'Password'} />

            <Text style={styles.iAgreeTextStyle}>
              I agree with the Terms of Service & Privacy Policy
            </Text>
          </View>
          <View style={styles.thirdContainer}>
            <CommonButton btnText="Sign up" handleSubmit={handleSubmit} />
            <Text style={styles.haveAccountTextStyle}>
              Have an account?{' '}
              <Text
                onPress={() => navigation.navigate('loginScreen')}
                style={styles.haveAccountTextStyle}>
                Log in
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.any,
};

const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
  container: {
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
  iAgreeTextStyle: {
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: color.containTextColor,
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
export default SignUpScreen;

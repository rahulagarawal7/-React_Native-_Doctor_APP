import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackgroundImage, HollowCircleIcon} from '../assets/index';
import HeadingText from '../components/login/headingText';
import GoogleFaceBookBtn from '../components/login/googleFacebookBtn';
import InputTextField from '../components/login/inputTextField';
import color from '../commons/colors';
import CommonButton from '../components/commonButton';
import PasswordTextField from '../components/login/passwordTextField';
import PropTypes from 'prop-types';

const SignUpScreen = ({navigation}) => {
  const [radioButton, setRadioButton] = useState(false);

  const handleSubmit = () => {
    navigation.navigate('drawerNavigation');
  };
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={BackgroundImage}>
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
            <View style={styles.iAgreeBox}>
              {radioButton ? (
                <TouchableOpacity
                  onPress={() => {
                    setRadioButton(!radioButton);
                  }}>
                  <Image source={HollowCircleIcon} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setRadioButton(!radioButton);
                  }}>
                  <Image
                    style={styles.circleOnSelectStyle}
                    source={HollowCircleIcon}
                  />
                </TouchableOpacity>
              )}
              <Text style={styles.iAgreeTextStyle}>
                I agree with the Terms of Service & Privacy Policy
              </Text>
            </View>
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
  iAgreeBox: {
    height: 20,
    width: 305,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  circleOnSelectStyle: {
    tintColor: color.buttonColor,
  },
});
export default SignUpScreen;

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import bgImg from '../assets/background/bg.png';
import logo from '../assets/Logo/Logo.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoardingScreen01');
    }, 2000);
  }, []);

  return (
    <ImageBackground source={bgImg} style={styles.bgImg}>
      <View style={styles.logoStyles}>
        <Image style={styles.logo} source={logo} />
      </View>
    </ImageBackground>
  );
};
SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  logoStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  logo: {
    height: 105,
    width: 205,
  },
});
export default SplashScreen;
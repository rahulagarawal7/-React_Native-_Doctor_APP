import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  BackgroundImage,
  DoctorImage01,
  TopRightCircleImage,
} from '../../assets/index';
import color from '../../commons/colors';
import CommonButton from '../../components/commonButton';
import HeadingText from '../../components/login/headingText';
const OnBoardingScreen01 = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('OnBoardingScreen02');
  };

  return (
    <ImageBackground source={BackgroundImage}>
      <ScrollView>
        <Image style={styles.firstImage} source={TopRightCircleImage} />
        <View style={styles.drImgBox}>
          <Image style={styles.drImg} source={DoctorImage01} />
        </View>
        <View style={styles.textBox}>
          <HeadingText
            heading="Find Trusted Doctors"
            contain=" Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of it over 2000 years old."
          />
        </View>
        <View style={styles.box}>
          <CommonButton btnText={'Get Started'} handleSubmit={handleSubmit} />
          <Text
            onPress={() =>
              navigation.navigate('drawerNavigation', {
                screen: 'bottomTabBar',
                params: '',
              })
            }
            style={styles.skip}>
            Skip
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

OnBoardingScreen01.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const styles = StyleSheet.create({
  firstImage: {
    height: 300,
    width: 250,
  },
  drImgBox: {
    height: 500,
    position: 'absolute',
    marginLeft: 20,
    justifyContent: 'center',
  },
  drImg: {
    width: 336,
    height: 336,
  },
  textBox: {
    marginTop: 60,
    height: 330,

    alignSelf: 'center',
    justifyContent: 'center',
  },
  skip: {
    color: color.containTextColor,
    textAlign: 'center',
    marginTop: 15,
  },
  bg: {
    height: 216,
    width: 216,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
    zIndex: -1,
  },
  box: {
    height: 110,
    justifyContent: 'flex-start',
  },
});
export default OnBoardingScreen01;

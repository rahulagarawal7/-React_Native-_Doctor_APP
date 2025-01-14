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
import color from '../../commons/colors';
import CommonButton from '../../components/commonButton';
import HeadingText from '../../components/login/headingText';
import {
  BackgroundImage,
  DoctorImage02,
  TopRightCircleImage,
} from '../../assets/index';
const OnBoardingScreen02 = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('OnBoardingScreen03');
  };

  return (
    <ImageBackground source={BackgroundImage}>
      <ScrollView>
        <Image style={styles.firstImage} source={TopRightCircleImage} />
        <View style={styles.drImgBox}>
          <Image style={styles.drImg} source={DoctorImage02} />
        </View>
        <View style={styles.textBox}>
          <HeadingText
            heading="Choose Best Doctors"
            contain=" Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of it over 2000 years old."
          />
        </View>
        <View style={styles.box}>
          <CommonButton btnText={'Get Started'} handleSubmit={handleSubmit} />
          <Text
            onPress={() => navigation.navigate('drawerNavigation')}
            style={styles.skip}>
            Skip
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

OnBoardingScreen02.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  firstImage: {
    height: 342,
    width: 342,
    left: 175,
    top: -20,
    position: 'absolute',
  },
  drImgBox: {
    position: 'absolute',
    height: 450,
    marginLeft: 20,
    justifyContent: 'center',
  },
  drImg: {
    width: 336,
    height: 336,
  },
  textBox: {
    marginTop: 130,
    height: 430,
    alignSelf: 'center',
    justifyContent: 'flex-end',
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
    height: 200,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
export default OnBoardingScreen02;

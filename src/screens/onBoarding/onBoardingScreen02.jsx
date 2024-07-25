import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import topImg from '../../assets/background/Ellipse153(1).png';
import drImage from '../../assets/images/Ellipse154(1).png';
import lastImg from '../../assets/background/Ellipse143.png';
import color from '../../commons/colors';
import CommonButton from '../../components/commonButton';
import HeadingText from '../../components/login/headingText';

const OnBoardingScreen02 = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('OnBoardingScreen03');
  };

  return (
    <ScrollView>
      <Image style={styles.firstImage} source={topImg} />
      <View style={styles.drImgBox}>
        <Image style={styles.drImg} source={drImage} />
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
      <Image style={styles.bg} source={lastImg} />
    </ScrollView>
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

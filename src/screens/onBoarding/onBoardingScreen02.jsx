import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import TopImg from '../../assets/background/Ellipse153(1).png';
import DrImage from '../../assets/images/Ellipse154(1).png';
import LastImg from '../../assets/background/Ellipse143.png';
import color from '../../commons/colors';
import CommonButton from '../../components/commonButton';

const OnBoardingScreen02 = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('OnBoardingScreen03');
  };

  return (
    <ScrollView>
      <View>
        <View>
          <Image style={styles.firstImage} source={TopImg} />
        </View>
        <View>
          <Image style={styles.DrImg} source={DrImage} />
        </View>
        <View style={styles.textBox}>
          <View style={styles.text}>
            <Text style={styles.textStyle}>Choose Best Doctors</Text>
          </View>
          <View style={styles.textContain}>
            <Text style={styles.textContainerStyle}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of it over 2000 years old.
            </Text>
          </View>
        </View>
      </View>
      <CommonButton btnText={'Get Started'} handleSubmit={handleSubmit} />
      <Text
        onPress={() => navigation.navigate('bottomTabBar')}
        style={styles.skip}>
        Skip
      </Text>
      <Image style={styles.bg} source={LastImg} />
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
  DrImg: {
    width: 336,
    height: 336,
    marginTop: 80,
    marginLeft: 20,
  },
  textBox: {
    height: 260,
    width: 295,
    alignSelf: 'center',

    justifyContent: 'center',
  },
  text: {
    height: 40,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 28,
    color: color.headingTextColor,
    fontWeight: '500',
    fontFamily: '../assets/fonts/Rubik-VariableFont_wght.ttf',
  },
  textContain: {
    width: 274,
    height: 100,

    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textContainerStyle: {
    textAlign: 'center',
    color: color.containTextColor,
    fontSize: 14,
    fontWeight: '400',
  },

  skip: {
    color: 'black',
    textAlign: 'center',
    marginTop: 15,
  },
  bg: {
    height: 216,
    width: 216,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: -25,
  },
});
export default OnBoardingScreen02;

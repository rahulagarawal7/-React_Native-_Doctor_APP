import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import topImg from '../../assets/background/Ellipse153.png';
import drImage from '../../assets/images/Ellipse154(2).png';
import lastImg from '../../assets/background/Ellipse143.png';
import color from '../../commons/colors';
import CommonButton from '../../components/commonButton';
const OnBoardingScreen03 = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('bottomTabBar');
  };
  return (
    <ScrollView>
      <View>
        <View>
          <Image style={styles.firstImage} source={topImg} />
        </View>
        <View>
          <Image style={styles.drImg} source={drImage} />
        </View>
        <View style={styles.textBox}>
          <View style={styles.text}>
            <Text style={styles.textStyle}>Easy Appointments</Text>
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
      <Image style={styles.bg} source={lastImg} />
    </ScrollView>
  );
};

OnBoardingScreen03.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  firstImage: {
    height: 300,
    width: 250,
  },
  drImg: {
    width: 336,
    height: 336,
    position: 'absolute',
    top: -220,
    marginLeft: 20,
  },
  textBox: {
    marginTop: 60,
    height: 280,
    width: 295,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    height: 50,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 28,
    color: color.headingTextColor,
    fontWeight: '500',
  },
  textContain: {
    width: 274,
    height: 70,

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
  },
});
export default OnBoardingScreen03;

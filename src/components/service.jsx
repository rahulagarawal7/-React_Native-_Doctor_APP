import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import mapImg from '../assets/images/map.png';
import color from '../commons/colors';
const Service = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headingTextStyle}>Services</Text>

        <Text style={styles.textStyle}>
          1. Patient care should be the number one priority.
        </Text>
        <Text style={styles.textStyle}>
          2. If you run your practiceyou know how frustrating.
        </Text>
        <Text style={styles.textStyle}>
          3. That’s why some of appointment reminder system.
        </Text>
      </View>
      <Image source={mapImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  headingTextStyle: {
    height: 50,
    fontSize: 18,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  textStyle: {
    height: 40,
    fontSize: 13,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  container: {
    height: 149,
    width: 338,
    alignItems: 'stretch',
    alignSelf: 'center',
  },
});
export default Service;

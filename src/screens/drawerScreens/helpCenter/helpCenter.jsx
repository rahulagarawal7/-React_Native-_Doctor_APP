import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import backGroundImage from '/Users/dr.mac/Desktop/DoctorAPP/src/assets/background/bg.png';
import BackButton from '../../../components/backButton';

const HelpCenter = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <BackButton headingName="Help Center" />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
});
export default HelpCenter;

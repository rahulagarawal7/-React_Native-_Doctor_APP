import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import BackButton from '../components/backButton';
import backGroundImage from '../assets/background/bg.png';

const FavoriteDoctor = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <BackButton headingName="Favorite Doctors" />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
});
export default FavoriteDoctor;

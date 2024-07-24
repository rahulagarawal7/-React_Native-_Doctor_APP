import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import backGroundImage from '../assets/background/bg.png';
import BackButton from '../components/backButton';

const Book = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <BackButton headingName="Book Doctors" />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
});
export default Book;

import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import BackButton from '../components/backButton';
import {BackgroundImage} from '../assets/index';
import FindDoctorCard from '../components/findDoctorCard';

const FavoriteDoctor = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={BackgroundImage}>
      <View style={styles.box}>
        <BackButton headingName="Favorite Doctors" />
      </View>

      <View style={styles.boxCard}>
        <FindDoctorCard />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
  box: {
    height: 60,
  },
  boxCard: {
    alignSelf: 'center',
    marginBottom: 60,
  },
});
export default FavoriteDoctor;

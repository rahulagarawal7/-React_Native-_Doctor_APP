import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import backGroundImage from '/Users/dr.mac/Desktop/DoctorAPP/src/assets/background/bg.png';
import BackButton from '../../../components/backButton';
import FindDoctorCard from '../../../components/findDoctorCard';

const MyDoctorScreen = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <View style={styles.box}>
        <BackButton headingName="My Doctors" />
      </View>

      <View style={styles.container}>
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
  container: {
    alignSelf: 'center',
    marginBottom: 60,
  },
});
export default MyDoctorScreen;

import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import backGroundImage from '/Users/dr.mac/Desktop/DoctorAPP/src/assets/background/bg.png';
import BackButton from '../../../components/backButton';
import AddCard from '../../../components/drawerScreens/addCard';
import img from '../../../assets/Logo/patient.png';
const TestBooking = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <BackButton headingName="Test Booking" />
      <AddCard
        image={img}
        headingContent={'add your test booking to know about your health '}
        btnName={'add test booking'}
        headingName={'No test booking found'}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
});
export default TestBooking;

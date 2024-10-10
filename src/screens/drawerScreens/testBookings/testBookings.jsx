import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {BackgroundImage, PatientLogo} from '../../../assets/index';
import BackButton from '../../../components/backButton';
import AddCard from '../../../components/drawerScreens/addCard';

const TestBooking = () => {
  const handlerOnPress = () => {};

  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={BackgroundImage}>
      <BackButton headingName="Test Booking" />
      <AddCard
        image={PatientLogo}
        headingContent={'add your test booking to know about your health '}
        btnName={'add test booking'}
        headingName={'No test booking found'}
        handlerOnPress={handlerOnPress}
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

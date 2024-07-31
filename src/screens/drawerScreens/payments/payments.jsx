import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import backGroundImage from '/Users/dr.mac/Desktop/DoctorAPP/src/assets/background/bg.png';
import BackButton from '../../../components/backButton';
import AddCard from '../../../components/drawerScreens/addCard';
import img from '../../../assets/Logo/diagnostics.png';
const Payments = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <BackButton headingName="Payments" />
      <AddCard
        image={img}
        btnName={'add payments'}
        headingName={'you have not done any payments yet !'}
        headingContent={
          'add your payments details to make your transaction cash less'
        }
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
});
export default Payments;

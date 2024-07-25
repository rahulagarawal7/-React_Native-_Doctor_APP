import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import backGroundImage from '/Users/dr.mac/Desktop/DoctorAPP/src/assets/background/bg.png';
import BackButton from '../../../components/backButton';
import medicalRecordLogo from '../../../assets/Logo/medicalOrder.png';
import AddCard from '../../../components/drawerScreens/addCard';

const MedicineOrder = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <BackButton headingName="Medicine Order" />
      <AddCard
        image={medicalRecordLogo}
        btnName={'Order medicines'}
        headingContent={'Place your first order now.'}
        headingName={'No orders placed yet'}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
});
export default MedicineOrder;

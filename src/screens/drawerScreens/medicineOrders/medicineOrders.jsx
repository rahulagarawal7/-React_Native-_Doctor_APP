import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {BackgroundImage, MedicalOrderLogo} from '../../../assets/index';
import BackButton from '../../../components/backButton';
import AddCard from '../../../components/drawerScreens/addCard';

const MedicineOrder = () => {
  const handleSubmit = () => {};
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={BackgroundImage}>
      <BackButton headingName="Medicine Order" />
      <AddCard
        image={MedicalOrderLogo}
        btnName={'Order medicines'}
        headingContent={'Place your first order now.'}
        headingName={'No orders placed yet'}
        handlerOnPress={handleSubmit}
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

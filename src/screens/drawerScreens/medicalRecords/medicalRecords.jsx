import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import backGroundImage from '/Users/dr.mac/Desktop/DoctorAPP/src/assets/background/bg.png';
import BackButton from '../../../components/backButton';
import AddCard from '../../../components/drawerScreens/addCard';
import medicalLogo from '../../../assets/Logo/medicalRecords.png';

const MedicalRecords = () => {
  const handlerOnPress = () => {};

  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <BackButton headingName="Medical Records" />
      <AddCard
        image={medicalLogo}
        headingName={'Add a medical record.'}
        headingContent={
          'A detailed health history helps a doctor diagnose you better.'
        }
        btnName={'Add a record'}
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
export default MedicalRecords;

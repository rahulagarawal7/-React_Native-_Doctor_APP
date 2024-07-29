import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import backGroundImage from '../../../assets/background/bg.png';
import BackButton from '../../../components/backButton';
import AddCard from '../../../components/drawerScreens/addCard';
import medicalLogo from '../../../assets/Logo/medicalRecords.png';
import PropTypes from 'prop-types';
const MedicalRecords = ({navigation}) => {
  const handlerOnPress = () => {
    navigation.navigate('addRecords');
  };

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

MedicalRecords.propTypes = {
  navigation: PropTypes.any,
  navigate: PropTypes.any,
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
});
export default MedicalRecords;

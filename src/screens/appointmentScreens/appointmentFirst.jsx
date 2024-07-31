import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import DoctorDetailsCard from '../../components/doctorDetailsCard';
import PatientProfile from '../../components/appointmentCards/patientProfile';
import CommonButton from '../../components/commonButton';
import {BackgroundImage} from '../../assets/index';
import PatientDetailsCard from '../../components/appointmentCards/patientDetailsCard';
import BackButton from '../../components/backButton';

const AppointmentFirst = ({route, navigation}) => {
  const {data} = route.params;

  const handleSubmit = () => {
    navigation.navigate('appointmentSecond', {data: data});
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage}>
        <View style={styles.backButtonStyle}>
          <BackButton headingName="Appointment" />
        </View>
        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.doctorDetailsCardStyle}>
            <DoctorDetailsCard btn={false} data={data} />
          </View>

          <PatientDetailsCard />
          <PatientProfile />
          <CommonButton btnText={'Next'} handleSubmit={handleSubmit} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
AppointmentFirst.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      data: PropTypes.object,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: 30,
  },
  container: {
    flex: 1,
  },
  backButtonStyle: {
    height: '10%',
  },
  scrollViewStyle: {
    height: '90%',
  },
  doctorDetailsCardStyle: {
    alignSelf: 'center',
  },
});

export default AppointmentFirst;

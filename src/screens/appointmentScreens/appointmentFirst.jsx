import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import BackButton from '../../components/backbutton';
import PropTypes from 'prop-types';
import DoctorDetailsCard from '../../components/doctorDetailsCard';
import PatientProfile from '../../components/appointmentCards/patientProfile';
import CommonButton from '../../components/commonbutton';
import backGroubdImage from '../../assets/background/bg.png';
import PatientDetailsCard from '../../components/appointmentCards/patientDetailsCard';

const AppointmentFirst = ({route}) => {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={backGroubdImage}>
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
          <CommonButton btnText={'Next'} url={'appointmentSecond'} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
AppointmentFirst.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      data: PropTypes.object?.isRequired,
    }).isRequired,
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

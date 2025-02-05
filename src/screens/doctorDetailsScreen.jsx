import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import BackButton from '../components/backButton';
import DoctorDetailsCard from '../components/doctorDetailsCard';
import OngoingPatient from '../components/ongoingPatient';
import Service from '../components/service';
import PropTypes from 'prop-types';
import {BackgroundImage} from '../assets/index';
const DoctorDetailsScreen = ({route}) => {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage}>
        <View style={styles.backButtonStyles}>
          <BackButton headingName="Doctor Details" />
        </View>
        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.scrollViewContentContainerStyle}>
          <View style={styles.doctorDetailsCardStyle}>
            <DoctorDetailsCard btn={true} data={data} />
          </View>
          <View style={styles.ongoingPatientStyle}>
            <OngoingPatient />
          </View>
          <View style={styles.serviceStyle}>
            <Service />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
DoctorDetailsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      data: PropTypes.object?.isRequired,
    }).isRequired,
  }).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButtonStyles: {
    height: '10%',
  },
  scrollViewStyle: {
    height: '90%',
  },
  doctorDetailsCardStyle: {
    alignSelf: 'center',
  },
  ongoingPatientStyle: {
    alignSelf: 'center',
  },
  scrollViewContentContainerStyle: {
    gap: 30,
  },
  serviceStyle: {
    alignSelf: 'center',
  },
});

export default DoctorDetailsScreen;

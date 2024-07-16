import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import BackButton from '../components/backbutton';
import DoctorDetailsCard from '../components/doctorDetailsCard';
import OngoingPatient from '../components/ongoingPatient';
import Service from '../components/service';
import PropTypes from 'prop-types';

const DoctorDetailsScreen = ({route}) => {
  const {data} = route.params;
  return (
    <View style={styles.container}>
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
});

export default DoctorDetailsScreen;

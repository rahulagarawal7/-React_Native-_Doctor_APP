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
    <ScrollView>
      <BackButton headingName="Doctor Details" />
      <View style={styles.DoctorDetailsCardStyle}>
        <DoctorDetailsCard btn={true} data={data} />
      </View>
      <View style={styles.OngoingPatientStyle}>
        <OngoingPatient />
      </View>
      <View style={styles.serviceStyle}>
        <Service />
      </View>
    </ScrollView>
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
  DoctorDetailsCardStyle: {
    marginTop: 70,
    alignSelf: 'center',
  },
  OngoingPatientStyle: {
    marginTop: 30,
    alignSelf: 'center',
  },
  serviceStyle: {
    marginTop: 20,
  },
});

export default DoctorDetailsScreen;

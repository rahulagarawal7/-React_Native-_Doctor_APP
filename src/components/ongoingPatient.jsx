import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import color from '../commons/colors';

const OngoingPatient = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.patientNumber}>700</Text>
        <Text style={styles.text}>Running</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.patientNumber}>900</Text>
        <Text style={styles.text}>Ongoing</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.patientNumber}>900</Text>
        <Text style={styles.text}>Patient</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 84,
    width: 305,
    backgroundColor: color.commonTextColor,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  box: {
    height: 64,
    width: 90,
    borderRadius: 10,
    backgroundColor: color.OngoingPatientBox,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: color.containtTextColor,
  },
  patientNumber: {
    color: color.headingTextColor,
    fontSize: 18,
    fontWeight: '500',
  },
});
export default OngoingPatient;

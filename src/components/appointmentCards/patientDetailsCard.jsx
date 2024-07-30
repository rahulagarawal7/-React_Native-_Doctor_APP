import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import color from '../../commons/colors';

const PatientDetailsCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingTextStyle}>Appointment For</Text>
      <TextInput
        style={styles.input}
        placeholder="Patient Name"
        keyboardType="numeric"
        placeholderTextColor={color.containTextColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        keyboardType="numeric"
        placeholderTextColor={color.containTextColor}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  headingTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  input: {
    marginTop: 20,
    padding: 10,
    height: 54,
    width: 335,
    borderRadius: 10,
    backgroundColor: color.commonTextColor,
    borderWidth: 0.5,
    fontSize: 16,
    fontWeight: '500',
    color: color.containTextColor,
  },
});
export default PatientDetailsCard;

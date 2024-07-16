import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import BackButton from '../../components/backbutton';
import SearchBar from '../../components/searchBar';
import FindDoctorCard from '../../components/findDoctorCard';

const FindDoctor = () => {
  return (
    <View style={styles.container}>
      <BackButton headingName={'Find Doctors'} />
      <View style={styles.seacrchBarBox}>
        <SearchBar />
      </View>
      <View style={styles.findDoctorCard}>
        <FindDoctorCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seacrchBarBox: {
    marginTop: 100,
    alignItems: 'center',
  },
  findDoctorCard: {
    flex: 1,
    marginTop: 40,
    alignSelf: 'center',
  },
});
export default FindDoctor;

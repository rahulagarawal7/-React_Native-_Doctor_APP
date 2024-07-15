import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import BackButton from '../components/backbutton';
import SearchBar from '../components/searchBar';
import FindDoctorCard from '../components/findDoctorCard';

const FindDoctor = () => {
  return (
    <SafeAreaView>
      <View>
        <BackButton headingName={'Find Doctors'} url={'home'} />
        <View style={styles.seacrchBarBox}>
          <SearchBar />
        </View>
        <View style={styles.findDoctorCard}>
          <FindDoctorCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  seacrchBarBox: {
    marginTop: 100,
    alignItems: 'center',
  },
  findDoctorCard: {
    marginTop: 40,
    alignSelf: 'center',
    marginBottom: 300,
  },
});
export default FindDoctor;

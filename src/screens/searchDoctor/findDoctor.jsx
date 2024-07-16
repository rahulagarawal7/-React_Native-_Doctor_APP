import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import BackButton from '../../components/backbutton';
import SearchBar from '../../components/searchBar';
import FindDoctorCard from '../../components/findDoctorCard';
import backGroubdImage from '../../assets/background/bg.png';

const FindDoctor = () => {
  return (
    <ImageBackground
      source={backGroubdImage}
      style={styles.backGroubdImageStyle}>
      <BackButton headingName={'Find Doctors'} />
      <View style={styles.seacrchBarBox}>
        <SearchBar />
      </View>
      <View style={styles.findDoctorCard}>
        <FindDoctorCard />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backGroubdImageStyle: {
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

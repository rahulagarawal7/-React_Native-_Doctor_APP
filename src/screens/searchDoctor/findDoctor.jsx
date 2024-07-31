import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import BackButton from '../../components/backButton';
import SearchBar from '../../components/searchBar';
import FindDoctorCard from '../../components/findDoctorCard';
import backGroundImage from '../../assets/background/bg.png';

const FindDoctor = () => {
  return (
    <ImageBackground
      source={backGroundImage}
      style={styles.backGroundImageStyle}>
      <View style={styles.box}>
        <BackButton headingName={'Find Doctors'} />
      </View>

      <View style={styles.searchBarBox}>
        <SearchBar />
      </View>

      <View style={styles.findDoctorCard}>
        <FindDoctorCard />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
  searchBarBox: {
    marginTop: 50,
    alignItems: 'center',
  },
  findDoctorCard: {
    flex: 1,
    marginTop: 30,
    alignSelf: 'center',
  },
  box: {
    height: 50,
  },
});
export default FindDoctor;

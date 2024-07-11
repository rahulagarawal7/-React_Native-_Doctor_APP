import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import UserImg from '../assets/images/Ellipse26.png';
import TypesOfDoctorCard from '../components/typesOfDoctorsCard';
import PopularDoctor from '../components/popularDoctor';
import FeatureDoctorCard from '../components/featureDoctorCard';
import SearchBar from '../components/searchBar';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <StatusBar
          translucent={true}
          style="light"
          backgroundColor={'#07D9AD'}
        />
        <View style={styles.topHeadingBox}>
          <View>
            <Text style={styles.userNameStyle}>Hi Handwerker!</Text>
            <Text style={styles.headingTextStyle}>Find Your Doctor</Text>
          </View>
          <Image style={styles.userImgStyle} source={UserImg} />
        </View>
        <View style={styles.searchBarStyle}>
          <SearchBar />
        </View>
        <View style={styles.typesOfDoctorBox}>
          <TypesOfDoctorCard />
        </View>

        <View style={styles.popularDoctorBox}>
          <Text style={styles.doctorTextStyle}>Popular Doctor</Text>
          <Text style={styles.sellAllDoctorTextStyle}>see all</Text>
        </View>
        <PopularDoctor />
        <View style={styles.featureDoctorBox}>
          <Text style={styles.doctorTextStyle}>Feature Doctor</Text>
          <Text style={styles.sellAllDoctorTextStyle}>see all</Text>
        </View>
        <FeatureDoctorCard />
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  topHeadingBox: {
    height: 156,
    backgroundColor: '#07D9AD',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  userNameStyle: {
    width: 136,
    height: 22,
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  headingTextStyle: {
    width: 205,
    height: 30,
    fontSize: 25,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  userImgStyle: {
    height: 70,
    width: 70,
  },
  searchBarStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  typesOfDoctorBox: {
    height: 160,
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
  },
  popularDoctorBox: {
    marginLeft: 8,
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  doctorTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
    marginLeft: 19,
  },
  sellAllDoctorTextStyle: {
    color: '#333333',
    marginRight: 19,
  },
  featureDoctorBox: {
    marginLeft: 8,
    height: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Home;

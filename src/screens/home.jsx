import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {UserImage} from '../assets/index';
import TypesOfDoctorCard from '../components/typesOfDoctorsCard';
import FeatureDoctorCard from '../components/featureDoctorCard';
import SearchBar from '../components/searchBar';
import color from '../commons/colors';
import PopularDoctorCard from '../components/popularDoctorCard';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={styles.topHeadingBox}>
          <View>
            <Text style={styles.userNameStyle}>Hi Handwerker!</Text>
            <Text style={styles.headingTextStyle}>Find Your Doctor</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.userImgStyle} source={UserImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBarStyle}>
          <SearchBar />
        </View>
        <View style={styles.typesOfDoctorBox}>
          <TypesOfDoctorCard />
        </View>
        <PopularDoctorCard />
        <FeatureDoctorCard />
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  topHeadingBox: {
    height: 156,
    backgroundColor: color.backgroundColor,
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
    color: color.userNameTextColor,
  },
  headingTextStyle: {
    width: 205,
    height: 30,
    fontSize: 25,
    fontWeight: '700',
    color: color.commonTextColor,
  },
  userImgStyle: {
    height: 70,
    width: 70,
    borderRadius: 70,
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
});
export default Home;

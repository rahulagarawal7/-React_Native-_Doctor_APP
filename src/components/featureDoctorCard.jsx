import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import color from '../commons/colors';
const Images = [
  {
    id: 1,
    url: require('../../src/assets/images/featureDoctor1.png'),
    name: 'Dr.Fillerup',
    fee: '$ 25.00/ hours',
  },
  {
    id: 2,
    url: require('../../src/assets/images/featureDoctor2.png'),
    name: 'Dr.Click',
    fee: '$ 25.00/ hours',
  },
  {
    id: 3,
    url: require('../../src/assets/images/featureDoctor3.png'),
    name: 'Dr.Strain',
    fee: '$ 25.00/ hours',
  },
  {
    id: 4,
    url: require('../../src/assets/images/featureDoctor1.png'),
    name: 'Dr.Blessing',
    fee: '$ 25.00/ hours',
  },
];
const FeatureDoctorCard = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={Images}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Image
                source={require('../../src/assets/Logo/featureDoctorRating.png')}
              />
              <Image source={item?.url} />
              <Text style={styles.doctorNameStyle}>{item?.name}</Text>
              <Text style={styles.doctorFeeStyle}>{item?.fee}</Text>
            </View>
          );
        }}
        keyExtractor={item => item?.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  card: {
    width: 96,
    height: 130,
    backgroundColor: color.commonTextColor,
    borderRadius: 6,
    marginLeft: 10,
    marginRight: 10,
    border: 1,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  doctorNameStyle: {
    fontSize: 12,
    fontFamily: '400',
    color: color.headingTextColor,
  },
  doctorFeeStyle: {
    fontSize: 8,
    fontFamily: '400',
    color: color.headingTextColor,
  },
});

export default FeatureDoctorCard;

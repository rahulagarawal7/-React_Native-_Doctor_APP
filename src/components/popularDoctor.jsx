import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import color from '../commons/colors';

const Images = [
  {
    id: 1,
    url: require('../../src/assets/images/populatDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Medical specialist',
  },
  {
    id: 2,
    url: require('../../src/assets/images/populatDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Dentist specialist',
  },
  {
    id: 3,
    url: require('../../src/assets/images/populatDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Medical specialist',
  },
  {
    id: 4,
    url: require('../../src/assets/images/populatDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Dentist specialist',
  },
];
const PopularDoctor = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={Images}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Image style={styles.imageStyle} source={item?.url} />
              <View style={styles.cardDetailsBox}>
                <Text style={styles.doctorNameTextStyle}>{item?.name}</Text>
                <Text style={styles.doctorTypeTextStyle}>{item?.type}</Text>
                <Image
                  style={styles?.ratingStyle}
                  source={require('../../src/assets/icons/star.png')}
                />
              </View>
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
    width: 190,
    height: 264,
    backgroundColor: color.commonTextColor,
    borderRadius: 12,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: color.shadowColor,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
  },
  imageStyle: {
    height: 180,
    width: 190,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  cardDetailsBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorNameTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  doctorTypeTextStyle: {
    color: color.headingTextColor,
    fontSize: 12,
    fontWeight: '400',
  },
  ratingStyle: {
    height: 12,
    width: 80,
  },
});

export default PopularDoctor;

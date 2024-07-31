import React from 'react';
import {FlatList, View} from 'react-native';

import DrCard from './drCard';
const Images = [
  {
    id: 1,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Filler',
    type: 'Tooth Dentist',
    exp: '7 Years experience',
    available: 'Next Available',
    percent: '87%',
    stories: '69 Patient Stories',
    time: '10:00 AM tomorrow',
    address: 'Upasana Dental Clinic, salt lake',
    rating: require('../../src/assets/icons/star.png'),
  },
  {
    id: 2,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Click',
    type: 'Tooth Dentist',
    exp: '7 Years experience',
    available: 'Next Available',
    percent: '87%',
    stories: '69 Patient Stories',
    time: '10:00 AM tomorrow',
    address: 'Upasana Dental Clinic, salt lake',
    rating: require('../../src/assets/icons/star.png'),
  },
  {
    id: 3,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Strain',
    type: 'Tooth Dentist',
    exp: '7 Years experience',
    available: 'Next Available',
    percent: '87%',
    stories: '69 Patient Stories',
    time: '10:00 AM tomorrow',
    address: 'Upasana Dental Clinic, salt lake',
    rating: require('../../src/assets/icons/star.png'),
  },
  {
    id: 4,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Blessing',
    type: 'Tooth Dentist',
    exp: '7 Years experience',
    available: 'Next Available',
    percent: '87%',
    stories: '69 Patient Stories',
    time: '10:00 AM tomorrow',
    address: 'Upasana Dental Clinic, salt lake',
    rating: require('../../src/assets/icons/star.png'),
  },
];

const FindDoctorCard = () => {
  return (
    <View>
      <FlatList data={Images} renderItem={({item}) => <DrCard item={item} />} />
    </View>
  );
};

export default FindDoctorCard;

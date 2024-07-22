import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../commons/colors';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 'p1',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'p2',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'p3',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'p4',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Blessing',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
];
const PopularDoctorCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.popularDoctorBox}>
        <Text style={styles.doctorTextStyle}>Popular Doctor</Text>
        <Text
          onPress={() => {
            navigation.navigate('popularDoctors', {data: data});
          }}
          style={styles.sellAllDoctorTextStyle}>
          see all
        </Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('doctorDetailsScreen', {data: item})
              }
              style={styles.card}>
              <Image style={styles.imageStyle} source={item?.url} />
              <View style={styles.cardDetailsBox}>
                <Text style={styles.doctorNameTextStyle}>{item?.name}</Text>
                <Text style={styles.doctorTypeTextStyle}>{item?.type}</Text>
                <Image
                  style={styles?.ratingStyle}
                  source={require('../../src/assets/icons/star.png')}
                />
              </View>
            </TouchableOpacity>
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
  doctorTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: color.headingTextColor,
    marginLeft: 19,
  },
  sellAllDoctorTextStyle: {
    color: color.containTextColor,
    marginRight: 19,
  },
  popularDoctorBox: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default PopularDoctorCard;

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
const Images = [
  {
    id: 'f1',
    url: require('../../src/assets/images/featureDoctor1.png'),
    name: 'Dr.Fillers',
    fee: '$ 25.00/ hours',
    type: 'Dentist specialist',
  },
  {
    id: 'f2',
    url: require('../../src/assets/images/featureDoctor2.png'),
    name: 'Dr.Click',
    fee: '$ 25.00/ hours',
    type: 'Medical specialist',
  },
  {
    id: 'f3',
    url: require('../../src/assets/images/featureDoctor3.png'),
    name: 'Dr.Strain',
    fee: '$ 25.00/ hours',
    type: 'Dentist specialist',
  },
  {
    id: 'f4',
    url: require('../../src/assets/images/featureDoctor1.png'),
    name: 'Dr.Blessing',
    fee: '$ 25.00/ hours',
    type: 'Medical specialist',
  },
];
const FeatureDoctorCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.featureDoctorBox}>
        <Text style={styles.doctorTextStyle}>Feature Doctor</Text>
        <Text
          onPress={() => {
            navigation.navigate('featureDoctors', {data: Images});
          }}
          style={styles.sellAllDoctorTextStyle}>
          see all
        </Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={Images}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('doctorDetailsScreen', {data: item})
              }>
              <Image
                source={require('../../src/assets/Logo/featureDoctorRating.png')}
              />
              <Image source={item?.url} />
              <Text style={styles.doctorNameStyle}>{item?.name}</Text>
              <Text style={styles.doctorFeeStyle}>{item?.fee}</Text>
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
  featureDoctorBox: {
    marginLeft: 8,
    height: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../commons/colors';
import heartIcon from '../assets/icons/heart.png';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 2,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 3,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 4,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 5,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 6,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 7,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 8,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 9,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 10,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 11,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 12,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 13,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 14,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 15,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 16,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 17,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 18,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 19,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 20,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 21,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 22,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 23,
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 24,
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
];

const SeeByType = ({type}) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        numColumns={2}
        data={data.filter(ele => ele.type === type)}
        keyExtractor={data?.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('doctorDetailsScreen', {data: item})
              }
              style={styles.container}>
              <View style={styles.heartIconStyle}>
                <Image source={heartIcon} />
              </View>
              <View style={styles.containerStyle}>
                <Image style={styles.drImgStyle} source={item?.url} />
                <Text style={styles.drNameTextStyle}>{item?.name}</Text>
                <Text style={styles.drTypeTextStyle}>{item?.type}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

SeeByType.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    width: 160,
    borderRadius: 6,
    margin: 5,
    backgroundColor: color.commonTextColor,
  },
  heartIconStyle: {
    padding: 10,
    alignItems: 'flex-end',
    height: 30,
  },
  containerStyle: {
    height: 131,
    width: 108,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  drImgStyle: {
    height: 84,
    width: 84,
    borderRadius: 84,
  },
  drNameTextStyle: {
    fontSize: 15,
    fontWeight: '400',
    color: color.headingTextColor,
  },
  drTypeTextStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: color.buttonColor,
  },
});
export default SeeByType;

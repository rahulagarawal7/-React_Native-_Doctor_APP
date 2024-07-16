import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import color from '../../commons/colors';

const profile = [
  {
    id: 1,
    url: require('/Users/dr.mac/Desktop/DoctorAPP/src/assets/images/self.png'),
    name: 'My Self',
  },
  {
    id: 2,
    url: require('/Users/dr.mac/Desktop/DoctorAPP/src/assets/images/boy.png'),
    name: 'Child',
  },
  {
    id: 3,
    url: require('/Users/dr.mac/Desktop/DoctorAPP/src/assets/images/self.png'),
    name: 'My Self',
  },
  {
    id: 4,
    url: require('../../assets/images/self.png'),
    name: 'My Self',
  },
];

const PatientProfile = () => {
  return (
    <View>
      <Text style={styles.headingTextStyle}>Who is this patient? </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={profile}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Image style={styles.imgStyle} source={item?.url} />

              <View style={styles.TextBox}>
                <Text style={styles.textStyle}>{item?.name}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headingTextStyle: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  card: {
    marginTop: 30,
    height: 160,
    width: 100,
    backgroundColor: color.commonTextColor,
    marginLeft: 10,
    borderRadius: 10,
  },
  TextBox: {
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: 125,
    width: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: color.containtTextColor,
  },
});

export default PatientProfile;

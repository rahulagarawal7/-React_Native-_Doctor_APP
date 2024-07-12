import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import color from '../commons/colors';

const Images = [
  {
    id: 1,
    url: require('../../src/assets/images/teeth.png'),
    bg: '#3854F5',
  },
  {
    id: 2,
    url: require('../../src/assets/images/heart.png'),
    bg: '#CD7AC',
  },
  {
    id: 3,
    url: require('../../src/assets/images/eye.png'),
    bg: '#FA7F44',
  },
  {
    id: 4,
    url: require('../../src/assets/images/stomach.png'),
    bg: '#F94F51',
  },
];

const TypesOfDoctorCard = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={Images}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Image source={item?.url} />
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
    height: 100,
    width: 90,
    backgroundColor: color.typeofDoctorBackgroundColor,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
});

export default TypesOfDoctorCard;

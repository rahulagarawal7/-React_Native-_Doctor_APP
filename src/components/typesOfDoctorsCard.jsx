import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../commons/colors';
import {useNavigation} from '@react-navigation/native';

const Images = [
  {
    id: 1,
    url: require('../../src/assets/images/teeth.png'),
    bg: '#3854F5',
    type: 'Dentist specialist',
  },
  {
    id: 2,
    url: require('../../src/assets/images/heart.png'),
    bg: '#CD7AC',
    type: 'Cardiologist specialist',
  },
  {
    id: 3,
    url: require('../../src/assets/images/eye.png'),
    bg: '#FA7F44',
    type: 'Eyes specialist',
  },
  {
    id: 4,
    url: require('../../src/assets/images/stomach.png'),
    bg: '#F94F51',
    type: 'Medical specialist',
  },
];

const TypesOfDoctorCard = () => {
  const navigation = useNavigation();

  const handlePress = type => {
    navigation.navigate('doctorListType', {type: type});
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={Images}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handlePress(item.type)}>
              <Image source={item?.url} />
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

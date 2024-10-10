import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AddImageLogo, BoyImage} from '../../../assets/index';

const AddImageCard = () => {
  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.card}>
        <Image source={BoyImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image source={AddImageLogo} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    gap: 10,
    height: 280,
    width: 350,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  card: {
    marginTop: 5,
    height: 125,
    width: 100,
    borderRadius: 6,
  },
});
export default AddImageCard;

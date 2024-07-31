import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import img from '../../../assets/images/boy.png';
import addImg from '../../../assets/Logo/addImages.png';

const AddImageCard = () => {
  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.card}>
        <Image source={img} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image source={addImg} />
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

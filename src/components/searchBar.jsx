import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import searchImg from '../../src/assets/Logo/search.png';
import crossImg from '../../src/assets/Logo/cross.png';
import color from '../commons/colors';
import {useNavigation} from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.barBox}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('findDoctor');
        }}>
        <Image style={styles.searchImgStyle} source={searchImg} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search..."
        keyboardType="text"
        style={styles.inputTextStyle}
      />
      <Image style={styles.crossImgStyle} source={crossImg} />
    </View>
  );
};
const styles = StyleSheet.create({
  barBox: {
    position: 'absolute',
    top: -30,
    height: 54,
    width: 335,
    borderRadius: 6,
    backgroundColor: color.commonTextColor,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  searchImgStyle: {
    height: 13,
    width: 13,
  },
  inputTextStyle: {
    height: 18,
    width: 250,
    fontSize: 18,
    fontWeight: '400',
  },
  crossImgStyle: {
    height: 12,
    width: 12,
  },
});
export default SearchBar;

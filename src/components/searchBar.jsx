import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import searchImg from '../../src/assets/Logo/search.png';
import color from '../commons/colors';
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

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [searchOptions, setSearchOptions] = useState([]);

  const filterSearch = Images => {
    const val = Images.filter(item =>
      item.name.toLowerCase().includes(search.toLocaleLowerCase()),
    );
    if (search.length > 0) setSearchOptions(val);
  };

  useEffect(() => {
    filterSearch(Images);
  }, [search]);

  const handleSearch = value => {
    if (value.length === 0) {
      setSearchOptions([]);
    }
    setSearch(value);
  };

  return (
    <>
      <View style={styles.barBox}>
        <Image style={styles.searchImgStyle} source={searchImg} />
        <TextInput
          onBlur={() => setSearchOptions([])}
          clearButtonMode="always"
          value={search}
          onChangeText={e => handleSearch(e)}
          placeholder="Search..."
          placeholderTextColor={color.containTextColor}
          keyboardType="text"
          style={styles.inputTextStyle}
        />
      </View>
      {searchOptions.length > 1 && (
        <>
          {searchOptions.map(item => {
            return (
              <View key={item.id} style={styles.cardBox}>
                <DrCard item={item} />
              </View>
            );
          })}
        </>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  barBox: {
    position: 'absolute',
    top: -30,
    height: 54,
    width: 355,
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
    height: 40,
    width: 250,
    fontSize: 16,
    fontWeight: '300',
    color: color.containTextColor,
  },
  cardBox: {
    backgroundColor: 'white',
    marginTop: 15,
  },
});
export default SearchBar;

import React from 'react';
import {StyleSheet, View} from 'react-native';
import BackButton from '../components/backbutton';
import SelectTimeDrCard from '../components/selectTimeDrCard';
import BookDate from '../components/bookDate';
import PropTypes from 'prop-types';

const SelectTimeScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View>
      <BackButton headingName={'Select Time'} url={'findDoctor'} />
      <View style={styles.SelectTimeDrCardStyle}>
        <SelectTimeDrCard data={item} />
      </View>
      <View style={styles.bookDateStyle}>
        <BookDate />
      </View>
    </View>
  );
};

SelectTimeScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      item: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  SelectTimeDrCardStyle: {
    alignSelf: 'center',
    marginTop: 30,
  },
  bookDateStyle: {
    marginTop: 25,
    marginLeft: 10,
  },
});
export default SelectTimeScreen;

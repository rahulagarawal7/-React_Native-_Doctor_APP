import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import SelectTimeDrCard from '../../components/selectTimeDrCard';
import BookDate from '../../components/bookDate';
import PropTypes from 'prop-types';
import BackButton from '../../components/backButton';
import backGroundImage from '../../assets/background/bg.png';

const SelectTimeScreen = ({route}) => {
  const {item} = route.params;
  return (
    <ImageBackground
      source={backGroundImage}
      style={styles.backGroundImageStyle}>
      <BackButton headingName={'Select Time'} />
      <View style={styles.SelectTimeDrCardStyle}>
        <SelectTimeDrCard data={item} />
      </View>
      <View style={styles.bookDateStyle}>
        <BookDate />
      </View>
    </ImageBackground>
  );
};

SelectTimeScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      item: PropTypes.object?.isRequired,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
  SelectTimeDrCardStyle: {
    alignSelf: 'center',
    marginTop: 70,
  },
  bookDateStyle: {
    marginTop: 20,
    marginLeft: 10,
  },
});
export default SelectTimeScreen;

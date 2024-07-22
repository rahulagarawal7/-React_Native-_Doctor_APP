import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import BackButton from '../components/backButton';
import PropTypes from 'prop-types';
import backGroundImage from '../assets/background/bg.png';
import SeeByType from '../components/seeByType';

const DoctorListType = ({route}) => {
  const {type} = route.params;
  return (
    <ImageBackground
      source={backGroundImage}
      style={styles.backGroundImageStyle}>
      <BackButton headingName={type} />
      <View style={styles.seeAllCardStyle}>
        <SeeByType type={type} />
      </View>
    </ImageBackground>
  );
};

DoctorListType.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

const styles = StyleSheet.create({
  seeAllCardStyle: {
    marginTop: 60,
    alignSelf: 'center',
  },
  backGroundImageStyle: {
    flex: 1,
  },
});
export default DoctorListType;

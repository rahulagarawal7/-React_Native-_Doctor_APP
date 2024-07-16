import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import BackButton from '../../components/backbutton';
import SeeAllCard from '../../components/seeAllCard';
import PropTypes from 'prop-types';
import backGroubdImage from '../../assets/background/bg.png';

const FeatureDoctors = ({route}) => {
  const {data} = route.params;
  return (
    <ImageBackground
      source={backGroubdImage}
      style={styles.backGroubdImageStyle}>
      <BackButton headingName="Feature Doctor" />
      <View style={styles.seeAllCardStyle}>
        <SeeAllCard data={data} />
      </View>
    </ImageBackground>
  );
};

FeatureDoctors.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      data: PropTypes?.array?.isRequired,
    }).isRequired,
  }).isRequired,
};
const styles = StyleSheet.create({
  seeAllCardStyle: {
    marginTop: 60,
  },
  backGroubdImageStyle: {
    flex: 1,
  },
});
export default FeatureDoctors;

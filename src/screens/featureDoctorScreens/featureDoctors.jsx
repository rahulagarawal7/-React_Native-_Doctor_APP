import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import BackButton from '../../components/backButton';
import SeeAllCard from '../../components/seeAllCard';
import PropTypes from 'prop-types';
import backGroundImage from '../../assets/background/bg.png';

const FeatureDoctors = ({route}) => {
  const {data} = route.params;
  return (
    <ImageBackground
      source={backGroundImage}
      style={styles.backGroundImageStyle}>
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
    alignSelf: 'center',
  },
  backGroundImageStyle: {
    flex: 1,
  },
});
export default FeatureDoctors;

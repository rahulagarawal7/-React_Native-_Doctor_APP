import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import SeeAllCard from '../../components/seeAllCard';
import BackButton from '../../components/backButton';
import PropTypes from 'prop-types';
import {BackgroundImage} from '../../assets/index';

const PopularDoctors = ({route}) => {
  const {data} = route.params;
  return (
    <ImageBackground
      source={BackgroundImage}
      style={styles.backGroundImageStyle}>
      <BackButton headingName="Popular Doctor" />
      <View style={styles.seeAllCardStyle}>
        <SeeAllCard data={data} />
      </View>
    </ImageBackground>
  );
};

PopularDoctors.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      data: PropTypes.array?.isRequired,
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
export default PopularDoctors;

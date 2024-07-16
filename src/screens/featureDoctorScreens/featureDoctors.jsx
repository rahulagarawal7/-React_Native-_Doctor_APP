import React from 'react';
import {StyleSheet, View} from 'react-native';
import BackButton from '../../components/backbutton';
import SeeAllCard from '../../components/seeAllCard';
import PropTypes from 'prop-types';
const FeatureDoctors = ({route}) => {
  const {data} = route.params;
  return (
    <View>
      <BackButton headingName="Feature Doctor" />
      <View style={styles.seeAllCardStyle}>
        <SeeAllCard data={data} />
      </View>
    </View>
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
});
export default FeatureDoctors;

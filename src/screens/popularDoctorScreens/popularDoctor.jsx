import React from 'react';
import {StyleSheet, View} from 'react-native';
import SeeAllCard from '../../components/seeAllCard';
import BackButton from '../../components/backbutton';
import PropTypes from 'prop-types';

const PopularDoctors = ({route}) => {
  const {data} = route.params;
  return (
    <View>
      <BackButton headingName="Popular Doctor" />
      <View style={styles.seeAllCardStyle}>
        <SeeAllCard data={data} />
      </View>
    </View>
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
  },
});
export default PopularDoctors;

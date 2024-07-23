import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import color from '../../../commons/colors';

const HeadingCard = ({heading, contain}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTextStyle}>{heading}</Text>

      <Text style={styles.containTextStyle}>{contain}</Text>
    </View>
  );
};

HeadingCard.propTypes = {
  heading: PropTypes.string.isRequired,
  contain: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 290,
    gap: 15,
    margin: 20,
    marginTop: 50,
  },
  headingTextStyle: {
    fontSize: 24,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  containTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: color.containTextColor,
  },
});

export default HeadingCard;

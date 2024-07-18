import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import color from '../../commons/colors';
import PropTypes from 'prop-types';

const HeadingText = ({heading, contain}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTextStyle}>{heading}</Text>
      <Text style={styles.containTextStyle}>{contain}</Text>
    </View>
  );
};

HeadingText.propTypes = {
  heading: PropTypes.string.isRequired,
  contain: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 290,
    alignSelf: 'center',
  },
  headingTextStyle: {
    fontSize: 24,
    fontWeight: '500',
    color: color.headingTextColor,
    textAlign: 'center',
  },
  containTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: color.containTextColor,
    textAlign: 'center',
  },
});

export default HeadingText;

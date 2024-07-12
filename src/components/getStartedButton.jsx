import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import color from '../commons/colors';
const GetStartedButton = ({handleButton}) => {
  return (
    <TouchableOpacity style={styles.btnBox} onPress={handleButton}>
      <Text style={styles.btnTextStyle}>Get Started</Text>
    </TouchableOpacity>
  );
};

GetStartedButton.propTypes = {
  handleButton: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  btnBox: {
    height: 54,
    width: 295,
    backgroundColor: color.buttonColor,
    borderRadius: 10,
    alignSelf: 'center',
  },
  btnTextStyle: {
    color: color.userNameTextColor,
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
  },
});

export default GetStartedButton;

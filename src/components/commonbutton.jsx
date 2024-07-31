import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../commons/colors';
import PropTypes from 'prop-types';

const CommonButton = ({btnText, handleSubmit}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => handleSubmit()} style={styles.btnBox}>
        <Text style={styles.btnTextStyle}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

CommonButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
};

const styles = StyleSheet.create({
  btnTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: color.commonTextColor,
  },
  btnBox: {
    height: 54,
    width: 295,
    backgroundColor: color.buttonColor,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default CommonButton;

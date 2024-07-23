import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import color from '../../commons/colors';
import PropTypes from 'prop-types';

const InputTextField = ({placeholder, keyboardType, customStyles}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, customStyles]}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

InputTextField.propTypes = {
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  customStyles: PropTypes.object,
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  input: {
    backgroundColor: color.commonTextColor,
    width: 335,
    height: 54,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 12,
    borderColor: color.containTextColor,
    color: color.containTextColor,
    fontSize: 16,
    fontWeight: '300',
  },
});
export default InputTextField;

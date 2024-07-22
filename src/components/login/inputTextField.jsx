import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import color from '../../commons/colors';

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

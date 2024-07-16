import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../commons/colors';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

const CommonButton = ({btnText, url}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(url)}
        style={styles.btnBox}>
        <Text style={styles.btnTextStyle}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

CommonButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
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

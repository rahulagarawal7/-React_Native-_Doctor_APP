import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import backArrow from '../../src/assets/icons/backArror.png';
import color from '../commons/colors';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

const BackButton = ({headingName, url}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation?.navigate(url)}>
          <Image style={styles.backButtonStyle} source={backArrow} />
        </TouchableOpacity>
        <Text style={styles.headingNameText}>{headingName}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    left: 20,
    top: 10,
    height: 40,
    flexDirection: 'row',
    position: 'absolute',
  },
  backButtonStyle: {
    height: 40,
    width: 40,
  },
  headingNameText: {
    marginLeft: 29,
    fontSize: 18,
    fontWeight: '400',
    color: color.backButtonHeadingTextColor,
    top: 9,
  },
});
BackButton.propTypes = {
  headingName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default BackButton;

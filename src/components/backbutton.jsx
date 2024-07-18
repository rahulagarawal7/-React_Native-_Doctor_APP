import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../commons/colors';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import backArrow from '../assets/Logo/back-arrow.png';

const BackButton = ({headingName}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backButtonStyle}>
            <Image source={backArrow} />
          </View>
        </TouchableOpacity>
        <Text style={styles.headingNameText}>{headingName}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 15,
    flexDirection: 'row',
    position: 'absolute',
    height: 40,
  },
  backButtonStyle: {
    height: 30,
    width: 30,
    backgroundColor: color.commonTextColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  headingNameText: {
    marginTop: 5,
    marginLeft: 29,
    fontSize: 18,
    fontWeight: '400',
    color: color.backButtonHeadingTextColor,
  },
});
BackButton.propTypes = {
  headingName: PropTypes.string.isRequired,
};
export default BackButton;

import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import CommonButton from '../commonButton';
import HeadingText from '../login/headingText';
import PropTypes from 'prop-types';

const AddCard = ({
  image,
  headingName,
  headingContent,
  btnName,
  handlerOnPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.img} source={image} />
        <HeadingText contain={headingContent} heading={headingName} />
        <CommonButton btnText={btnName} handleSubmit={handlerOnPress} />
      </View>
    </View>
  );
};
AddCard.propTypes = {
  image: PropTypes.any,
  headingName: PropTypes.string,
  headingContent: PropTypes.string,
  btnName: PropTypes.string,
  handlerOnPress: PropTypes.func,
};
const styles = StyleSheet.create({
  container: {
    height: 700,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  box: {
    height: 500,
    width: 300,
    justifyContent: 'space-around',
  },
  img: {
    alignSelf: 'center',
  },
});

export default AddCard;

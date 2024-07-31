import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackgroundImage, ArrowIcon} from '../../../assets/index';
import BackButton from '../../../components/backButton';
import color from '../../../commons/colors';
import PropTypes from 'prop-types';
const ListCard = ({name}) => {
  return (
    <TouchableOpacity>
      <View style={styles.innerBox}>
        <Text style={styles.textStyle}>{name}</Text>
        <Image style={styles.arrowStyle} source={ArrowIcon} />
      </View>
    </TouchableOpacity>
  );
};
ListCard.propTypes = {
  name: PropTypes.string,
};
const HelpCenter = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={BackgroundImage}>
      <BackButton headingName="Help Center" />

      <TextInput
        placeholder="i have an issue with"
        keyboardType="text"
        placeholderTextColor={color.buttonColor}
        style={styles.inputTextStyle}
      />

      <ScrollView>
        <View style={styles.box}>
          <ListCard name={'Booking a new Appointment'} />
          <ListCard name={'Existing Appointment'} />
          <ListCard name={'Online consultations'} />
          <ListCard name={'Feedbacks'} />
          <ListCard name={'Medicine orders'} />
          <ListCard name={'Diagnostic Tests'} />
          <ListCard name={'Health plans'} />
          <ListCard name={'My account and Practo Drive'} />
          <ListCard name={'Have a feature in mind'} />
          <ListCard name={'Other issues'} />
        </View>
        <View style={styles.line} />
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },

  inputTextStyle: {
    marginTop: 80,
    padding: 10,
    borderRadius: 4,
    height: 54,
    width: 336,
    fontSize: 18,
    fontWeight: '300',
    backgroundColor: color.commonTextColor,
    alignSelf: 'center',
    color: color.buttonColor,
    marginBottom: 10,
  },
  box: {
    marginTop: 20,
    gap: 20,
  },
  arrowStyle: {
    height: 15,
    marginTop: 5,
    width: 7,
  },
  innerBox: {
    flexDirection: 'row',
    height: 30,
    width: 350,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: '300',
    fontSize: 18,
    color: color.containTextColor,
  },
  line: {
    marginTop: 40,
    height: 5,
    width: 160,
    alignSelf: 'center',
    backgroundColor: color.headingTextColor,
    borderRadius: 10,
  },
});
export default HelpCenter;

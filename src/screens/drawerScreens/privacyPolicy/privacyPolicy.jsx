import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BackgroundImage, GreenCircle} from '../../../assets/index';
import PropTypes from 'prop-types';
import BackButton from '../../../components/backButton';
import color from '../../../commons/colors';

const Points = ({data}) => {
  return (
    <View style={styles.pointsBox}>
      <Image style={styles.pointsBoxImgStyle} source={GreenCircle} />
      <Text style={styles.pointsBoxTextStyle}>{data}</Text>
    </View>
  );
};

const PrivacyPolicy = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={BackgroundImage}>
      <BackButton headingName="Privacy & Policy" />
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.headingTextBox}>
          <Text style={styles.headingTextStyle}>
            Doctor Hunt Apps Privacy Policy
          </Text>
        </View>
        <View style={styles.contentTextBox}>
          <Text style={styles.contentTextBoxStyle}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words believable. It is a long established
            fact that reader will distracted by the readable content of a page
            when looking at its layout. The point of using Lorem Ipsum is that
            it has a moreIt is a long established fact that reader will
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more
          </Text>
        </View>
        <View style={styles.pointBox}>
          <Points
            data={
              'The standard chunk of lorem Ipsum used since  1500s is reproduced below for those interested. '
            }
          />
          <Points
            data={
              'The standard chunk of lorem Ipsum used since  1500s is reproduced below for those interested. '
            }
          />
          <Points
            data={
              'The standard chunk of lorem Ipsum used since  1500s is reproduced below for those interested. '
            }
          />
        </View>
        <View style={styles.lastContentBox}>
          <Text style={styles.contentTextBoxStyle}>
            It is a long established fact that reader distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a moreIt is a long established.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
Points.propTypes = {
  data: PropTypes.string,
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    marginTop: 80,
  },
  headingTextBox: {
    height: 30,
    width: 325,
    alignSelf: 'center',
  },
  headingTextStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: color.containTextColor,
  },
  contentTextBox: {
    height: 250,
    width: 325,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  contentTextBoxStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: color.containTextColor,
    justifyContent: 'center',
  },
  pointBox: {
    height: 252,
    width: 320,
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  pointsBox: {
    gap: 5,
    flexDirection: 'row',
  },
  pointsBoxTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: color.containTextColor,
  },
  pointsBoxImgStyle: {
    marginTop: 5,
  },
  lastContentBox: {
    width: 325,
    alignSelf: 'center',
  },
});
export default PrivacyPolicy;

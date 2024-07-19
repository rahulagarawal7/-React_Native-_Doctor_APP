import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../commons/colors';
import rating from '../assets/icons/star.png';
import heartIcon from '../assets/icons/heart.png';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

const DoctorDetailsCard = ({data, btn}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.card, btn ? styles.withBtn : styles.withOutBtn]}>
      <View style={styles.innerCard}>
        <View style={styles.detailsCard}>
          <Image style={styles.drImg} source={data?.url} />
          <View style={styles.detailBox}>
            <View style={styles.nameBox}>
              <Text style={styles.drNameTextStyle}>{data?.name}</Text>
              <Image source={heartIcon} />
            </View>
            <Text style={styles.drTypeTextStyle}>{data?.type}</Text>
            <View style={styles.ratingBox}>
              <Image source={rating} />
              <Text style={styles.drFeeTextStyle}>{data?.fee}</Text>
            </View>
          </View>
        </View>
        {btn && (
          <View style={styles.btnCard}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('appointmentFirst', {data: data})
              }
              style={styles.btn}>
              <Text style={styles.btnTextStyle}>Book Now</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

DoctorDetailsCard.propTypes = {
  data: PropTypes.object.isRequired,
  btn: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  card: {
    width: 335,
    backgroundColor: color.commonTextColor,
    borderRadius: 8,
    shadowColor: color.headingTextColor,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 3,
  },
  withBtn: {
    height: 170,
  },
  withOutBtn: {
    height: 123,
  },
  innerCard: {
    height: 140,
    width: 315,
    alignSelf: 'center',
    marginTop: 15,
  },
  detailsCard: {
    height: 105,
    flexDirection: 'row',
  },
  drImg: {
    height: 92,
    width: 87,
    borderRadius: 8,
  },
  nameBox: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailBox: {
    marginLeft: 15,
    height: 110,
    width: 210,
    justifyContent: 'center',
  },

  ratingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  drNameTextStyle: {
    height: 30,
    fontSize: 18,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  drTypeTextStyle: {
    height: 30,
    fontSize: 14,
    fontWeight: '300',
    color: color.containTextColor,
  },
  drFeeTextStyle: {
    height: 30,
    fontSize: 16,
    fontWeight: '500',
    color: color.containTextColor,
  },
  btnCard: {
    height: 35,
  },
  btn: {
    height: 35,
    width: 140,
    borderRadius: 4,
    backgroundColor: color.buttonColor,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnTextStyle: {
    color: color.commonTextColor,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
});
export default DoctorDetailsCard;

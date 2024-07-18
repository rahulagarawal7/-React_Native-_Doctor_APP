import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import color from '../commons/colors';
import heartIcon from '../../src/assets/icons/heart.png';
import PropTypes from 'prop-types';
const SelectTimeDrCard = ({data}) => {
  return (
    <View style={styles.cardBox}>
      <View style={styles.innerCard}>
        <View style={styles.firstBox}>
          <Image style={styles.drImgStyle} source={data?.url} />
        </View>
        <View style={styles.secondBox}>
          <View style={styles.detailsBox}>
            <View style={styles.nameBox}>
              <Text style={styles.drNameTextStyle}>{data?.name}</Text>
              <Image source={heartIcon} />
            </View>

            <Text style={styles.drAddressStyle}>{data?.address}</Text>
            <Image source={data?.rating} />
          </View>
        </View>
      </View>
    </View>
  );
};

SelectTimeDrCard.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    name: PropTypes.string,
    address: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  }).isRequired,
};

const styles = StyleSheet.create({
  cardBox: {
    height: 88,
    width: 335,
    borderRadius: 8,
    backgroundColor: color.commonTextColor,
    flexDirection: 'row',
  },
  innerCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drImgStyle: {
    height: 72,
    width: 68,
    borderRadius: 8,
  },
  drNameTextStyle: {
    height: 25,
    width: 115,
    fontSize: 16,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  drAddressStyle: {
    height: 25,
    width: 200,
    fontSize: 11,
    fontWeight: '300',
    color: color.containTextColor,
  },
  detailsBox: {
    marginLeft: 10,
    height: 70,
    width: 240,
    justifyContent: 'center',
  },
  nameBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SelectTimeDrCard;

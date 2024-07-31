import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../commons/colors';
import {GreenCircle, HollowHeartIcon, SolidHeartIcon} from '../assets/index';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

const DrCard = ({item}) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();

  const likeHandlePress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.card}>
      <View style={styles.firstBox}>
        <View style={styles.firstBoxInner}>
          <Image style={styles.doctorImg} source={item?.url} />
          <View style={styles.descriptionBox}>
            <View style={styles.nameBox}>
              <Text style={styles.nameStyle}>{item?.name}</Text>
              {isLiked ? (
                <TouchableOpacity onPress={() => likeHandlePress()}>
                  <Image source={SolidHeartIcon} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => likeHandlePress()}>
                  <Image source={HollowHeartIcon} />
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.typeStyle}>{item?.type}</Text>
            <Text style={styles.expStyle}>{item?.exp}</Text>
            <View style={styles.countBox}>
              <Image source={GreenCircle} />
              <Text style={styles.countBoxTextStyle}>{item.percent}</Text>
              <Image style={styles.circleImgStyle} source={GreenCircle} />
              <Text style={styles.countBoxTextStyle}>{item?.stories}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.secondBox}>
        <View style={styles.timeBoxStyle}>
          <Text style={styles.availableTextStyle}>{item.available}</Text>
          <Text style={styles.timeStyle}>{item?.time}</Text>
        </View>

        <TouchableOpacity
          style={styles.bookBtnStyle}
          onPress={() => navigation.navigate('selectTimeScreen', {item: item})}>
          <Text style={styles.bookBtnTextStyle}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
DrCard.propTypes = {
  item: PropTypes.object,
};

const styles = StyleSheet.create({
  card: {
    height: 170,
    width: 335,
    backgroundColor: color.commonTextColor,
    margin: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  firstBox: {
    height: 100,
    width: 300,
    alignSelf: 'center',
  },
  secondBox: {
    height: 40,
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  firstBoxInner: {
    flex: 1,
    flexDirection: 'row',
  },
  doctorImg: {
    height: 92,
    width: 87,
  },
  descriptionBox: {
    height: 92,
    width: 200,
    alignSelf: 'center',
    marginLeft: 5,
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  typeStyle: {
    height: 20,
    fontSize: 13,
    fontWeight: '400',
    color: color.buttonColor,
  },
  expStyle: {
    height: 20,
    fontSize: 12,
    fontWeight: '400',
    color: color.headingTextColor,
  },
  countBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameBox: {
    height: 25,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleImgStyle: {
    marginLeft: 20,
  },
  countBoxTextStyle: {
    fontWeight: '400',
    fontSize: 12,
    color: color.containTextColor,
  },
  timeBoxStyle: {
    height: 40,
    width: 180,
  },
  bookBtnStyle: {
    height: 34,
    width: 112,
    backgroundColor: color.buttonColor,
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  bookBtnTextStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: color.commonTextColor,
  },
  availableTextStyle: {
    color: color.buttonColor,
    fontWeight: '400',
    fontSize: 13,
  },
  timeStyle: {
    color: color.headingTextColor,
    fontWeight: '400',
    fontSize: 13,
  },
});

export default DrCard;

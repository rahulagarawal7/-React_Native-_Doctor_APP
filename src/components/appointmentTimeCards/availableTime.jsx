import {React} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../../commons/colors';
import PropTypes from 'prop-types';

const time = [
  {time: '10:00', period: 'AM'},
  {time: '10:30', period: 'AM'},
  {time: '11:00', period: 'AM'},
  {time: '12:00', period: 'AM'},
  {time: '1:00', period: 'PM'},
  {time: '2:00', period: 'PM'},
  {time: '3:00', period: 'PM'},
  {time: '4:00', period: 'PM'},
];

const AvailableTime = ({setTime, timeValue}) => {
  const handleSubmit = item => {
    setTime(item);
  };
  return (
    <View>
      <Text style={styles.HeadingTextStyle}>Available Time</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={time}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => handleSubmit(item)}>
              <View
                style={[
                  styles.card,
                  timeValue?.time === item.time &&
                    styles.cardBackgroundColorOnBtnPress,
                ]}>
                <Text
                  style={[
                    styles.textStyle,
                    timeValue?.time === item.time && styles.textColorOnSelect,
                  ]}>
                  {item?.time}

                  {item?.period}
                </Text>
                <Text
                  style={[
                    styles.textStyle,
                    timeValue?.time === item.time && styles.textColorOnSelect,
                  ]}>
                  {item?.period}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

AvailableTime.propTypes = {
  setTime: PropTypes.func,
  timeValue: PropTypes.any,
};
const styles = StyleSheet.create({
  HeadingTextStyle: {
    margin: 20,
    fontSize: 16,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  cardBackgroundColorOnBtnPress: {
    backgroundColor: color.buttonColor,
  },
  textColorOnSelect: {
    color: color.commonTextColor,
  },
  card: {
    marginLeft: 10,
    height: 60,
    width: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: color.opacityColor,
  },
  textStyle: {
    fontSize: 11,
    fontWeight: '400',
    color: color.headingTextColor,
  },
});
export default AvailableTime;

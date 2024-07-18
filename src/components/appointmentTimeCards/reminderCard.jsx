import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../../commons/colors';

const ReminderCard = () => {
  const [btnPress, setBtnPress] = useState(false);
  const handleSubmit = item => {
    setBtnPress(item);
  };
  const time = [
    '60',
    '55',
    '50',
    '45',
    '40',
    '35',
    '30',
    '25',
    '20',
    '15',
    '10',
  ];

  return (
    <View>
      <Text style={styles.headingTextStyle}>Reminder Me Before </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={time}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => handleSubmit(item)}>
              <View
                style={[styles.card, btnPress === item && styles.cardOnPress]}>
                <Text
                  style={[
                    styles.textStyle,
                    btnPress === item && styles.textOnPress,
                  ]}>
                  {item}
                </Text>
                <Text
                  style={[
                    styles.textStyle,
                    btnPress === item && styles.textOnPress,
                  ]}>
                  Mints
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    marginLeft: 10,
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: color.opacityColor,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  headingTextStyle: {
    margin: 20,
    fontSize: 16,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  textStyle: {
    fontSize: 13,
    fontWeight: '400',
    color: color.headingTextColor,
  },
  cardOnPress: {
    backgroundColor: color.buttonColor,
  },
  textOnPress: {
    color: color.commonTextColor,
  },
});
export default ReminderCard;

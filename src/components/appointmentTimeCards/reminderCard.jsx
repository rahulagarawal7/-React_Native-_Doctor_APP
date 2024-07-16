import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../../commons/colors';

const ReminderCard = () => {
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
    <View style={styles.container}>
      <Text style={styles.HeadingTextStyle}>Reminder Me Before </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={time}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card}>
              <Text style={styles.textStyle}>{item}</Text>
              <Text style={styles.textStyle}>Minit</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  card: {
    marginLeft: 10,
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: color.buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  HeadingTextStyle: {
    margin: 20,
    fontSize: 16,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  textStyle: {
    fontSize: 13,
    fontWeight: '400',
    color: color.commonTextColor,
  },
});
export default ReminderCard;

import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../../commons/colors';
import ReminderCard from '/Users/dr.mac/Desktop/DoctorAPP/src/components/appointmentTimeCards/reminderCard.jsx';
import CommonButton from '../commonbutton';

const time = [
  {time: '10:00', period: 'AM'},
  {time: '10:00', period: 'AM'},
  {time: '11:00', period: 'AM'},
  {time: '12:00', period: 'AM'},
  {time: '1:00', period: 'PM'},
  {time: '2:00', period: 'PM'},
  {time: '3:00', period: 'PM'},
  {time: '4:00', period: 'PM'},
];

const AvailableTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.HeadingTextStyle}>Available Time</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={time}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card}>
              <Text style={styles.textStyle}>{item.time}</Text>
              <Text style={styles.textStyle}>{item.period}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <ReminderCard />
      <View style={styles.btnBox}>
        <CommonButton btnText={'Confirm'} url={'home'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.commonTextColor,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  HeadingTextStyle: {
    margin: 20,
    fontSize: 16,
    fontWeight: '500',
    color: color.headingTextColor,
  },
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
  textStyle: {
    fontSize: 13,
    fontWeight: '400',
    color: color.commonTextColor,
  },
  btnBox: {
    height: 100,
    justifyContent: 'center',
  },
});
export default AvailableTime;

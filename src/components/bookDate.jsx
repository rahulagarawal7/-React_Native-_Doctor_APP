import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../commons/colors';

const date = [
  {
    day: 'Today, 23 Feb',
    availablity: 'No slots available',
    available: false,
    nextSlot: 'Next availability on wed, 24 Feb',
    nextavailable: true,
  },
  {
    day: 'Tomorrow, 24 Feb',
    availablity: '9 slots available',
    available: true,
    nextavailable: false,
    afternoonSlots: 'Afternoon 7 slots',
    afternoonTimes: [
      '1:00 PM',
      '1:30 PM',
      '2:00 PM',
      '2:30 PM',
      '3:00 PM',
      '3:30 PM',
      '4:00 PM',
    ],
  },
  {
    day: 'Today, 23 Feb',
    availablity: 'No slots available',
    available: false,
    nextSlot: 'Next availability on wed, 24 Feb',
    nextavailable: true,
  },
  {
    day: 'Tomorrow, 24 Feb',
    availablity: '9 slots available',
    available: true,
    afternoonSlots: 'Afternoon 7 slots',
    nextavailable: false,
    afternoonTimes: [
      '1:00 PM',
      '1:30 PM',
      '2:00 PM',
      '2:30 PM',
      '3:00 PM',
      '3:30 PM',
      '4:00 PM',
    ],
  },
  {
    day: 'Today, 23 Feb',
    availablity: 'No slots available',
    available: false,
    nextSlot: 'Next availability on wed, 24 Feb',
    nextavailable: true,
  },
];

const BookDate = () => {
  const [availablity, setAvailablity] = useState(false);
  const [nextAvailablity, setNextAvailablity] = useState(false);
  const [data, setData] = useState(null);

  function handleClick(data) {
    setAvailablity(data.available);
    setData(data);
    setNextAvailablity(data.nextavailable);
  }
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={date}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => handleClick(item)}>
              <View style={styles.mainBox}>
                <View style={styles.innerBox}>
                  <Text style={styles.dayTextStyle}>{item.day}</Text>
                  <Text style={styles.availablityTextStyle}>
                    {item.availablity}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={styles.slotHeadingTextStyle}>{data?.day}</Text>
      {availablity && (
        <View>
          <Text style={styles.afternoonSlotsTextStyle}>
            {data?.afternoonSlots}
          </Text>
          <FlatList
            inverted={true}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap-reverse',
            }}
            data={data.afternoonTimes}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.slotTimeBtn}>
                  <Text style={styles.timeTextStyle}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
      {nextAvailablity && (
        <View>
          <Text style={styles.slotAvalilableTextStyle}>
            {data?.availablity}
          </Text>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnTextStryle}>{data?.nextSlot}</Text>
          </TouchableOpacity>
          <Text style={styles.orTextStyle}>OR</Text>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnTextStryle}>Contact Clinic</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    height: 54,
    width: 150,
    borderRadius: 4,
    marginLeft: 10,
    backgroundColor: color.commonTextColor,
    justifyContent: 'center',
  },
  innerBox: {
    height: 40,
    width: 130,
    alignSelf: 'center',
    alignItems: 'center',
  },
  dayTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: color.headingTextColor,
  },
  availablityTextStyle: {
    fontSize: 10,
    fontWeight: '400',
    color: color.containtTextColor,
  },
  slotHeadingTextStyle: {
    marginTop: 20,
    alignSelf: 'center',
    color: color.backButtonHeadingTextColor,
    fontSize: 16,
    fontWeight: '500',
  },
  slotAvalilableTextStyle: {
    marginTop: 30,
    height: 20,
    alignSelf: 'center',
    color: color.containtTextColor,
  },
  btnStyle: {
    marginTop: 20,
    height: 54,
    width: 306,
    backgroundColor: color.buttonColor,
    borderRadius: 6,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextStryle: {
    fontSize: 18,
    fontWeight: '500',
    color: color.commonTextColor,
  },
  orTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: color.containtTextColor,
    alignSelf: 'center',
    marginTop: 20,
  },
  afternoonSlotsTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: color.headingTextColor,
    marginLeft: 10,
    marginTop: 20,
    height: 40,
  },
  slotTimeBtn: {
    marginTop: 5,
    marginLeft: 10,
    height: 40,
    width: 76,
    backgroundColor: color.buttonColor,
    margin: 5,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeTextStyle: {
    fontSize: 13,
    fontWeight: '500',
    color: color.commonTextColor,
  },
});
export default BookDate;

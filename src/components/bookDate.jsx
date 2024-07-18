import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../commons/colors';
import CommonButton from './commonButton';

const date = [
  {
    id: 1,
    day: 'Today, 23 Feb',
    availability: 'No slots available',
    available: false,
    nextSlot: 'Next availability on wed, 24 Feb',
    nextAvailable: true,
  },
  {
    id: 2,
    day: 'Tomorrow, 24 Feb',
    availability: '9 slots available',
    available: true,
    nextAvailable: false,
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
    id: 3,
    day: 'Today, 23 Feb',
    availability: 'No slots available',
    available: false,
    nextSlot: 'Next availability on wed, 24 Feb',
    nextAvailable: true,
  },
  {
    id: 4,
    day: 'Tomorrow, 24 Feb',
    availability: '9 slots available',
    available: true,
    afternoonSlots: 'Afternoon 7 slots',
    nextAvailable: false,
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
    id: 5,
    day: 'Today, 23 Feb',
    availability: 'No slots available',
    available: false,
    nextSlot: 'Next availability on wed, 24 Feb',
    nextAvailable: true,
  },
];

const BookDate = () => {
  const [availability, setAvailability] = useState(false);
  const [nextAvailability, setNextAvailability] = useState(false);
  const [dataDr, setDataDr] = useState(null);
  const [btnPress, setBtnPress] = useState(false);
  const [time, setTime] = useState(null);
  const nextSlotHandle = () => {
    setBtnPress(!btnPress);
  };

  function handleClick(data) {
    setAvailability(data?.available);
    setDataDr(data);
    setNextAvailability(data?.nextAvailable);
  }

  const handleTimePress = time => {
    setTime(time);
  };
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={date}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => handleClick(item)}>
              <View
                style={[
                  styles.mainBox,
                  item.id === dataDr?.id && styles.onPressBoxStyle,
                ]}>
                <View style={styles.innerBox}>
                  <Text
                    style={[
                      styles.dayTextStyle,
                      item.id === dataDr?.id && styles.onPressTextStyle,
                    ]}>
                    {item.day}
                  </Text>
                  <Text
                    style={[
                      styles.availabilityTextStyle,
                      item.id === dataDr?.id && styles.onPressTextStyle,
                    ]}>
                    {item.availability}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={styles.slotHeadingTextStyle}>{dataDr?.day}</Text>
      {availability && (
        <View>
          <Text style={styles.afternoonSlotsTextStyle}>
            {dataDr?.afternoonSlots}
          </Text>
          <FlatList
            inverted={true}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap-reverse',
            }}
            data={dataDr.afternoonTimes}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity onPress={() => handleTimePress(item)}>
                  <View
                    style={[
                      styles.slotTimeBtn,
                      time === dataDr?.afternoonTimes[index]
                        ? styles.onPressTimeBtn
                        : styles.timeBtnStyle,
                    ]}>
                    <Text
                      style={
                        time === dataDr?.afternoonTimes[index]
                          ? styles.timeTextStyleOnPress
                          : styles.timeTextStyle
                      }>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
      {nextAvailability && (
        <View>
          <Text style={styles.slotAvailableTextStyle}>
            {dataDr?.availability}
          </Text>

          <View>
            <CommonButton
              btnText={dataDr?.nextSlot}
              handleSubmit={nextSlotHandle}
            />
          </View>
          <Text style={styles.orTextStyle}>OR</Text>
          <CommonButton
            btnText="Contact Clinic"
            handleSubmit={nextSlotHandle}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  onPressTextStyle: {
    color: color.commonTextColor,
  },
  mainBox: {
    height: 54,
    width: 150,
    borderRadius: 4,
    marginLeft: 10,
    backgroundColor: color.commonTextColor,
    justifyContent: 'center',
  },
  onPressBoxStyle: {
    backgroundColor: color.buttonColor,
  },
  innerBox: {
    height: 40,
    width: 130,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: color.headingTextColor,
  },
  availabilityTextStyle: {
    fontSize: 10,
    fontWeight: '400',
    color: color.containTextColor,
  },
  slotHeadingTextStyle: {
    marginTop: 20,
    alignSelf: 'center',
    color: color.backButtonHeadingTextColor,
    fontSize: 16,
    fontWeight: '500',
  },
  slotAvailableTextStyle: {
    marginTop: 30,
    height: 30,
    alignSelf: 'center',
    color: color.containTextColor,
  },

  orTextStyle: {
    height: 40,
    fontSize: 14,
    fontWeight: '400',
    color: color.containTextColor,
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
    margin: 5,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onPressTimeBtn: {
    backgroundColor: color.buttonColor,
  },
  timeTextStyle: {
    fontSize: 13,
    fontWeight: '500',
    color: color.headingTextColor,
  },
  timeTextStyleOnPress: {
    color: color.commonTextColor,
  },
  timeBtnStyle: {
    backgroundColor: color.commonTextColor,
  },
});
export default BookDate;

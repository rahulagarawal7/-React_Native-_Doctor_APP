import React, {useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import color from '../commons/colors';
import PropTypes from 'prop-types';

const CustomCalendar = props => {
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + '-' + month + '-' + date;
  };
  const initDate = getCurrentDate();
  const [selected, setSelected] = useState(initDate);
  const marked = useMemo(
    () => ({
      [selected]: {
        selected: true,
        selectedColor: color.buttonColor,
        selectedTextColor: color.commonTextColor,
      },
    }),
    [selected],
  );

  return (
    <>
      <Calendar
        initialDate={getCurrentDate()}
        minDate={getCurrentDate()}
        disableAllTouchEventsForDisabledDays={true}
        style={styles.calendarBox}
        {...props}
        markedDates={marked}
        onDayPress={day => {
          setSelected(day.dateString);
          props.setDate(day.dateString);
        }}
        theme={styles.themeStyle}
        headerStyle={styles.headerStyle}
        setDat
      />
    </>
  );
};

CustomCalendar.propTypes = {
  setDate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  calendarBox: {
    height: 280,
    width: 345,
    alignSelf: 'center',
    borderRadius: 8,
  },
  headerStyle: {
    width: 335,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: color.buttonColor,
  },
  themeStyle: {
    todayTextColor: color.buttonColor,
    arrowColor: color.commonTextColor,
    textDayFontWeight: '500',
    textMonthFontWeight: '600',
    textDayHeaderFontWeight: '600',
    textDayFontSize: 16,
    textMonthFontSize: 20,
    textDayHeaderFontSize: 14,
    dayTextColor: color.headingTextColor,
    monthTextColor: color.commonTextColor,
  },
});
export default CustomCalendar;

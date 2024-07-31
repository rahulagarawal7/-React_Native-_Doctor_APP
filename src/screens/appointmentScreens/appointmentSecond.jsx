import React, {useState} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import BackButton from '../../components/backButton';
import {BackgroundImage} from '../../assets/index';
import AvailableTime from '../../components/appointmentTimeCards/availableTime';
import CommonButton from '../../components/commonButton';
import ReminderCard from '../../components/appointmentTimeCards/reminderCard';
import color from '../../commons/colors';
import ConfirmationCard from '../../components/confirmationCard';
import PropTypes from 'prop-types';
import CustomCalendar from '../../components/customCalendar';

const AppointmentSecond = ({route}) => {
  const {data} = route.params;
  const [btnPress, setBtnPress] = useState(false);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('date not selected');

  const handleSubmit = () => {
    setBtnPress(!btnPress);
  };
  return (
    <>
      <View style={btnPress ? styles.containerTrue : styles.containerFalse}>
        <ImageBackground source={BackgroundImage}>
          <View style={styles.backButtonStyle}>
            <BackButton headingName="Appointment" />
          </View>
          <ScrollView
            style={styles.scrollViewStyle}
            contentContainerStyle={styles.contentContainerStyle}>
            <CustomCalendar onDayPress setDate={setDate} />
            <View style={styles.box}>
              <AvailableTime setTime={setTime} timeValue={time} />
              <ReminderCard />
              <CommonButton btnText={'Confirm'} handleSubmit={handleSubmit} />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
      {btnPress && (
        <View style={styles.confirmationCardContainer}>
          <View style={styles.confirmationCardContainerStyle}>
            <ConfirmationCard drName={data?.name} time={time} date={date} />
          </View>
        </View>
      )}
    </>
  );
};

AppointmentSecond.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      data: PropTypes.object,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  calImg: {
    alignSelf: 'center',
  },
  confirmationCardContainerStyle: {
    position: 'absolute',
    alignSelf: 'center',
    opacity: 1,
  },
  confirmationCardContainer: {
    height: 800,
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerTrue: {
    opacity: 0.2,
    flex: 20,
  },
  contentContainerStyle: {
    gap: 60,
  },
  containerFalse: {
    flex: 1,
  },
  backButtonStyle: {
    height: '10%',
  },
  scrollViewStyle: {
    height: '90%',
  },
  box: {
    gap: 40,
    height: 490,
    backgroundColor: color.commonTextColor,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
});

export default AppointmentSecond;

import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import BackButton from '../../components/backbutton';
import backGroubdImage from '../../assets/background/bg.png';
import cal from '../../assets/background/shedule.png';
import AvailableTime from '../../components/appointmentTimeCards/availableTime';

const AppointmentSecond = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backGroubdImage}>
        <View style={styles.backButtonStyle}>
          <BackButton headingName="Appointment" />
        </View>
        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.contentContainerStyle}>
          <Image style={{alignSelf: 'center'}} source={cal} />
          <AvailableTime />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: 30,
  },
  container: {
    flex: 1,
  },
  backButtonStyle: {
    height: '10%',
  },
  scrollViewStyle: {
    height: '90%',
  },
});

export default AppointmentSecond;

import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import backGroundImage from '../assets/background/bg.png';
import BackButton from '../components/backButton';
import logo from '../../src/assets/Logo/medicalOrder.png';
import AddCard from '../components/drawerScreens/addCard';
import PropTypes from 'prop-types';

const Book = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('findDoctor');
  };
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <BackButton headingName="Book Doctors" />
      <View style={styles.box}>
        <ScrollView>
          <View style={styles.addCardStyle}>
            <AddCard
              btnName={'Book now'}
              headingContent={
                'Not booked any doctor yet book now  we have best doctors !'
              }
              image={logo}
              headingName={'No booking found '}
              handlerOnPress={handleSubmit}
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
Book.propTypes = {
  navigation: PropTypes.any,
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
  box: {
    marginTop: 60,
  },
  addCardStyle: {
    marginBottom: 20,
  },
});
export default Book;

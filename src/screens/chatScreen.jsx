import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import backGroundImage from '../assets/background/bg.png';
import BackButton from '../components/backButton';

const ChatScreen = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <BackButton headingName="" />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
});
export default ChatScreen;

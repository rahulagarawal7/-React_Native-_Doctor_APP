import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {BackgroundImage} from '../assets/index';
import BackButton from '../components/backButton';

const ChatScreen = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={BackgroundImage}>
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

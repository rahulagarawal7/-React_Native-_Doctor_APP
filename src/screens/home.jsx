import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import UserImg from '../assets/images/Ellipse26.png';
const Home = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <StatusBar
          translucent={true}
          style="light"
          backgroundColor={'#07D9AD'}
        />
        <View style={styles.topHeadingBox}>
          <View style={styles.nameHeadingBox}>
            <Text style={styles.userNameStyle}>Hi Handwerker!</Text>
            <Text style={styles.headingTextStyle}>Find Your Doctor</Text>
          </View>
          <Image style={styles.userImgStyle} source={UserImg} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  topHeadingBox: {
    height: 156,
    backgroundColor: '#07D9AD',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  nameHeadingBox: {},
  userNameStyle: {
    width: 136,
    height: 22,
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  headingTextStyle: {
    width: 205,
    height: 30,
    fontSize: 25,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  userImgStyle: {
    height: 70,
    width: 70,
  },
});
export default Home;

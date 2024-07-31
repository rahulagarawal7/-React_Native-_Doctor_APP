import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BackgroundImage,
  ArrowIcon,
  AboutUsLogo,
  NotificationLogo,
  StatisticsLogo,
  ChangePasswordLogo,
} from '../../../assets/index';
import BackButton from '../../../components/backButton';
import color from '../../../commons/colors';
import PropTypes from 'prop-types';
const ListThree = ({nameOne, nameTwo}) => {
  return (
    <TouchableOpacity style={styles.innerBoxThree}>
      <Text style={styles.textName}>{nameOne}</Text>
      <Text style={styles.textNameTwo}>{nameTwo}</Text>
      <Image style={styles.arrowStyle} source={ArrowIcon} />
    </TouchableOpacity>
  );
};
ListThree.propTypes = {
  nameOne: PropTypes.string,
  nameTwo: PropTypes.string,
};
const ListTwo = ({name}) => {
  const [selected, setSelected] = useState(true);
  return (
    <View style={styles.innerBoxTwo}>
      <Text style={styles.textName}>{name}</Text>
      {selected ? (
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <View style={styles.btnBoxOn}>
            <View style={styles.btnOn} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <View style={styles.btnBoxOff}>
            <View style={styles.btnOff} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
ListTwo.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
const ListOne = ({img, name}) => {
  return (
    <TouchableOpacity style={styles.innerBoxOne}>
      <Image style={styles.imgStyle} source={img} />
      <Text style={styles.textName}>{name}</Text>
      <Image style={styles.arrowStyle} source={ArrowIcon} />
    </TouchableOpacity>
  );
};
ListOne.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
const Settings = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={BackgroundImage}>
      <BackButton headingName="Settings" />
      <View style={styles.box}>
        <ScrollView>
          <Text style={styles.headingNameStyle}>Account settings</Text>
          <View style={styles.accountSettingsStyle}>
            <ListOne name={'Change Password'} img={ChangePasswordLogo} />
            <ListOne name={'Notification'} img={NotificationLogo} />
            <ListOne name={'Statistics'} img={StatisticsLogo} />
            <ListOne name={'About Us'} img={AboutUsLogo} />
          </View>
          <Text style={styles.secondHeading}>More options</Text>
          <ListTwo name={'Text messages'} />
          <ListTwo name={'Phone Calls'} />
          <ListThree nameOne={'Languages'} nameTwo={'English'} />
          <ListThree nameOne={'Currency'} nameTwo={'$-USD'} />
          <ListThree nameOne={'Linked Account'} nameTwo={'Google'} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
  box: {
    marginTop: 70,
  },
  headingNameStyle: {
    height: 40,
    width: 300,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: color.containTextColor,
  },
  innerBoxOne: {
    height: 50,
    width: 330,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textName: {
    width: 250,
    fontSize: 16,
    fontWeight: '300',
    color: color.containTextColor,
    alignSelf: 'center',
  },
  imgStyle: {
    alignSelf: 'center',
  },
  arrowStyle: {
    height: 13,
    width: 8,
    alignSelf: 'center',
  },
  accountSettingsStyle: {
    gap: 20,
  },
  secondHeading: {
    marginTop: 40,
    height: 40,
    width: 320,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: color.containTextColor,
  },
  innerBoxTwo: {
    height: 50,
    width: 330,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnBoxOn: {
    height: 22,
    width: 36,
    borderRadius: 30,
    backgroundColor: color.buttonColor,
    marginTop: 15,
  },
  btnOn: {
    height: 18,
    width: 18,
    borderRadius: 18,
    backgroundColor: color.commonTextColor,
    alignSelf: 'flex-end',
    margin: 2,
  },
  btnBoxOff: {
    height: 22,
    width: 36,
    borderRadius: 30,
    backgroundColor: color.containTextColor,
    marginTop: 15,
  },
  btnOff: {
    height: 18,
    width: 18,
    borderRadius: 18,
    backgroundColor: color.commonTextColor,
    alignSelf: 'flex-start',
    margin: 2,
  },
  innerBoxThree: {
    height: 50,
    width: 330,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textNameTwo: {
    width: 70,
    fontSize: 16,
    fontWeight: '300',
    color: color.containTextColor,
    alignSelf: 'center',
  },
});
export default Settings;

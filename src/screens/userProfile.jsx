import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BackButton from '../components/backButton';
import color from '../commons/colors';
import cameraLogo from '../assets/Logo/camera.png';
import penImg from '../assets/Logo/pen.png';
import CommonButton from '../components/commonButton';
import PropTypes from 'prop-types';
const NameCard = ({data, headingName, writeAble, placeholder}) => {
  const [isWrite, setIsWrite] = useState(true);
  return (
    <View style={styles.containerOne}>
      <View style={styles.innerBox}>
        <View style={styles.nameBox}>
          <Text style={styles.headingTextStyle}>{headingName}</Text>
          {isWrite ? (
            <Text style={styles.nameTextStyle}>{data}</Text>
          ) : (
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={color.containTextColor}
              style={styles.nameTextStyle}
            />
          )}
        </View>
        {writeAble &&
          (isWrite ? (
            <TouchableOpacity
              onPress={() => {
                setIsWrite(!isWrite);
              }}>
              <Image style={styles.penImgStyle} source={penImg} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setIsWrite(!isWrite);
              }}>
              <Image style={styles.penImgStyleOnSelected} source={penImg} />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};
NameCard.propTypes = {
  data: PropTypes.string,
  headingName: PropTypes.string,
  writeAble: PropTypes.bool,
  placeholder: PropTypes.string,
};
const UserProfile = ({route, navigation}) => {
  const {userImg} = route.params;

  const handleSubmit = () => {
    navigation.navigate('home');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <BackButton />

        <Text style={styles.profileTextStyle}>Profile</Text>
        <Text style={styles.headingStyle}>Set up your profile</Text>
        <View style={styles.headingContainBox}>
          <Text style={styles.headingContainStyle}>
            Update your profile to connect your doctor with better impression.
          </Text>
        </View>
        <View style={styles.userImageBox}>
          <Image style={styles.userImgStyle} source={userImg} />
          <TouchableOpacity style={styles.cameraBox}>
            <Image style={styles.cameraLogoImg} source={cameraLogo} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.PersonaInformationTextStyle}>
        Personal information
      </Text>
      <View style={styles.informationBox}>
        <NameCard headingName={'Name'} data={'User Name'} writeAble={false} />
        <NameCard
          headingName={'Contact Number'}
          data={'788999988'}
          writeAble={true}
          placeholder={'contact number...'}
        />
        <NameCard
          headingName={'Date of Birth'}
          data={'DD MM YYYY'}
          writeAble={true}
          placeholder={'DD MM YYYY..'}
        />
        <NameCard
          headingName={'Location'}
          data={'Add Details'}
          writeAble={false}
        />
      </View>
      <View style={styles.CommonButtonStyle}>
        <CommonButton btnText="Continue" handleSubmit={handleSubmit} />
      </View>
    </ScrollView>
  );
};

UserProfile.propTypes = {
  route: PropTypes.any,
  navigation: PropTypes.any,
  navigate: PropTypes.any,
};
const styles = StyleSheet.create({
  container: {
    height: 357,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: color.buttonColor,
  },
  profileTextStyle: {
    width: 280,
    color: color.commonTextColor,
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 20,
  },
  headingStyle: {
    color: color.commonTextColor,
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 30,
  },
  headingContainStyle: {
    color: color.commonTextColor,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  headingContainBox: {
    height: 60,
    width: 300,
    marginTop: 30,
    alignSelf: 'center',
  },
  userImageBox: {
    height: 130,
    width: 130,
    borderRadius: 130,
    backgroundColor: color.commonTextColor,
    alignSelf: 'center',
  },
  userImgStyle: {
    height: 130,
    width: 130,
    borderRadius: 130,
  },
  cameraBox: {
    height: 36,
    width: 36,
    borderRadius: 36,
    backgroundColor: color.containTextColor,
    opacity: 0.6,
    alignSelf: 'center',
    position: 'absolute',
    top: 75,
    left: 105,
    justifyContent: 'center',
  },
  cameraLogoImg: {
    alignSelf: 'center',
  },
  PersonaInformationTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: color.headingTextColor,
    margin: 20,
  },
  containerOne: {
    marginTop: 15,
    height: 80,
    alignSelf: 'center',
    width: 336,
    backgroundColor: color.commonTextColor,
    borderRadius: 12,
  },
  innerBox: {
    padding: 10,
    height: 60,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameBox: {
    gap: 10,
  },
  headingTextStyle: {
    height: 19,
    fontSize: 16,
    fontWeight: '400',
    color: color.buttonColor,
  },
  nameTextStyle: {
    height: 41,
    width: 141,
    fontSize: 18,
    fontWeight: '500',
    color: color.containTextColor,
  },
  penImgStyle: {
    marginTop: 20,
    height: 15,
    width: 15,
  },
  penImgStyleOnSelected: {
    marginTop: 20,
    height: 15,
    width: 15,
    tintColor: color.buttonColor,
  },
  CommonButtonStyle: {
    marginTop: 30,
  },
});
export default UserProfile;

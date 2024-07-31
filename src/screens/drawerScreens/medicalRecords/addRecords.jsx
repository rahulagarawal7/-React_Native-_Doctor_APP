import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import backGroundImage from '../../../assets/background/bg.png';
import BackButton from '../../../components/backButton';
import AddImageCard from '../../../components/drawerScreens/medicalRecords/addImageCard';
import UploadRecord from '../../../components/drawerScreens/medicalRecords/uploadCard';
const AddRecords = () => {
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={backGroundImage}>
      <BackButton headingName="Medical Records" />
      <View style={styles.box}>
        <ScrollView>
          <AddImageCard />

          <UploadRecord recordForName={'rahul agrawal'} />
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
});

export default AddRecords;

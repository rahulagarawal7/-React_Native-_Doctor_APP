import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {BackgroundImage, DiagnosticsLogo} from '../../../assets/index';
import BackButton from '../../../components/backButton';
import AddCard from '../../../components/drawerScreens/addCard';

const Payments = () => {
  const handleSubmit = () => {};
  return (
    <ImageBackground
      style={styles.backGroundImageStyle}
      source={BackgroundImage}>
      <BackButton headingName="Payments" />
      <AddCard
        image={DiagnosticsLogo}
        btnName={'add payments'}
        headingName={'you have not done any payments yet !'}
        headingContent={
          'add your payments details to make your transaction cash less'
        }
        handlerOnPress={handleSubmit}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backGroundImageStyle: {
    flex: 1,
  },
});
export default Payments;

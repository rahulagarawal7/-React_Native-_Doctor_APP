import {Image, ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

const Splash_Screen = () => {
  return (
   <ScrollView>
     <ImageBackground
      source={require('../assets/background/bg.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={styles.logo}
          source={require('../assets/Logo/Logo.png')}
        />
      </View>
    </ImageBackground>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
  },
  logo: {
    height: 105,
    width: 205,
  },
});
export default Splash_Screen;

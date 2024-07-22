import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../commons/colors';
import hidePasswordImg from '../../assets/icons/hidePassword.png';
import showPasswordImg from '../../assets/icons/showPassword.png';

const PasswordTextField = ({placeholder}) => {
  const [showImage, setShowImage] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={showImage}
      />
      {showImage ? (
        <TouchableOpacity onPress={() => setShowImage(!showImage)}>
          <Image style={styles.imageStyle} source={hidePasswordImg} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setShowImage(!showImage);
          }}>
          <Image style={styles.imageStyle} source={showPasswordImg} />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 335,
    borderWidth: 0.5,
    borderRadius: 12,
    padding: 10,
    height: 54,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.commonTextColor,
  },
  input: {
    backgroundColor: color.commonTextColor,
    width: 280,
    padding: 10,
    borderColor: color.containTextColor,
    color: color.containTextColor,
    fontSize: 18,
    fontWeight: '300',
  },
  imageStyle: {
    height: 20,
    width: 20,
    opacity: 0.6,
  },
});
export default PasswordTextField;

import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../commons/colors';
import heartIcon from '../assets/icons/heart.png';
import {useNavigation} from '@react-navigation/native';
const SeeAllCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={data?.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('doctorDetailsScreen', {data: item})
              }
              style={styles.container}>
              <View style={styles.heartIconStyle}>
                <Image source={heartIcon} />
              </View>
              <View style={styles.containtStyle}>
                <Image style={styles.drImgStyle} source={item?.url} />
                <Text style={styles.drNameTextStyle}>{item?.name}</Text>
                <Text style={styles.drTypeTextStyle}>{item?.type}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

SeeAllCard.propTypes = {
  data: PropTypes.object?.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    width: 160,
    borderRadius: 6,
    margin: 5,
    backgroundColor: color.commonTextColor,
  },
  heartIconStyle: {
    padding: 10,
    alignItems: 'flex-end',
    height: 30,
  },
  containtStyle: {
    height: 131,
    width: 108,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  drImgStyle: {
    height: 84,
    width: 84,
    borderRadius: 84,
  },
  drNameTextStyle: {
    fontSize: 15,
    fontWeight: '400',
    color: color.headingTextColor,
  },
  drTypeTextStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: color.buttonColor,
  },
});
export default SeeAllCard;

import React, {useState} from 'react';
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
import like from '../assets/icons/like.png';
import {useNavigation} from '@react-navigation/native';

const Card = ({item}) => {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikePress() {
    setIsLiked(!isLiked);
  }

  const navigation = useNavigation();
  return (
    <View style={styles.containerFirst}>
      <View>
        <View style={styles.heartIconStyle}>
          {isLiked ? (
            <TouchableOpacity onPress={() => handleLikePress()}>
              <Image source={heartIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleLikePress()}>
              <Image source={like} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('doctorDetailsScreen', {data: item})
        }>
        <View style={styles.containerStyle}>
          <Image style={styles.drImgStyle} source={item?.url} />
          <Text style={styles.drNameTextStyle}>{item?.name}</Text>
          <Text style={styles.drTypeTextStyle}>{item?.type}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};
const SeeAllCard = ({data}) => {
  return (
    <View>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={data?.id}
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
};

SeeAllCard.propTypes = {
  data: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  containerFirst: {
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
  containerStyle: {
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

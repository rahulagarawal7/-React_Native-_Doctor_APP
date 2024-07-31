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
import {SolidHeartIcon, HollowHeartIcon} from '../assets/index';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 'type1',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type2',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type3',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type4',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type5',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type6',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type7',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type8',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type9',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type10',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type11',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type12',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type13',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type14',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type15',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type16',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type17',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type18',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type19',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type20',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type21',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Medical specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type22',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Dentist specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type23',
    url: require('../../src/assets/images/popularDoctors2.png'),
    name: 'Dr.Blessing',
    type: 'Cardiologist Specialist',
    fee: '$ 25.00/ hours',
  },
  {
    id: 'type24',
    url: require('../../src/assets/images/popularDoctors1.png'),
    name: 'Dr.Fillerup Grab',
    type: 'Eyes specialist',
    fee: '$ 25.00/ hours',
  },
];

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
              <Image source={SolidHeartIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleLikePress()}>
              <Image source={HollowHeartIcon} />
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
const SeeByType = ({type}) => {
  return (
    <View>
      <FlatList
        numColumns={2}
        data={data.filter(ele => ele.type === type)}
        keyExtractor={data?.id}
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
};

SeeByType.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string.isRequired,
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
export default SeeByType;

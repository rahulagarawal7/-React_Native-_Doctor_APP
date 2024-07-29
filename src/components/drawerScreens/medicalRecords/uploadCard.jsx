import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import color from '../../../commons/colors';
import penImg from '../../../assets/Logo/pen.png';
import invoiceIcon from '../../../assets/icons/invoice.png';
import prescriptionIcon from '../../../assets/icons/Prescription.png';
import reportIcon from '../../../assets/icons/Report.png';
import CommonButton from '../../commonButton';

const UploadRecord = ({recordForName}) => {
  const [date, setDate] = useState('');
  const [selected, setSelected] = useState(true);
  const IconCard = ({img, setSelected, selected, id}) => {
    return (
      <>
        {selected !== id ? (
          <TouchableOpacity onPress={() => setSelected(id)}>
            <Image source={img} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setSelected(id)}>
            <Image style={styles.selectedStyle} source={img} />
          </TouchableOpacity>
        )}
      </>
    );
  };

  IconCard.propTypes = {
    img: PropTypes.string,
    id: PropTypes.string,
    setSelected: PropTypes.func,
    selected: PropTypes.string,
  };
  const NameCard = ({data}) => {
    const [isWrite, setIsWrite] = useState(true);
    return (
      <View style={styles.containerOne}>
        <View style={styles.innerBox}>
          <View style={styles.nameBox}>
            <Text style={styles.headingTextStyle}>Record For</Text>
            {isWrite ? (
              <Text style={styles.nameTextStyle}>{data}</Text>
            ) : (
              <TextInput placeholder="" style={styles.nameTextStyle} />
            )}
          </View>
          {isWrite ? (
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
          )}
        </View>
      </View>
    );
  };
  NameCard.propTypes = {
    data: PropTypes.string,
  };
  useEffect(() => {
    const date = getCurrentDate;
    setDate(date);
  });

  const UploadRecord = () => {};
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + '-' + month + '-' + date;
  };
  return (
    <View style={styles.box}>
      <NameCard data={recordForName} />
      <View style={styles.containerTwo}>
        <Text style={styles.headingTextStyle}>Types of Records</Text>
        <View style={styles.iconBox}>
          <IconCard
            img={invoiceIcon}
            id={'invoiceIcon'}
            selected={selected}
            setSelected={setSelected}
          />
          <IconCard
            img={prescriptionIcon}
            id={'prescriptionIcon'}
            selected={selected}
            setSelected={setSelected}
          />
          <IconCard
            img={reportIcon}
            id={'reportIcon'}
            selected={selected}
            setSelected={setSelected}
          />
        </View>
      </View>
      <NameCard data={date} />
      <View style={styles.commonButtonStyle}>
        <CommonButton btnText="upload record" handleSubmit={UploadRecord} />
      </View>
    </View>
  );
};
UploadRecord.propTypes = {
  recordForName: PropTypes.string,
};
const styles = StyleSheet.create({
  box: {
    height: 439,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: color.commonTextColor,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
  },
  innerBox: {
    height: 60,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingTextStyle: {
    height: 19,
    fontSize: 16,
    fontWeight: '400',
    color: color.headingTextColor,
  },
  containerOne: {
    marginTop: 30,
    height: 70,
    alignSelf: 'center',
    width: 336,
    borderBottomWidth: 0.3,
  },
  containerTwo: {
    marginTop: 30,
    height: 100,
    alignSelf: 'center',
    width: 336,
    borderBottomWidth: 0.3,
  },
  nameBox: {
    gap: 15,
  },
  nameTextStyle: {
    height: 21,
    width: 141,
    fontSize: 18,
    fontWeight: '500',
    color: color.buttonColor,
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
  iconBox: {
    flexDirection: 'row',
    height: 65,
    justifyContent: 'space-around',
    width: 250,
    alignItems: 'flex-end',
  },
  commonButtonStyle: {
    marginTop: 20,
  },
  selectedStyle: {
    tintColor: color.buttonColor,
  },
  prescriptionIconStyle: {
    tintColor: color.containTextColor,
  },
});

export default UploadRecord;

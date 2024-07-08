import {SafeAreaView, Text, View} from 'react-native';

const Box = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{height:100,flex:0,width:100,backgroundColor:"red",justifyContent:"center",alignItems:"center"}}>
        <Text>hhh</Text>
      </View>
      <View style={{height:100,width:100,backgroundColor:"green"}}>
        <Text>hhh</Text>
      </View>
      <View style={{height:100,width:100,backgroundColor:"blue"}}>
        <Text>hhh</Text>
      </View>
    </SafeAreaView>
  );
};
export default Box;

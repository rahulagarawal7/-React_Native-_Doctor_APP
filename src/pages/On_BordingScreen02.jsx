import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const On_BordingScreen02=({navigation})=>{
  
  return(
    <ScrollView style={{}}>
   <View style={{flex:8}}>
   <View >
      <Image
        style={styles.fisrtImage}
        source={require('../assets/background/Ellipse153(1).png')}
      />
      </View>
      <View>
      <Image
        style={styles.DrImg}
        source={require('../assets/images/Ellipse154(1).png')}
      />
      </View>
<View style={styles.textBox}>
<View style={styles.text}>
      <Text style={styles.textStyle}>Find Trusted Doctors</Text>
      </View>
    <View style={styles.textContaint}>
    <Text style={styles.textContaintStyle}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of it over 2000 years old.
      </Text>
    </View>
</View>
   </View>
   

<TouchableOpacity style={styles.btnBox}
onPress={()=>navigation.navigate('On_BordingScreen03')}
>
  <Text style={styles.btnTextStyle}>Get Started</Text>
</TouchableOpacity>
<Text 
onPress={()=>navigation.navigate('box')}
style={styles.skip}>
  Skip
</Text>
<Image
        style={styles.bg}
        source={require('../assets/background/Ellipse143.png')}
      />
     
    </ScrollView>
  )

}
const styles =StyleSheet.create({
  fisrtImage:{
    height:342,
    width:342,
    left:175,
    top:-20,
  },
   DrImg: {
    width: 336,
    height: 336,
    marginTop: -260,
    marginLeft: 20,
  },
  textBox:{
   
    height:180,
    width:295,
    alignSelf:"center",
    flex:1,
    justifyContent:"center"
  },
  text:{
  
    height:34,


  },
  textStyle:{
textAlign:"center",
    fontSize:28,
    color:"black",
    fontWeight:"500",
    fontFamily:"../assets/fonts/Rubik-VariableFont_wght.ttf"

  },
  textContaint:{

    width: 274,
    height: 70,
    flex:0,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
  
   
  },
  textContaintStyle:{
     textAlign:"center",
    color:"black",
    fontSize:14,
    fontWeight:"400",
     fontFamily:"../assects/fonts/Rubik-Italic-VariableFont_wght.ttf"
   

   
  },

  btnBox:{
    height:54,
    width:295,
    backgroundColor:"#0EBE7F",
   borderRadius:10,
   marginRight:200,
   marginLeft:50
   
  },
  
btnTextStyle:{
  color:"white",
  fontWeight:"400",
  fontSize:18,
  textAlign:"center",
marginTop:12
},
skip:{

  color:"black",
  textAlign:"center",
  marginTop:15,
},
bg:{
  
  height:216,
  width:216,
  alignSelf:"flex-end",
  marginTop:-125
}
 
   
  
  
 

 

})
export default On_BordingScreen02
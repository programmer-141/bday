import React,{useState} from 'react'
import { StyleSheet, Dimensions, Image, Text, ImageBackground, ScrollView, View} from 'react-native';
const {width, height} = Dimensions.get('window'); 


export default function MemCard (props) {
  return(
    <ImageBackground  source ={props.image} blurRadius={40} style={styles.post}>
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <Image source={props.image} style={{width:300, height:500, borderRadius:5,marginVertical:20}}/>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: "center",
    justifyContent: "center",
    width:330,
  },
  text:{
    fontFamily:'Poppins',
    paddingTop:20,
    color:'white',
    fontSize:width * 0.05,
    letterSpacing:0.03,
    letterSpacing:0.03,
  },
  post:{
    width:390,
    marginVertical:10,
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius:10,
  },
})
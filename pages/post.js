import React,{useState} from 'react'
import { StyleSheet,Button , Image, ImageBackground, Text, StatusBar, View,ScrollView } from 'react-native';
import bg from '../assets/bg.jpeg';

export default function Post (props) {
  return(
    <ImageBackground source ={props.image} blurRadius={40} style={styles.post}>
      <Text style={styles.text}>{props.title}</Text>
      <Image source={props.image} style={{width:300, height:400, borderRadius:5,}}/>
      <Text style={styles.dis}>{props.dis}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  post:{
    width:330,
    marginVertical:10,
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius:10,
  },
  text:{
    color:'white',
    fontSize:20,
    fontFamily:'Poppins',
    paddingVertical:10,
    
  },
  dis:{
    width:'98%',
    color:'white',
    fontSize:15,
    fontFamily:'Poppins',
    textAlign:'center',
    paddingVertical:20,
  }
})
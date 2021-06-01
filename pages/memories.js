import React,{useState} from 'react'
import { StyleSheet,Button, Dimensions , Image, Text, StatusBar, ScrollView, View,TextInput, ImageBackground} from 'react-native';
import MemCard from './memCard';
const {width, height} = Dimensions.get('window'); 

export default function Memories () {
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground  source ={require('../assets/Images/grp11.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Text style={styles.text}>Jhan Marraige Before Nidhra</Text>
          <Image source={require('../assets/Images/grp11.jpg')} style={{width:330, height:250, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <ImageBackground  source ={require('../assets/Images/grp12.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Text style={styles.text}>Jhan Marraige After Nidhra</Text>
          <Image source={require('../assets/Images/grp12.jpg')} style={{width:330, height:250, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <MemCard text='Jhan  Marraige' image={require('../assets/Images/grp7.jpg')} />
      <MemCard text='Little bunnies' image={require('../assets/Images/grp9.jpg')} />
      <MemCard text='Ladies Domination....' image={require('../assets/Images/grp8.jpg')} />
      <MemCard text='Fun' image={require('../assets/Images/grp10.jpg')} />
      <MemCard text='Jhan  Marraige' image={require('../assets/Images/grp5.jpg')} />
      <MemCard text='Bridge' image={require('../assets/Images/grp4.jpg')} />
      <ImageBackground  source ={require('../assets/Images/grp2.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Text style={styles.text}>Geetha's Home</Text>
          <Image source={require('../assets/Images/grp2.jpg')} style={{width:340, height:350, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <ImageBackground  source ={require('../assets/Images/grp6.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Text style={styles.text}>Ever Green</Text>
          <Image source={require('../assets/Images/grp6.jpg')} style={{width:330, height:400, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <Text style ={styles.text2} >Sorry geetha inka chala ante chala memories unnayi...mana andari madhya..kani pics dorakale..iyina prle future inka..lekalenani sweet memories undali..andharam happy ga undali...once again Happy Birthday Geetha..</Text>
      <Text style ={styles.text2} >App made with 💓 to geetha</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "flex-start",
    overflow:'visible'
  },
  container2: {
    display:'flex',
    alignItems: "center",
    justifyContent: "center",
    width:330,
  },
  text:{
    fontFamily:'Poppins',
    paddingTop:20,
    fontSize:width * 0.05,
    color:'white',
    letterSpacing:0.3,
    textAlign:'center'
  },
  text2:{
    width:'90%',
    fontFamily:'Poppins',
    paddingVertical:20,
    color:'white',
    fontSize:15,
    letterSpacing:0.3,
    textAlign:'center'
  },
  post:{
    width:390,
    marginVertical:10,
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius:10,
  },
})
import React from 'react';
import { StyleSheet, ScrollView, Image, Text, StatusBar, View, TouchableOpacity } from 'react-native';
import bg from '../assets/bg.jpeg'

export default function PopCard ({navigation}) {
  const pressHandler = () => {
    navigation.navigate('Wishes from Loved once 💘')
  }
  const pressHandler2 = () => {
    navigation.navigate('Memories')
  }
  const pressHandler3 = () => {
    navigation.navigate('Best Clicks 😂💓🤭')
  }
  return(
    <ScrollView contentContainerStyles={styles.scroll}>
      <View style={styles.container}>
        <Image source={bg} blurRadius={3} style={styles.image} />
        <Image source={require('../assets/Images/click31.jpg')} style={styles.image2} />
        <Image source={require('../assets/Images/click30.jpg')} style={styles.image3} />
      </View>
      <View style={styles.textCont}>
        <Text style={styles.title}>BirthDay Girl</Text>
        <Text style={styles.text}>Happy Birthday geetha.Nv anukunavi anni fullfill avali ani korukuntunam..and nuvu pete alarini chala miss avthunam potti, mem epudu okate korukuntam..happy ga undali nv elapudu...korukunnavi chey...anthe chalu..once again wishing you many many more happy returns of the day.. 🎂 Idhigo colourful cake..pandaga chesuko 🤭        
        ~ from Your Thotti Gang</Text>
        <View style={{flexDirection:'row',flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={styles.appButtonContainer} onPress={pressHandler} >
           <Text style={styles.appButtonText}>Wishes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer} onPress={pressHandler2} >
           <Text style={styles.appButtonText}>Memories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer} onPress={pressHandler3} >
           <Text style={styles.appButtonText}>Clicks</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container : {
    width:'100%',
    height:400,
    backgroundColor:'transparent',
    position:'relative',
    justifyContent:'space-between',
    alignItems:'center',
    overflow:'visible'
  },
  scroll:{
    display:'flex',
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "flex-start",
    overflow:'visible'
  },
  image:{
    width:'100%',
    height:350,
    position:'absolute',
    borderRadius:5,
    top:0,
  },
  image2:{
    width:280,
    height:300,
    borderRadius:10,
    position:'absolute',
    bottom:25,
    bottom:25,
    left:-50,
    resizeMode:'contain',
    transform: [{ rotate: '-15deg' }]
  },
  image3:{
    width:280,
    height:300,
    borderRadius:10,
    position:'absolute',
    bottom:10,
    right:-50,
    resizeMode:'contain',
    transform: [{ rotate: '-15deg' }]
  },
  textCont:{
    width:325,
    height:'100%',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:15,
  },
  title:{
    fontFamily:'Integral',
    fontSize:25,
    color:'white',
    letterSpacing:0.2,
  },
  text:{
    fontFamily:'Poppins',
    fontSize:15,
    color:'white',
    textAlign:'center',
    lineHeight:22,
    letterSpacing:1,
    marginTop:10,
  },
  appButtonContainer: {
    backgroundColor: "blue",
    width:120,
    height:31,
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    shadowOpacity: 0,
    shadowRadius: 10, 
    margin:10,
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily:'Integral',
    
  }
})
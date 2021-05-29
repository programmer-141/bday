import React from 'react';
import gimg from '../assets/Images/IMG-20210527-WA0004.jpg';
import { StyleSheet, ScrollView, Image, Text, StatusBar, View, TouchableOpacity } from 'react-native';
import bg from '../assets/bg.jpeg'

export default function PopCard ({navigation}) {
  const pressHandler = () => {
    navigation.navigate('Wishes from Loved once 💘')
  }
  const pressHandler2 = () => {
    navigation.navigate('Memories')
  }
  return(
    <>
      <View style={styles.container}>
        <Image source={bg} blurRadius={3} style={styles.image} />
        <Image source={gimg} style={styles.image2} />
      </View>
      <View style={styles.textCont}>
        <Text style={styles.title}>BirthDay Girl</Text>
        <Text style={styles.text}>Happy Birthday geetha.Nv anukunavi anni fullfill avali ani korukuntunam..and ninnu nuvu pete alarini chala miss avthunam, mem epudu okate korukuntam..happy ga undu nv elapudu...korukunavi chey...anthe chalu..once again wishing you many many more happy returns of the day.. 🎂 Idhigo cake..pandaga chesuko 🤭        
        ~ from Your Thotti Gang</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.appButtonContainer} onPress={pressHandler} >
           <Text style={styles.appButtonText}>Wishes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer} onPress={pressHandler2} >
           <Text style={styles.appButtonText}>Memories</Text>
        </TouchableOpacity>
        </View>
      </View>
    </>
    )
}

const styles = StyleSheet.create({
  container : {
    width:350,
    height:400,
    backgroundColor:'transparent',
    position:'relative',
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:400,
    height:350,
    position:'absolute',
    borderRadius:5,
    top:0,
  },
  image2:{
    width:280,
    height:300,
    borderRadius:5,
    position:'absolute',
    bottom:10,
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
    marginHorizontal:10,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily:'Integral',
    
  }
})
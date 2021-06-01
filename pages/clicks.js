import React,{useState} from 'react'
import { StyleSheet,Button , Image, Text, StatusBar, ScrollView, View,TextInput, ImageBackground} from 'react-native';
import Click from './click';

export default function Clicks () {
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <Click image={require('../assets/Images/click.jpg')} />
      <Click image={require('../assets/Images/click11.jpg')} />
      <Click image={require('../assets/Images/click12.jpg')} />
      <Click image={require('../assets/Images/click29.jpg')} />
      <Click image={require('../assets/Images/click30.jpg')} />
      <Click image={require('../assets/Images/IMG-20210527-WA0004.jpg')} />
      <Click image={require('../assets/Images/click24.jpg')} />
      <ImageBackground  source ={require('../assets/Images/click1.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Image source={require('../assets/Images/click1.jpg')} style={{width:320, height:280, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <ImageBackground  source ={require('../assets/Images/click2.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Image source={require('../assets/Images/click2.jpg')} style={{width:320, height:280, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <ImageBackground  source ={require('../assets/Images/click3.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Image source={require('../assets/Images/click3.jpg')} style={{width:320, height:280, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <Click image={require('../assets/Images/click4.jpg')} />
      <Click image={require('../assets/Images/click5.jpg')} />
      <Click image={require('../assets/Images/click6.jpg')} />
      <Click image={require('../assets/Images/click7.jpg')} />
      <Click image={require('../assets/Images/click8.jpg')} />
      <Click image={require('../assets/Images/click9.jpg')} />
      <Click image={require('../assets/Images/click10.jpg')} />
      <ImageBackground  source ={require('../assets/Images/click13.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Image source={require('../assets/Images/click13.jpg')} style={{width:300, height:350, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <Click image={require('../assets/Images/click14.jpg')} />
      <Click image={require('../assets/Images/click15.jpg')} />
      <Click image={require('../assets/Images/click16.jpg')} />
      <ImageBackground  source ={require('../assets/Images/click17.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Image source={require('../assets/Images/click17.jpg')} style={{width:300, height:250, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <Click image={require('../assets/Images/click18.jpg')} />
      <ImageBackground  source ={require('../assets/Images/click19.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Image source={require('../assets/Images/click19.jpg')} style={{width:300, height:250, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <ImageBackground  source ={require('../assets/Images/click20.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Image source={require('../assets/Images/click20.jpg')} style={{width:300, height:250, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <ImageBackground  source ={require('../assets/Images/click21.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Image source={require('../assets/Images/click21.jpg')} style={{width:300, height:250, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <ImageBackground  source ={require('../assets/Images/click22.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Image source={require('../assets/Images/click22.jpg')} style={{width:300, height:250, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
      <Click image={require('../assets/Images/click23.jpg')} />
      <Click image={require('../assets/Images/click25.jpg')} />
      <Click image={require('../assets/Images/click26.jpg')} />
      <Click image={require('../assets/Images/click27.jpg')} />
      <ImageBackground  source ={require('../assets/Images/click28.jpg')} blurRadius={40} style={styles.post}>
        <View style={styles.container2}>
          <Image source={require('../assets/Images/click28.jpg')} style={{width:350, height:250, borderRadius:5,marginVertical:20}}/>
        </View>
      </ImageBackground>
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
    color:'white',
    fontSize:20,
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
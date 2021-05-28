import React from 'react';
import { StyleSheet, ScrollView, Image, Text, StatusBar, View,TextInput } from 'react-native';
import Card from './card';
import PopCard from './popComponent';


export default function Home({navigation}) {
  return (
    <View style= {styles.container}>
      <View style={styles.nav} >
        <Text style ={styles.text}>🎂 Happy birthday Geetha 🍰</Text>
      </View>
      <ScrollView contentContainerStyle={styles.card}>
        <PopCard style={{flex:2}} navigation={navigation}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'300%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'black',
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    position:'relative',
  },
  card : {
    flex:2,
    width:'100%',
    display:'flex',
    alignItems: "center",
    justifyContent: "flex-start",
    overflow:'visible',
    backgroundColor:'transparent'
  },
  nav : {
    flex:1,
    position:'absolute',
    top:0,
    zIndex:1,
    width:'100%',
    height:60,
    backgroundColor:'black',
    position:'absolute',
    top:0,
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    fontFamily:'Integral',
    fontSize:20,
    color:'white',
    letterSpacing:1,
  },
});

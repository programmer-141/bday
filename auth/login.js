import React , {useState} from 'react';
import { StyleSheet, Image, Text, Button, View,TextInput } from 'react-native';

export default function Login({input,input2,setInput,setInput2}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text2} >Big Surprise
      is waiting for you</Text>
      <Text style={styles.text} >User</Text>
      <TextInput value = {input} onChangeText={setInput} style = {styles.input} />
      <Text style={styles.text} >Passcode</Text>
      <TextInput value = {input2} onChangeText={setInput2} style = {styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  input: {
    height: 35,
    width:'70%',
    margin: 12,
    borderWidth: 1,
    borderRadius:5,
    borderColor:'white',
    color:'white',
    fontFamily:'Integral',
    padding:5,
  },
  text:{
    fontSize:20,
    fontFamily:'Integral',
    color:'white',
    letterSpacing:0.5,
    marginTop:20,
  },
  text2:{
    fontSize:25,
    fontFamily:'Integral',
    color:'white',
    letterSpacing:0.5,
    textAlign:'center',
    marginBottom:20,
    width:'90%'
  }
});

import React , {useState} from 'react';
import { StyleSheet, Image, Text, Button, View,TextInput } from 'react-native';

export default function Login({input,setInput}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text2} >Adhi <Text style={{color:'#008fe5'}} > 1-june-2002 </Text> grahalu anni vatiki istamochinatu thiruguthunayii..sariga bhumi dhani kaksha lo thiruguthunapudu...india lo oka ammayi janminchindhi...ame pedhayi..kondharu manchi snehithulani sampadinchukuni...snathosham ga undhi..Aa ammayi peru ni enter cheyandi..</Text>
      <Text style={styles.text} >User</Text>
      <TextInput value = {input} onChangeText={setInput} style = {styles.input} />
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
    borderWidth: 1,
    borderRadius:5,
    borderColor:'white',
    color:'white',
    fontFamily:'Poppins',
    padding:5,
  },
  text:{
    fontSize:15,
    fontFamily:'Integral',
    marginVertical:20,
    color:'white',
    letterSpacing:1,
  },
  text2:{
    marginVertical:20,
    fontSize:14,
    fontFamily:'Integral',
    color:'#dddde3',
    letterSpacing:0.5,
    textAlign:'center',
    lineHeight:22,
    width:'85%'
  },
});

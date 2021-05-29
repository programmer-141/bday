import React,{useState} from 'react'
import { StyleSheet,Button , Image, Text, StatusBar, ScrollView, View,TextInput } from 'react-native';
import MemCard from './memCard';

export default function Memories () {
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <MemCard text='Jhan  Marraige' image={require('../assets/Images/grp7.jpg')} />
      <MemCard text='Little bunnies' image={require('../assets/Images/grp9.jpg')} />
      <MemCard text='No Caption' image={require('../assets/Images/grp8.jpg')} />
      <MemCard text='No Caption' image={require('../assets/Images/grp10.jpg')} />
      <MemCard text='Jhan  Marraige' image={require('../assets/Images/grp5.jpg')} />
      <MemCard text='Bridge' image={require('../assets/Images/grp4.jpg')} />
      <MemCard text="Geetha's  Home" image={require('../assets/Images/grp2.jpg')} />
      <MemCard text="EverGreen" image={require('../assets/Images/grp6.jpg')} />
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
})
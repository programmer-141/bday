import React,{useState} from 'react'
import { StyleSheet,Button , Image, Text, StatusBar, ScrollView, View,TextInput } from 'react-native';
import Post from './post.js';




export default function Card (){
  const [imageVar, setImageVar] = useState(0);

  return(
    <ScrollView 
      contentContainerStyle={styles.card}>
      <Post 
        style={{flex:2}}
        image={require('../assets/Images/ag.jpg')}
        title='Akshitha'
        dis='"Geekshitha..... My trash 💘my responsibility ❣️..."
        Happy Birthday geetha...'
      />
      <Post 
        style={{flex:2}}
       // image={require('../assets/Images/ug.jpg')}
        title='Tarun'
        //dis='"Best Best Bestee...geethu always be happy ma"
        //Happy Birthday geethu...'
      />
      <Post 
        style={{flex:2}}
        image={require('../assets/Images/ug.jpg')}
        title='Usha'
        dis='"Best Best Bestee...geethu always be happy ma"
        Happy Birthday geethu...'
      />
      <Post 
        style={{flex:2}}
        //image={require('../assets/Images/ug.jpg')}
        title='Sravani'
        //dis='"Best Best Bestee...geethu always be happy ma"
       // Happy Birthday geethu...'
      />
      <Post 
        style={{flex:2}}
        //image={require('../assets/Images/ug.jpg')}
        title='Tinku'
        //dis='"Best Best Bestee...geethu always be happy ma"
        //Happy Birthday geethu...'
      />
      <Post 
        style={{flex:2}}
        image={require('../assets/Images/k.jpg')}
        title='Karthik'
        dis='"💐🎂Happy birthday to you Geethu🎂💐
      💓Youre such a special friend to me💓......who deserves a special day for being who you are and bringing joy every day in every way😇😇😇....you make us smile and laugh with everything you do🙂....so today I got a day to send a very special birthday wishes to you Potti🎂🎂.......💓💓💓BESTIE FOR FOREVER💓💓💓"'
      />
      <Post 
        style={{flex:2}}
        //image={require('../assets/Images/ug.jpg')}
        title='Chaitu'
        //dis='"Best Best Bestee...geethu always be happy ma"
        //Happy Birthday geethu...'
      />
      <Post 
        style={{flex:2}}
        //image={require('../assets/Images/ug.jpg')}
        title='Rupesh'
        //dis='"Best Best Bestee...geethu always be happy ma"
        //Happy Birthday geethu...'
      />
      <Post 
        style={{flex:2}}
        image={require('../assets/Images/s.jpg')}
        title='Sidhu'
        dis='"Ur my Best Sister, friend, guider..etc... always be happy..kopam thaginchuko...lekapothe musalidhanivi iyipothav...🤭"
        Happy Birthday Sista...'
      />
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  card: {
    display:'flex',
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "flex-start",
    overflow:'visible'
  },
})
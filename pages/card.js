import React,{useState} from 'react'
import { StyleSheet,Button , Image, Text, StatusBar, ScrollView, View,ImageBackground } from 'react-native';
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
        image={require('../assets/Images/t.jpg')}
        title='Tarun'
        dis='"Na life lo the one and only important person anta geetha #Potti Killer headache my bestie of life"
        Happy Birthday Potti...'
      />
      <Post 
        style={{flex:2}}
        image={require('../assets/Images/m.jpg')}
        title='Mouni'
        dis='"Wish you many more happy returns of the day thalli ..stay blessed...may all ur dreams come true ma ...very nice person..nv appudu navvuthu happy undali raa ...chala thakuva tym loo manchi sister ayav ...u r a cute nd lovely person ever I met ....ma bunny nv appudu elage happy ga kalisi undali ....enka mana bonding increase avali raa ...always be happy thalli ....njoy ur day ...lv uh maa"'
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
        image={require('../assets/Images/sr.jpg')}
        title='Sravani & Tinku'
        dis='"Happy birthday Geetha...baga enjoy chey.."'
      />
      <Post 
        style={{flex:2}}
        image={require('../assets/Images/jg.jpg')}
        title='Jhanu'
        dis='"Wish you a many more happy returns of the day geetha (peetha) 😜..... Enjoy your day with full of happiness and joy bae☺️... U r my dance partner pottidana🤗... Be safe and strong peetha 😁..... Eppudu ilane happy ga navvutu undu😊😇....... And I wish neeku nachina vallatho ne nuv life anthaa happy ga undali ma🙂........and I hope every bday nuv happy ga cheskovali🤗🤗...... Inka nuv nenu chesina kangaliki panulu anni miss avuthunna😕.....I miss you peetha 😕.....I hope manam andaram tvaralone kalusukundham OK na☺️........... Inka em cheppataniki em lev bae...... Inka em chepthana ani chadhavaku OK na pani Chusko 😜....... And once again I wish you a happy birthday geetha (peetha) 😁..... Miss you 🤗🤗....stay safe and stay healthy 😊"'
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
        image={require('../assets/Images/rg.jpg')}
        title='Rupesh'
        dis='"Geethu my cute  sister a sister from another mother and my girl bestie appudu ilaney vundu aa potti#mental"
            "Wish you a many more happy returns of the day chelli #keep smiling be happy rock ur days #may all ur dreams come true"'
      />
      <ImageBackground source ={require('../assets/Images/c.jpg')} blurRadius={40} style={styles.post}>
        <Text style={styles.text}>Chaitu</Text>
        <Image source={require('../assets/Images/c.jpg')} style={{width:300, height:400, borderRadius:5,}}/>
        <Text style={styles.dis}>"geetha chala manchidhi, Potti dhi, Cute Puppy, Baga allari chesthadhi, Baga mondidhi, Frnds antye chala estam, Baga thintadhi, Baga adukovachu thindi vishayam lo"
        Happy Birthday puppy...</Text>
      </ImageBackground>
      <ImageBackground source ={require('../assets/Images/e.jpg')} blurRadius={40} style={styles.post}>
        <Text style={styles.text2}>Dad</Text>
        <Image source={require('../assets/Images/e.jpg')} style={{width:250, height:270, borderRadius:5,}}/>
        <Text style={styles.dis2}>"Happy birthday geetha thali..."</Text>
      </ImageBackground>
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
   post:{
    width:330,
    marginVertical:10,
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius:10,
  },
  text:{
    color:'black',
    fontSize:20,
    fontFamily:'Poppins',
    paddingVertical:10,
    
  },
  dis:{
    width:'97%',
    color:'black',
    fontSize:15,
    fontFamily:'Poppins',
    textAlign:'center',
    paddingVertical:20,
  },
  text2:{
    color:'black',
    fontSize:20,
    fontFamily:'Poppins',
    paddingVertical:10,
    
  },
  dis2:{
    width:'97%',
    color:'white',
    fontSize:15,
    fontFamily:'Poppins',
    textAlign:'center',
    paddingVertical:20,
  }
})
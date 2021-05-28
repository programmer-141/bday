import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import Main from './main'
import * as Font from 'expo-font';
import { StyleSheet, Image,ImageBackground , TextInput, Text, View } from 'react-native';


const getFonts = () => Font.loadAsync({
    'Integral' : require('./assets/fonts/IntegralCF-Bold.ttf'),
    'Poppins' : require('./assets/fonts/Poppins-Medium.ttf')
})


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
   if(fontsLoaded){
    return (
        <Main />
    );
   }else{
     return(
       <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
          onError ={console.log(getFonts)}
       />
     )
   }
}

import React, {useState} from 'react';
import { StyleSheet, Dimensions  } from 'react-native';
import BG from './assets/bg.jpeg';
import Login from './auth/login';
import Home from './pages/home';
import Card from './pages/card';
import Clicks from './pages/clicks';
import Memories from './pages/memories';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const {width, height} = Dimensions.get('window'); 

const Stack = createStackNavigator();

export default function Main() {
  let user = 'geetha';
  const [input, setInput] = useState(null);
  if(input === user){
    return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
            name='Home'
            component={Home} 
            options={{
                headerStyle: {
                  backgroundColor: 'black',
                  height:0,
                },
                headerTintColor: 'transparent',
                headerTitleStyle: {
                  fontFamily: 'Integral',
                },
              }}
            />
            <Stack.Screen 
            name='Wishes from Loved once 💘'
            component={Card} 
            options={{
                headerStyle: {
                  backgroundColor: '#151515',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontFamily: 'Integral',
                  fontSize:width * 0.045,
                },
              }}
            />
            <Stack.Screen 
            name='Memories'
            component={Memories} 
            options={{
                headerStyle: {
                  backgroundColor: '#151515',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontFamily: 'Integral',
                  fontSize:width * 0.045,
                },
              }}
            />
            <Stack.Screen 
            name='Best Clicks 😂💓🤭'
            component={Clicks} 
            options={{
                headerStyle: {
                  backgroundColor: '#151515',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontFamily: 'Integral',
                  fontSize:width * 0.045,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )
  }else{
    return(
      <Login input = {input} setInput = {setInput} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

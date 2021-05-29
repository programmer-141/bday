
import React, {useState} from 'react';
import { StyleSheet  } from 'react-native';
import BG from './assets/bg.jpeg';
import Login from './auth/login';
import Home from './pages/home';
import Card from './pages/card';
import Memories from './pages/memories';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function Main() {
  const user = 'geetha';
  const pass = 'geetha';
  const [input, setInput] = useState(null);
  const [input2, setInput2] = useState(null);
  if(input === pass && input2 === user){
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
                  fontSize:18,
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
                  fontSize:18,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )
  }else{
    return(
      <Login input = {input} setInput = {setInput} input2 = {input2} setInput2 = {setInput2}/>
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

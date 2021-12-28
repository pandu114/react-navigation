/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import OnboardingScreen from './Screen/OnboardingScreen';
import LoginScreen from './Screen/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage';
const Stack = createNativeStackNavigator();
const App = ({ navigation }) =>{
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(val =>{
      if(val==null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      }else{
        setIsFirstLaunch(false)
      }
    })
  },[]);
  if(isFirstLaunch === null){
    return null;
  }else if(isFirstLaunch === true){
    return(
      <NavigationContainer >
        <Stack.Navigator  screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  } else{
    return <LoginScreen />
  }
 
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  
});

export default App;


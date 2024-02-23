import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import Constant from '../constants'
import axios from 'axios'
import Constants from "../constants/"
const {MyDarkTheme, MyLightTheme} = Constant; 

const RootNavigation = () => {
  const setUrlConfig = () => {
    console.log('called setUrlConfig');
    axios.defaults.baseURL = Constants.BASE_URL;
  }

  useEffect(()=> {
    setUrlConfig();
  }, [])

  return (
    <NavigationContainer theme={MyLightTheme}>
        <AuthStack />
    </NavigationContainer>
  )
}

export default RootNavigation
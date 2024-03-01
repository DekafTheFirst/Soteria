import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, ThemeProvider } from '@react-navigation/native'
import AuthStack from './AuthStack'
import Constant from '../constants'
import axios from 'axios'
import Constants from "../constants/"
import { lightTheme, darkTheme } from '../constants'
import { useSettingsContext } from '../context/SettingsContext'
import { useAuth } from '../context/AuthContext'
import MainStack from './MainStack'
const RootNavigation = () => {
  // const setUrlConfig = () => {
  //   console.log('called setUrlConfig');
  //   axios.defaults.baseURL = Constants.BASE_URL;
  // }

  // useEffect(()=> {
  //   setUrlConfig();
  // }, [])
  const {settings} = useSettingsContext()
  const {currentUser} =  useAuth()

  return (
    <NavigationContainer theme={ settings.darkMode ? darkTheme: lightTheme}>
      {currentUser ? <MainStack/> : <AuthStack/>}
    </NavigationContainer>

  )
}

export default RootNavigation
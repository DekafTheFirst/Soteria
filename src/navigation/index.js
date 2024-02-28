import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, ThemeProvider } from '@react-navigation/native'
import AuthStack from './AuthStack'
import Constant from '../constants'
import axios from 'axios'
import Constants from "../constants/"
import { lightTheme, darkTheme } from '../constants'
import { useSettingsContext } from '../context/SettingsContext'
const RootNavigation = () => {
  // const setUrlConfig = () => {
  //   console.log('called setUrlConfig');
  //   axios.defaults.baseURL = Constants.BASE_URL;
  // }

  // useEffect(()=> {
  //   setUrlConfig();
  // }, [])
  const {settings} = useSettingsContext()
  return (
    <NavigationContainer theme={settings.darkMode ? darkTheme : lightTheme}>
      <AuthStack />
    </NavigationContainer>

  )
}

export default RootNavigation
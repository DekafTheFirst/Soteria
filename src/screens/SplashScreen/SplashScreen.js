import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import { setTokenInterceptor } from '../../utils/setTokenInterceptor';


const SplashScreen = () => {


  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=> {
      if(isLoggedIn) {
        setTokenInterceptor(user)
      }
      setIsVisible(false);
      navigation.navigate(isLoggedIn ? 'Tabs': 'Login')
    }, 1000)
  }, [])

 

  return (
    <View style={styles.iconContainer}>
      <View >
        <Image source={require("../../Assets/splash_icon_dark.png")} style={{ width: 150, height: 150, resizeMode: "contain" }}/>
      </View>
    </View>
  )
}


export default SplashScreen
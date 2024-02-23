import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { setTokenInterceptor } from '../../utils/setTokenInterceptor';


const SplashScreen = ({...props}) => {

  const {isLoggedIn, user} = props;

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

SplashScreen.propTypes = {
  user: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return {
      user: state.auth.user,
      isLoggedIn: state.auth.isLoggedIn,
      accessToken: state.auth.accessToken
  }
}

const mapDispatchToProps = (dispatch) => {return {}}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
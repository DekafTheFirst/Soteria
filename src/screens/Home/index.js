import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Home = ({...props}) => {
  useEffect(()=>{
  },[])
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
      user: state.auth.user,
      isLoggedIn: state.auth.isLoggedIn,
      accessToken: state.auth.accessToken

  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUserLogin: (user, isLoggedIn) => dispatch(updateUserLogin(user, isLoggedIn)),
  updateUserAccessToken: (token) => dispatch(updateUserAccessToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)


import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImageBackground } from 'expo-image'
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { createStyles } from './styles';


const Connect = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const { currentUser, logout } = useAuth()
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        {/* <Image
                    source={require('../Assets/abstract-1.jpg')}
                    resizeMethod='scale'
                    style={styles.imageBackground}
                /> */}
        <ImageBackground
          source={require('../../Assets/abstract-1.jpg')}
          resizeMethod='scale'
          style={styles.imageBackground}
        >
          <View style={styles.featuredContentInner}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Sermons</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}

export default Connect
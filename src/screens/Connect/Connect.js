import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
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
    <ScrollView style={styles.container}>
      {!currentUser.member ? (
        <TouchableOpacity style={styles.card}>
          <View style={styles.darkOverlay}></View>
          <ImageBackground
            source={require('../../Assets/abstract-5.jpg')}
            resizeMethod='scale'
            style={styles.imageBackground}
          >
            <View style={[styles.contentWrapper]}>
              <Text style={styles.contentTitle}>Sodip</Text>
            </View>
            <Text style={styles.footerText}>Go Through the Soteria Discipleship Program</Text>
          </ImageBackground>
        </TouchableOpacity>) : (
        <TouchableOpacity style={styles.card}>
          <View style={styles.darkOverlay}></View>
          <ImageBackground
            source={require('../../Assets/abstract-1.jpg')}
            resizeMethod='scale'
            style={styles.imageBackground}
          >
            <View style={[styles.contentWrapper]}>
              <Text style={styles.contentTitle}>Become A Member</Text>
            </View>
            <Text style={styles.footerText}>Go Through the Membership Training Program</Text>
          </ImageBackground>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.card}>
        <View style={styles.darkOverlay}></View>
        <ImageBackground
          source={require('../../Assets/abstract-2.jpg')}
          resizeMethod='scale'
          style={styles.imageBackground}
        >
          <View style={[styles.contentWrapper]}>
            <Text style={[styles.contentTitle]}>Join a socith group</Text>
          </View>
          <Text style={styles.footerText}>Soteria Church in The Home</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.darkOverlay}></View>
        <ImageBackground
          source={require('../../Assets/abstract-4.jpg')}
          resizeMethod='scale'
          style={styles.imageBackground}
        >
          <View style={[styles.contentWrapper, styles.prayerRequestWrapper]}>
            <Text style={[styles.contentTitle, styles.prayerRequests]}>Prayer Requests</Text>
          </View>
          <Text style={styles.footerText}>Soteria Church in The Home</Text>
        </ImageBackground>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Connect
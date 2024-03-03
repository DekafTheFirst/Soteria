import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ImageBackground } from 'expo-image'
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAuth } from '../../../context/AuthContext';
import SodipCard from '../Sodip/SodipCard';
import SocithCard from '../socith/socithCard';
import PrayerRequestsCard from '../prayerRequests/prayerRequestsCard';
import BecomeAMember from '../becomeAMember/becomeAMember';
import BecomeAMemberCard from '../becomeAMember/becomeAMemberCard';


const Connect = () => {
  const { colors } = useTheme();

  const { currentUser, logout } = useAuth()
  const navigation = useNavigation()

  return (
    <ScrollView>
      {currentUser && !currentUser.member ? (
        <TouchableOpacity onPress={() => {
          navigation.navigate('SODIP')
        }}>
          <SodipCard footerText='Go Through the Soteria Discipleship Program' />
        </TouchableOpacity>) : (
        <TouchableOpacity onPress={()=>{navigation.navigate('BecomeAMember')}}>
          <BecomeAMemberCard footerText='Go Through the Membership Training Program' />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate('SOCITH')} >
        <SocithCard footerText='Soteria Church in The Home' />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('PrayerRequests')} >
        <PrayerRequestsCard />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Connect
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStyles, styles } from './styles'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Image } from 'expo-image';
import EventsList from '../../components/EventsList';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  // useEffect(()=>{
  //   fetchEvents()
  // },[])
  const { colors } = useTheme();
  const navigation = useNavigation()
  const { currentUser } = useAuth()
  const styles = createStyles(colors)


  const events = [
    { title: 'WOMEN\'S BREAKFAST MEETING', time: '10:00AM', date: '12-09-2024', id: 1, imgUrl: require('../../Assets/pray.jpg'), desc: "When we walk with the lord we learn to trust his word. When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word." },
    { title: 'Trusting the word of God', time: '10:00AM', date: '12-09-2024', id: 2, imgUrl: require('../../Assets/sermon.jpg'), desc: "When we walk with the lord we learn to trust his word. When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word." },
    { title: 'Trusting the word of God', time: '10:00AM', date: '12-09-2024', id: 3, imgUrl: require('../../Assets/abstract-1.jpg'), desc: "When we walk with the lord we learn to trust his word. When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word." },
  ]

  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.userDetails}>
        <TouchableOpacity style={styles.userAvatarWrapper} onPress={() => { navigation.navigate('EditProfile') }}>
          <Image source={require('../../Assets/person.jpg')} style={styles.userAvatar} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userNotificationsBtn}>
          <FontAwesome name="bell-o" size={20} color='black' />
          <View style={styles.userNotificationsBtnRedDot}></View>
        </TouchableOpacity>
      </View>

      {/* <View style={{marginTop: 40}}>
        <Text style={{fontSize: 32, fontWeight:"600"}}>
          Welcome Member
        </Text>
      </View> */}

      <View style={{ marginTop: 40 }}>
        <Text style={styles.sectionTitle}>
          Featured
        </Text>

        <View style={styles.featured}>
          <View style={[styles.column, styles.column1]}>
            <TouchableOpacity onPress={() => { navigation.navigate('Sermons') }} style={[styles.featuredCard, styles.sermons]}>
              <Image
                source={require('../../Assets/preaching.jpg')}
                resizeMethod='scale'
                style={styles.imageBackground}
              />
              <View style={styles.featuredContentInner}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Sermons</Text>
                <View style={{ marginTop: "auto" }}>
                  <AntDesign name="playcircleo" size={32} color="white" />
                  <Text style={{ color: 'white', fontSize: 16, marginTop: 5 }}>Watch Here</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.column, styles.column2]}>
            <View style={[styles.featuredContentWrapper, styles.prayerRequestsWrapper]}>
              <TouchableOpacity onPress={() => { navigation.navigate('PrayerRequests') }} style={[styles.featuredCard, styles.prayerRequests]}>

                <Image
                  source={require('../../Assets/pray.jpg')}
                  resizeMethod='scale'
                  style={styles.imageBackground}
                />
                <View style={styles.overlay}></View>

                <View style={styles.featuredContentInner}>

                  <Text style={styles.featuredContentTitle}>Prayer Requests</Text>
                  <View style={styles.featuredContentFooter}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Let's pray together</Text>
                    <AntDesign name="right" size={20} color="white" />
                  </View>
                </View>
              </TouchableOpacity>

            </View>

            {currentUser?.memeber ? (
              <View style={[styles.featuredContentWrapper, styles.connectWrapper]}>
                <TouchableOpacity style={[styles.featuredCard, styles.connect]} onPress={() => navigation.navigate('SODIP')}>

                  <Image
                    source={require('../../Assets/abstract-6.jpg')}
                    resizeMethod='scale'
                    style={styles.imageBackground}
                  />
                  <View style={styles.overlay}></View>

                  <View style={styles.featuredContentInner}>

                    <Text style={styles.featuredContentTitle}>Soteria Discipleship</Text>
                    <View style={styles.featuredContentFooter}>
                      <Text style={{ color: 'white', fontSize: 16 }}>SODIP</Text>
                      <AntDesign name="right" size={20} color="white" />
                    </View>
                  </View>

                </TouchableOpacity>

              </View>
            ) : (
              <View style={[styles.featuredContentWrapper, styles.connectWrapper]}>
                <TouchableOpacity style={[styles.featuredCard, styles.connect]} onPress={() => navigation.navigate('BecomeAMember')}>

                  <Image
                    source={require('../../Assets/abstract-2.jpg')}
                    resizeMethod='scale'
                    style={styles.imageBackground}
                  />
                  <View style={styles.overlay}></View>

                  <View style={styles.featuredContentInner}>

                    <Text style={styles.featuredContentTitle}>Become A Member</Text>
                    <View style={styles.featuredContentFooter}>
                      <Text style={{ color: 'white', fontSize: 16 }}>Join Us</Text>
                      <AntDesign name="right" size={20} color="white" />
                    </View>
                  </View>

                </TouchableOpacity>

              </View>
            )}
          </View>


        </View>
      </View>

      <View style={{ marginTop: 30, marginBottom: 60 }}>
        <Text style={styles.sectionTitle}>
          Events
        </Text>
        <EventsList />
      </View>
    </ScrollView>
  )
}


export default Home


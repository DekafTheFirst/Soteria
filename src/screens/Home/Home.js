import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { createStyles, styles } from './styles'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'expo-image';

const Home = () => {
  // useEffect(()=>{
  //   fetchEvents()
  // },[])
  const { colors } = useTheme();
  const navigation = useNavigation()
  
  const styles = createStyles(colors)
  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.userDetails}>
        <TouchableOpacity style={styles.userAvatarWrapper}>
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
            <TouchableOpacity onPress={()=>{navigation.navigate('Media')}}style={[styles.featuredCard, styles.sermons]}>
              <Image
                source={require('../../Assets/sermon.jpg')}
                resizeMethod='scale'
                style={styles.imageBackground}
              />
              <View style={styles.featuredContentInner}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Sermons</Text>
                <View style={{ marginTop: "auto" }}>
                  <AntDesign name="playcircleo" size={45} color="white" />
                  <Text style={{ color: 'white', fontSize: 18, marginTop: 5 }}>Watch Here</Text>
                </View>
              </View>

            </TouchableOpacity>
          </View>

          <View style={[styles.column, styles.column2]}>
            <View style={[styles.featuredContentWrapper, styles.prayerRequestsWrapper]}>
              <TouchableOpacity onPress={()=>{navigation.navigate('PrayerRequests')}}style={[styles.featuredCard,styles.prayerRequests]}>

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
            <View style={[styles.featuredContentWrapper, styles.connectWrapper]}>
              <TouchableOpacity style={[styles.featuredCard, styles.connect]} onPress={()=>navigation.navigate('SODIP')}>

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
          </View>


        </View>
      </View>

      <View style={{ marginTop: 30, marginBottom: 60 }}>
        <Text style={styles.sectionTitle}>
          Events
        </Text>
        <View style={{ marginTop: 20, gap: 20 }}>
          <TouchableOpacity style={styles.event}>
            <Image
              source={require('../../Assets/pray.jpg')}
              resizeMethod='scale'
              style={styles.imageBackground}
            />
            <View style={[styles.overlay, styles.eventOverlay]}></View>

            <View style={styles.eventContentInner}>
              <Text style={styles.eventTitle}>WOMEN'S BREAKFAST MEETING</Text>
              <Text style={styles.eventDate}>FEBRUARY 24TH</Text>
              <Text style={styles.eventTime}>10:00AM</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity style={styles.event}><Text>Event</Text></TouchableOpacity>
          <TouchableOpacity style={styles.event}><Text>Event</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}


export default Home


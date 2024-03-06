import { Button, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { getEventVideo } from '../api/Events';
import { Video } from 'expo-av';
import { openExternalLink } from './OpenExternalLink';

const EventDetails = ({ route }) => {
  const { event } = route.params
  const { colors } = useTheme();
  const navigation = useNavigation();
  const styles = createStyles(colors)

  const [videoUri, setVideoUri] = useState(null)
  const video = useRef(null)

  useEffect(() => {
    const fetchEventVideo = async () => {
      const eventVideoUri = await getEventVideo(event.id)
      if (eventVideoUri) setVideoUri(`http://192.168.5.197:1337${eventVideoUri}`)
    }

    if (!videoUri) fetchEventVideo()
  }, [videoUri])





  return (
    <ScrollView style={styles.container}>
      {videoUri ? (
        <Video
          ref={video}
          source={{ uri: videoUri }}
          style={styles.headerImage}
          resizeMode='contain'
          useNativeControls
          shouldPlay

        />
      ) : (<Image source={{ uri: event.attributes.imageUri }} style={styles.headerImage} />)}

      <View style={styles.content}>
        <View style={styles.item}>
          <View style={styles.iconWrapper}>
            <Ionicons name="book" size={24} color={colors.text} style={styles.icon} />
          </View>
          <Text style={styles.title}>{event.attributes.title}</Text>
        </View>



        <View style={styles.item}>
          <View style={styles.iconWrapper}>
            <Ionicons name="calendar-number" size={24} color={colors.text} style={styles.icon} />
          </View>
          <Text style={styles.date}>{event.attributes.date}</Text>
        </View>


        {event.attributes.time &&
          <View style={styles.item}>
            <View style={styles.iconWrapper}>
              <Ionicons name="time" size={24} color={colors.text} style={styles.icon} />
            </View>
            <Text style={styles.preacher}>{event.attributes.time}</Text>
          </View>
        }

        <View style={styles.item}>
          {event.attributes.theme && <Text style={styles.theme}>Theme: {event.attributes.theme}</Text>}
        </View>



      </View>

      <View style={{
        padding: 20, paddingBottom: 100,
      }}>
        <Text style={styles.desc}>{event.attributes.description}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => openExternalLink('https://docs.google.com/forms/d/e/1FAIpQLSdT8jHfLqodAOG-OJoHgj7LKzECVkzYL34uB1QMA5NfoOTzZQ/viewform?usp=embed_facebook')}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}


export default EventDetails

export const createStyles = (colors) => {

  const brightShadow = {
    shadowColor: '#fff', // White shadow color
    shadowOffset: { width: 0.4, height: 0.4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // For Android
  }
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background
    },

    headerImage: {
      width: '100%',
      aspectRatio: 16 / 9
    },

    content: {
      marginTop: 10,
      padding: 20,
      borderBottomColor: colors.gray,
      borderBottomWidth: 2
    },

    item: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15
    },

    iconWrapper: {
      width: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },

    title: {
      color: colors.text,
      marginLeft: 10,
      fontSize: 24,
      fontWeight: '600'
    },

    preacher: {
      color: colors.text,
      fontSize: 16,
      marginLeft: 10,
      fontWeight: '600'
    },

    date: {
      fontSize: 16,
      color: colors.text,
      fontWeight: '400',
      marginLeft: 10,
      fontWeight: '600'


    },
    theme: {
      fontSize: 16,
      color: colors.text,
      textTransform: 'capitalize',
      fontWeight: '600'
    },
    desc: {
      fontSize: 18,
      color: colors.text,
      fontWeight: '400',
    },
    btn: {
      marginTop: 30,
      borderWidth: 2,
      borderColor: colors.gold,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },
    btnText: {
      color: colors.gold,
      fontWeight: '800',
      textTransform: 'uppercase'
    }


  })
}

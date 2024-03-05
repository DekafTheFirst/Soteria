import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';

const EventDetails = ({ route }) => {
  const { event } = route.params
  const { colors } = useTheme();
  const navigation = useNavigation();
  const styles = createStyles(colors)

  return (
    <View style={styles.container}>
      <YoutubePlayer
      
        height={240}
        play={false}
        videoId={"iee2TATGMyI"}
      />
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


        <View style={styles.item}>
          <View style={styles.iconWrapper}>
            <Ionicons name="time" size={24} color={colors.text} style={styles.icon} />
          </View>
          <Text style={styles.preacher}>{event.attributes.time}</Text>
        </View>


        <Text style={styles.desc}>{event.attributes.description}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Leave Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

EventDetails.navigationOptions = ({ route }) => {
  const { item } = route.params
  return {
    title: item.customTitle,
  };
};

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
          paddingBottom: 40,
          backgroundColor: colors.background
      },

      content: {
          padding: 20
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
          fontSize: 18,
          fontWeight: '600'
      },

      preacher: {
          color: colors.text,
          fontSize: 16,
          marginLeft: 10,

      },
      date: {
          fontSize: 16,
          color: colors.text,
          fontWeight: '400',
          marginLeft: 10,

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
          color:colors.gold,
          fontWeight: '800',
          textTransform: 'uppercase'
      }
      

  })
}

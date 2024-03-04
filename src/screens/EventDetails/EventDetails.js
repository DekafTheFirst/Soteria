import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './styles';
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
          <Text style={styles.title}>{event.title}</Text>
        </View>

        

        <View style={styles.item}>
          <View style={styles.iconWrapper}>
            <Ionicons name="calendar-number" size={24} color={colors.text} style={styles.icon} />
          </View>
          <Text style={styles.date}>{event.date}</Text>
        </View>


        <View style={styles.item}>
          <View style={styles.iconWrapper}>
            <Ionicons name="time" size={24} color={colors.text} style={styles.icon} />
          </View>
          <Text style={styles.preacher}>{event.time}</Text>
        </View>


        <Text style={styles.desc}>{event.desc}</Text>
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


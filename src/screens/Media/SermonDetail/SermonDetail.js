import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './styles';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';

const SermonDetails = ({ route }) => {
  const { sermon } = route.params
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
            <Ionicons name="book-outline" size={24} color={colors.text} style={styles.icon} />
          </View>
          <Text style={styles.title}>{sermon.title}</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.iconWrapper}>
            <Ionicons name="person" size={24} color={colors.text} style={styles.icon} />
          </View>
          <Text style={styles.preacher}>{sermon.preacher}</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.iconWrapper}>
            <Ionicons name="calendar-number" size={24} color={colors.text} style={styles.icon} />
          </View>
          <Text style={styles.date}>{sermon.date}</Text>
        </View>
        <Text style={styles.desc}>{sermon.desc}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Leave Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

// SermonDetails.navigationOptions = ({ navigation }) => {
//   const customTitle = navigation.getParam('title', 'Default Title'); // Get the customTitle prop from navigation
//   console.log(customTitle)
//   return {
//     title: customTitle,
//   };
// };

export default SermonDetails


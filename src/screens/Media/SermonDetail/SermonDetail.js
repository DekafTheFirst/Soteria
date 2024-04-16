import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './styles';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';

const SermonDetails = ({ route }) => {
  const { sermon } = route.params
  const { colors } = useTheme();
  const navigation = useNavigation();
  const styles = createStyles(colors)
  const [videoIsLoading, setVideoLoading] = useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.videoPlayerWrapper}>
        {/* {videoIsLoading && <ActivityIndicator color={colors.text} />} */}
        <YoutubePlayer
          height={240}
          width={"100%"}
          play={true}
          videoId={"q7zWxLABE1U"}
          onReady={() => {
            setVideoLoading(false)
          }}
        />
      </View>

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


export default SermonDetails


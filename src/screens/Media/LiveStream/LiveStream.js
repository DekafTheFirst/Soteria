import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getLiveStream } from '../../../api/Events'
import { createStyles } from '../SermonDetail/styles'
import { useNavigation, useTheme } from '@react-navigation/native'
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';
import { openExternalLink } from '../../../components/OpenExternalLink'

const LiveStream = () => {
    const [liveStreamUrl, setLiveStreamUrl] = useState(null)
    const [loading, setLoading] = useState(true)

    const { colors } = useTheme();
    const navigation = useNavigation();
    const styles = createStyles(colors);

    const extractVideoId = (url) => {
        // Regular expression to match YouTube video ID from URL
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      
        // Extract video ID from URL using regular expression
        const match = url.match(regExp);
        
        // Return the video ID or null if no match found
        return match ? match[1] : null;
    }

    useEffect(() => {
        const fetchLiveStreamID = async () => {
            setLoading(true)
            const response = await getLiveStream()
            setLiveStreamUrl(response)
            setLoading(false)
        }

        if (!liveStreamUrl) fetchLiveStreamID()
    }, [liveStreamUrl])

    return (
        <View style={styles.container}>
            <View style={{justifyContent:'center', maxHeight: 300}}>
                {loading ? (<ActivityIndicator color={colors.text} size={'large'}/>) : (
                <YoutubePlayer
                    height={240}
                    play={false}
                    videoId={extractVideoId(liveStreamUrl)}
                />)}
            </View>

            <View style={styles.content}>
                <View style={styles.item}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="book-outline" size={24} color={colors.text} style={styles.icon} />
                    </View>
                    <Text style={styles.title}>Sermon Title</Text>
                </View>

                <View style={styles.item}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="person" size={24} color={colors.text} style={styles.icon} />
                    </View>
                    <Text style={styles.preacher}>Sermon Preacher</Text>
                </View>

                <View style={styles.item}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="calendar-number" size={24} color={colors.text} style={styles.icon} />
                    </View>
                    <Text style={styles.date}>Date</Text>
                </View>
                <Text style={styles.desc}>Desc</Text>
                <TouchableOpacity style={styles.btn} onPress={() => openExternalLink(liveStreamUrl)}>
                    <Text style={styles.btnText}>Leave Comment</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LiveStream
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStyles } from '../screens/Home/styles';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';

const events = [
    { title: 'WOMEN\'S BREAKFAST MEETING', time: '10:00AM', date: '12-09-2024', id: 1, imgUrl: require('../Assets/preaching.jpg'), desc: "When we walk with the lord we learn to trust his word. When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word." },
    { title: 'Trusting the word of God', time: '10:00AM', date: '12-09-2024', id: 2, imgUrl: require('../Assets/sermon.jpg'), desc: "When we walk with the lord we learn to trust his word. When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word." },
    { title: 'Trusting the word of God', time: '10:00AM', date: '12-09-2024', id: 3, imgUrl: require('../Assets/abstract-1.jpg'), desc: "When we walk with the lord we learn to trust his word. When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word." },
  ]

const EventsComponent = () => {
    const { colors } = useTheme();
    const navigation = useNavigation()

    const styles = createStyles(colors)
    return (
        <View style={{ marginTop: 20, gap: 20 }}>
            {events.map((item, index) => {
                return (
                    <TouchableOpacity key={item.id} style={styles.event} onPress={() => navigation.navigate('EventDetails', { event: item })}>
                        <Image
                            source={require('../Assets/pray.jpg')}
                            resizeMethod='scale'
                            style={styles.imageBackground}
                        />
                        <View style={[styles.overlay, styles.eventOverlay]}></View>
                        <View style={styles.eventContentInner}>
                            <Text style={styles.eventTitle}>{item.title}</Text>
                            <Text style={styles.eventDate}>{item.date}</Text>
                            <Text style={styles.eventTime}>{item.time}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default EventsComponent
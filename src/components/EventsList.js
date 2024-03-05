import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStyles } from '../screens/Home/styles';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { fetchEvents } from '../api/Events';
import moment from 'moment';

const eventsObject = [
    { attributes: { title: 'WOMEN\'S BREAKFAST MEETING', time: '10:00AM', date: '12-09-2024', id: 1, imgUrl: require('../Assets/preaching.jpg'), desc: "When we walk with the lord we learn to trust his word. When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word." } },
]

const EventsList = () => {
    const { colors } = useTheme();
    const navigation = useNavigation()
    const [events, setEvents] = useState(null)

    useEffect(() => {
        const fetchEventsData = async () => {
            const response = await fetchEvents()
            const eventsData = response.data
            setEvents(eventsData)
        }
        if (!events) fetchEventsData()
    }, [events])

    const formatDateTime = (dateString, timeString) => {
        const formattedDate = moment(dateString).format('Do MMMM, YYYY');
        const formattedTime = moment(timeString, 'HH:mm:ss').format('h:mmA');

        return {
            date: formattedDate,
            time: formattedTime
        }
    }

    const styles = createStyles(colors)
    return (
        <View style={{ marginTop: 20, gap: 20 }}>
            {events && events.map((item, index) => {
                const { date, time } = formatDateTime(item.attributes.date, item.attributes.time);
                const imageUri = `http://192.168.5.197:1337${item.attributes.image.data.attributes.url}`
                if (item.attributes.specialStyling == true) {
                    return (
                        <TouchableOpacity key={item.id} style={styles.event} onPress={() => navigation.navigate('EventDetails', { event: item })}>
                            
                        </TouchableOpacity>
                    )
                }

                else {
                    return (
                        <TouchableOpacity key={item.id} style={styles.event} onPress={() => navigation.navigate('EventDetails', { event: item })}>
                            <Image
                                source={{uri: imageUri}}
                                resizeMethod='scale'
                                style={styles.imageBackground}
                            />
                            <View style={[styles.overlay, styles.eventOverlay]}></View>
                            <View style={styles.eventContentInner}>
                                <Text style={styles.eventTitle}>{item.attributes.title}</Text>
                                <Text style={styles.eventDate}>{date}</Text>
                                <Text style={styles.eventTime}>{time}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }

            })}
        </View>
    )
}

export default EventsList
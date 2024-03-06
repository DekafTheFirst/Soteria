import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { fetchEvents } from '../api/Events';
import moment from 'moment';
import CustomEventCard from './CustomEventCard';
import { StyleSheet } from "react-native";





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
        let formattedTime = null
        let formattedDate = null

        if (dateString) formattedDate = moment(dateString).format('Do MMMM, YYYY');
        if (timeString) formattedTime = moment(timeString, 'HH:mm:ss').format('h:mmA');


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
                item = { ...item, attributes: { ...item.attributes, date, time, imageUri } }



                return (
                    <TouchableOpacity key={item.id} style={styles.event} onPress={() => navigation.navigate('EventDetails', { event: item })}>
                        <Image
                            source={{ uri: imageUri }}
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


            })}
        </View>
    )
}

export default EventsList








const createStyles = (colors) => {
    const brightShadow = {
        shadowColor: '#fff', // White shadow color
        shadowOffset: { width: 0.4, height: 0.4 },
        shadowOpacity: 0.01,
        shadowRadius: 5,
        elevation: 5, // For Android
    }


    return StyleSheet.create({
        imageBackground: {
            borderRadius: 20,
            ...StyleSheet.absoluteFillObject,
            zIndex: -1, // Ensure that the image is behind other content
        },

        event: {
            height: 220,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            overflow: 'hidden',

        },

        overlay: {
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        eventContentInner: {
            padding: 10,
            height: "100%",
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            backgroundColor: 'transparent',

        },

        eventTitle: {
            fontSize: 28,
            width: "90%",
            textAlign: "center",
            color: 'white',
            fontWeight: '900',
            textTransform: 'uppercase'

        },

        eventDate: {
            fontSize: 20,
            textAlign: "center",
            color: 'white',
            fontWeight: '500'
        },

        eventTime: {
            fontSize: 20,
            textAlign: "center",
            color: 'white',
            fontWeight: '800'
        }
    })
}
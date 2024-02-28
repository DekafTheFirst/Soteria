import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const createStyles = (colors) => {

    return StyleSheet.create({
        homeContainer: {
            flex: 1,
            padding: 20,
            backgroundColor: colors.background
        },
        userDetails: {
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        userAvatar: {
            width: 60,
            height: 60,
            objectFit: 'cover'
        },

        userAvatarWrapper: {
            borderRadius: "20",
            overflow: 'hidden'

        },
        userNotificationsBtn: {
            backgroundColor: colors.card2Background,
            padding: 8,
            borderRadius: 10,
            
            elevation: 3, // Elevation for Android shadow
            shadowColor: colors.text, // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.2, // Shadow opacity
            shadowRadius: 4,
        },
        userNotificationsBtnRedDot: {
            width: 8,
            height: 8,
            position: "absolute",
            backgroundColor: 'red',
            right: 0,
            top: -2,
            borderRadius: '50%',


        },

        sectionTitle: {
            fontSize: 24, 
            fontWeight: "600", 
            color: colors.text,
        },

        featured: {

            marginHorizontal: -20,
            flexDirection: 'row',
        },

        column: {
            height: 300,
            width: '50%',
            padding: 20,
        },

        column1: {
            paddingRight: 10
        },

        column2: {
            paddingLeft: 10,
        },

        sermons: {
            width: '100%',
            height: "100%",
            overflow: 'hidden',
            borderRadius: 15,
        },

        featuredContentWrapper: {
            width: "100%",
            height: "50%",
        },

        prayerRequestsWrapper: {
            paddingBottom: 10,
        },

        connectWrapper: {
            paddingTop: 10,
        },


        prayerRequests: {
            width: '100%',
            height: "100%",
            overflow: 'hidden',
            borderRadius: 15,

        },
        connect: {
            width: '100%',
            height: "100%",
            overflow: 'hidden',
            borderRadius: 15,

        },

        imageBackground: {
            ...StyleSheet.absoluteFillObject,
            zIndex: -1, // Ensure that the image is behind other content
        },

        featuredContentInner: {
            padding: 10, height: "100%"
        },

        featuredContentTitle: {
            color: 'white',
            fontSize: 16,
            fontWeight: '700'
        },

        featuredContentFooter: {
            marginTop: "auto",
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        overlay: {
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: 'rgba(0, 0, 0, 0.2)',

        },


        event: {
            height: 220,
            backgroundColor: 'white',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        },

        eventContentInner: {
            padding: 10,
            height: "100%",
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5
        },

        eventTitle: {
            fontSize: 28,
            width: "90%",
            textAlign: "center",
            color: 'white',
            fontWeight: '900'
        },

        eventDate: {
            fontSize: 16,
            textAlign: "center",
            color: 'white',
            fontWeight: '500'
        },

        eventTime: {
            fontSize: 16,
            textAlign: "center",
            color: 'white',
            fontWeight: '800'
        },

    })
}
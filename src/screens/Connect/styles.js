import { StyleSheet } from "react-native";

export const createStyles = (colors) => StyleSheet.create({
    card: {
        height: 220,
    },
    imageBackground: {
        height: '100%',
        opacity: 0.9,
        justifyContent:"center",
    },
    contentWrapper: {
        justifyContent:"center",
        alignItems: 'center',
        height: "85%",
        width: "100%"
    },
    contentTitle: {
        color: 'white', 
        fontSize: 32, 
        fontWeight: '900', 
        textTransform: 'uppercase',
        textAlign: 'center',
        width: '80%',
    },
    contentTitle: {
        color: 'white', 
        fontSize: 32, 
        fontWeight: '900', 
        textTransform: 'uppercase',
        textAlign: 'center',
        width: '80%',
    },
    prayerRequests: {
        fontWeight: '400',
        width: '40%',
        lineHeight: 93,
        fontFamily: 'RobotoSlab_400Regular'
        
    },
    darkOverlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -100,
        backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    footerText: {
        marginLeft: 10,
        fontWeight: '600',
        color: '#fff',
        textTransform: 'capitalize'
    }
    // imageBackground: {
    //     ...StyleSheet.absoluteFillObject,
    //     zIndex: -1, // Ensure that the image is behind other content
    // },
})
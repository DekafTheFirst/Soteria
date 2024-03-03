import { StyleSheet } from "react-native";

export const createStyles = (colors, focused) => StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // scrollContainer: {

    // },
    // headerImage: {
    //     width: '100%',
    //     aspectRatio: 16 / 9
    // },
    // textWrapper: {
    //     padding: 20,
    //     width: "100%",
    //     borderBottomColor: colors.gold,
    //     borderBottomWidth: 1

    // },
    // inputContainer: {
    //     width: "100%",
    //     padding: 20
    // },

    // formContainer: {
    //     marginTop: 20,
    //     padding: 20,
    // },

    // input: {
    //     marginBottom: 20,
    //     height: 55,
    //     width: "100%",
    //     color: colors.text,
    //     backgroundColor: colors.cardBackground,
    //     borderWidth: 1,
    //     borderColor: focused ? colors.color1 : colors.gray,
    //     borderRadius: 10,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     overflow: 'hidden',
    // },

    // btnContainer: {
    //     borderRadius: 10,
    //     backgroundColor: colors.gold,
    //     marginTop: '10%',
    // },
    // imageBackground: {
    //     ...StyleSheet.absoluteFillObject,
    //     zIndex: -1, // Ensure that the image is behind other content
    // },

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
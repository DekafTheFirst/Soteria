import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const createStyles = (colors) => {

    const brightShadow = {
        shadowColor: '#fff', // White shadow color
        shadowOffset: { width: 0.4, height: 0.4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5, // For Android
    }
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingBottom: 40,
            paddingHorizontal: 25,
            backgroundColor: colors.background
        },
        imageBackground: {
            borderRadius: 15,
            ...StyleSheet.absoluteFillObject,
            zIndex: -1, // Ensure that the image is behind other content
        },

        overlay: {
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },

        list: {
            paddingTop: 30
        },

        sermon: {
            height: 220,
            justifyContent: 'center',
            borderRadius: 20,
            overflow: 'hidden',
            marginBottom: 30,
        },

        sermonContentInner: {
            padding: 12,
            paddingLeft: 15,
            height: "100%",
            gap: 1,
            backgroundColor: 'transparent',

        },

        sermonTitle: {
            fontSize: 24,
            width: "90%",
            color: 'white',
            fontWeight: '500',
            textTransform: 'capitalize'
        },

        sermonPreacher: {
            fontSize: 18,
            color: 'white',
            fontWeight: '400',
            textTransform: 'capitalize'
        },

        sermonDate: {
            fontSize: 20,
            fontStyle: 'italic',
            color: 'white',
            fontWeight: '400'
        },

    })
}
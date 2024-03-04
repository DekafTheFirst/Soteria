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
            paddingVertical: 40,
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
            backgroundColor: 'rgba(0, 1, 0, 0.1)',
        },

        headerImage: {
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            overflow: 'hidden',
        },
        btnContainer:{
            marginTop: 40
        },

        btn: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.card2Background,
            borderRadius: 10,
            elevation: 3, // Elevation for Android shadow
            shadowColor: colors.text, // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.2, // Shadow opacity
            shadowRadius: 4,
            overflow: 'hidden',
            marginBottom: 20,
        },

        btnImage: {
            flex: 2,
            aspectRatio: 16/9,
            backgroundColor: 'gray'
        },

        btnContent: {
            padding: 10,
            flex: 3,
            flexDirection: 'row',
            width: 'auto',
            alignItems: 'center'
        },
        btnText: {
            fontWeight: '600',
        },
        btnCaret: {
            marginLeft: 'auto'
        }

    })
}
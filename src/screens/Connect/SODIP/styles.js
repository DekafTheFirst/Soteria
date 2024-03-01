import { StyleSheet } from "react-native";

export const createStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 200
    },

    headerImage: {
        width: '100%',
        aspectRatio: 9 / 16
    },
    textWrapper: {
        padding: 20,
        borderBottomColor: colors.text,
        borderBottomWidth: 1

    },
    formContainer : {
        marginTop: 20,
        padding: 20
    },
    
    // imageBackground: {
    //     ...StyleSheet.absoluteFillObject,
    //     zIndex: -1, // Ensure that the image is behind other content
    // },
})
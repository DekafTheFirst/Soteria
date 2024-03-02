import { StyleSheet } from "react-native";

export const createStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {

    },
    headerImage: {
        width: '100%',
        aspectRatio: 16 / 9
    },
    textWrapper: {
        padding: 20,
        width: "100%",
        borderBottomColor: colors.gold,
        borderBottomWidth: 1

    },
    inputContainer: {
        width: "100%"
    },
    formContainer: {
        marginTop: 20,
        padding: 20,
        marginBottom: 10
    },

    btnContainer: {
        borderRadius: 10,
        backgroundColor: colors.gold,
        marginTop: '10%',
    },
    // imageBackground: {
    //     ...StyleSheet.absoluteFillObject,
    //     zIndex: -1, // Ensure that the image is behind other content
    // },
})
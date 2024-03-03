import { StyleSheet } from "react-native";

export const createStyles = (colors, focused) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        borderBottomColor: colors.gray,
        borderBottomWidth: 1

    },
    inputContainer: {
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 150
    },

    formContainer: {
        marginTop: 20,
        padding: 20,
        paddingBottom: 100,

        
    },

    input: {
        marginBottom: 20,
        height: 55,
        width: "100%",
        color: colors.text,
        backgroundColor: colors.cardBackground,
        borderWidth: 1,
        borderColor: focused ? colors.color1 : colors.gray,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
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
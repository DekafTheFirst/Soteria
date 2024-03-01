import { Dimensions, StyleSheet } from "react-native";

export const createStyles = (colors) => (StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    content: {
        alignItems: 'center',
        gap: 5,
        width: "100%"
    },
    profileImage: {
        width: 110,
        height: 110,
        borderRadius: '50%'
    },
    profileImageWrapper: {
        alignItems: 'center'
    },
    cameraIconWrapper: {
        position: 'absolute',
        right: 0,
        top: -13,
        backgroundColor: colors.card2Background,
        padding: 9,
        borderRadius: "50%",
        elevation: 3, // Elevation for Android shadow
        shadowColor: '#000000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.2, // Shadow opacity
        shadowRadius: 4,
    },

    profileDetails: {
        width: '100%',
        padding: 15,
        marginTop: 30
    }, 


    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.text
    },
    signInText: {
        color: colors.text,
        fontSize: 15,
        letterSpacing: 0.5,
        fontWeight: 'bold'
    },
    formContainer: {

    },
    inputContainer: {
        paddingHorizontal: 2,
    },
    
    forgotPasswordContainer: {
        alignItems: 'flex-end'
    },
    forgotPasswordText: {
        fontSize: 12,
        color: colors.color1,
    },
    btnContainer: {
        borderRadius: 10,
        backgroundColor: colors.gold,
        marginTop: '10%',
    },
    footerContainer: {
        height: Dimensions.get('window').height / 5,
        justifyContent: 'center',

        alignItems: 'center',
        flexDirection: 'column'
    },

    footerContainerInner: {
        flexDirection: 'row'
    },

    newUserText: {
        color: colors.text
    },

    signText: {
        marginLeft: 5,
        color: colors.primary,
        fontWeight: "bold",
    },
    skip: {
        color: colors.gold,
        marginTop: 5,
    },
}))
import { Dimensions, StyleSheet } from "react-native"
import { moderateScale } from "react-native-size-matters"


export const createStyles = (colors) =>  StyleSheet.create({
        loginMain: {
            flex: 1,
            backgroundColor: colors.background,
            paddingLeft: moderateScale(20),
            paddingRight: moderateScale(20)
        },
        headerContainer: {
            height: Dimensions.get('window').height/4, justifyContent: 'center'
        },
        welcomeText: {
            fontSize: moderateScale(30),
            fontWeight: 'bold',
            color: colors.text
        },
        signInText: {
            color: colors.text,
            fontSize: moderateScale(15),
            letterSpacing: 0.5,
            fontWeight: 'bold'
        },
        formContainer: {

        },
        inputContainer: {
            paddingHorizontal: 2,
        },
        wrapper: {
            marginBottom: 20,
        },
        input: {
            height: moderateScale(55),
            color: colors.text,
            borderWidth: moderateScale(1),
            borderColor: colors.text,
            borderRadius: moderateScale(10),
            paddingHorizontal: moderateScale(10),
            display: 'flex',
            justifyContent: 'center',
            
        },
        inputWithIcon: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        textInput: {
            width: "90%"
        },
        forgotPasswordContainer: {
            alignItems: 'flex-end'
        },
        forgotPasswordText: {
            fontSize: moderateScale(12),
            color: colors.text,
        },
        btnContainer: {
            borderRadius: 10,
            backgroundColor: colors.gold, 
            marginTop: '10%',
        },
        footerContainer: {
            height: Dimensions.get('window').height/5,
            justifyContent: 'center',
            
            alignItems: 'center',
            flexDirection: 'column'
        },
        
        footerContainerInner: {
            flexDirection: 'row'
        },

        newUserText : {
            color: colors.text
        },

        signText: {
            marginLeft: moderateScale(5),
            color: colors.primary,
            fontWeight: "bold",
        }


    })

    

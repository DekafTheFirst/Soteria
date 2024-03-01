import { useEffect } from "react";
import { StyleSheet } from "react-native";


export const createStyles = (colors) => {
   
    return (StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 50,
        },
        content: {
            alignItems: 'center',
            gap: 5,
            width: "100%",
            paddingBottom: 100

        },
        profileImage: {
            width: 110,
            height: 110,
            borderRadius: '50%'
        },
        name: {
            color: colors.text,
            fontSize: 24,
            fontWeight: '700',
            fontFamily: 'RobotoSlab_700Bold'
        },
        email: {
            fontWeight: '500',
            color: colors.text
        },
        editProfileBtn: {
            backgroundColor: colors.green,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 25,
            marginTop: 10,
        },
        editProfileBtnText: {
            color: '#fff',
            fontWeight: '600'
        },
        settings: {
            marginTop: 20,
            width: '80%',
            backgroundColor: colors.cardBackground,
            padding: 20,
            borderRadius: 10,
            elevation: 3, // Elevation for Android shadow
            shadowColor: '#000000', // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.2, // Shadow opacity
            shadowRadius: 4,

        },
        item: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 20
        },
        title: {
            marginLeft: 12,
            fontWeight: '600',
            fontSize: 16,
            color: colors.text 

        },
        iconWrapper: {
            backgroundColor: colors.background,
            width: 32,
            height: 32,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        icon :{ 
            color: colors.color1
        },
        optionItemToggle: {
            marginLeft: 'auto',
        },

        support: {
            marginTop: 30
        },

        logout: {
            borderTopColor: colors.background,
            borderTopWidth: 2,
            marginTop: 20

        },

        logoutBtn: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 15,
        },


    }))
}

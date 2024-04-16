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
            backgroundColor: colors.background
        },

        videoPlayerWrapper: {
            height: 240,
            justifyContent: 'center',
            alignItems: 'center'
        },

        content: {
            padding: 20
        },  

        item: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15
        },

        iconWrapper: {
            width: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },

        title: {
            color: colors.text,
            marginLeft: 10,
            fontSize: 18,
            fontWeight: '600'
        },

        preacher: {
            color: colors.text,
            fontSize: 16,
            marginLeft: 10,

        },
        date: {
            fontSize: 16,
            fontStyle: 'italic',
            color: colors.text,
            fontWeight: '300',
            marginLeft: 10,

        },
        desc: {
            fontSize: 18,
            color: colors.text,
            fontWeight: '400',
        },
        btn: {
            marginTop: 30,
            borderWidth: 2,
            borderColor: colors.gold,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        },
        btnText: {
            color:colors.gold,
            fontWeight: '800',
            textTransform: 'uppercase'
        }
        

    })
}
import { DefaultTheme, DarkTheme } from "@react-navigation/native"

export const lightTheme = {
    ...DefaultTheme, 
    colors: {
        ...DefaultTheme.colors, 
        gold: "#A96F00",
        green: "#214F0F",
        toggleIcon: '#214F0F',
        lightGreen: "#90EE90",
        settingsIcon: '#000000',
        lightBlue: " #A5C2DE",
        greenOverlay: " #bdc1c6",
        gray: '#BDC1C6',
        offWhite: '#F5F6FA',
        cardBackground: '#FFFFFF',
    }
}

export const darkTheme = {
    ...DarkTheme, 
    colors: {
        ...DarkTheme.colors,
        gold: "#A96F00",
        green: "#214F0F",
        settingsIcon: '#90EE90',
        toggleIcon: '#90EE90',
        lightGreen: "#90EE90",
        lightBlue: " #A5C2DE",
        cardBackground: '#1F1F1F',
        background: '#121212',
        greenOverlay: " #bdc1c6",
        gray: '#BDC1C6',
        offWhite: '#F5F6FA',
    }


}
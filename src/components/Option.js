import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { useSettingsContext } from '../context/SettingsContext';
import { createStyles } from '../screens/More/Options/styles';




const camelToRegularText = camelCase => {
    // Use a regular expression to insert spaces before capital letters
    const regularText =  camelCase.replace(/([A-Z])/g, ' $1').trim();

    return regularText.charAt(0).toUpperCase() + regularText.slice(1);

  };


const Option = ({ name, icon }) => {
    const { colors } = useTheme()
    const { settings, updateSettings } = useSettingsContext();
    const styles = createStyles(colors)


    return (
        <View style={styles.item}>
            <View style={styles.iconWrapper}>
                {icon}
            </View>
            <Text style={styles.title}>{camelToRegularText(name)}</Text>
            <TouchableOpacity 
            onPress={()=> updateSettings(name)}
            style={styles.optionItemToggle}
            >
                <FontAwesome6 name={settings[name] ? "toggle-on" : "toggle-off"} size={30}  color={colors.color1} />
            </TouchableOpacity>
        </View>
    )
}

export default Option
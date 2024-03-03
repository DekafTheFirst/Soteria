import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { useSettings } from '../context/SettingsContext';
import PhoneInput from 'react-native-phone-number-input';

export default Input = ({ inputProps }) => {
    const { colors } = useTheme();
    const { settings } = useSettings();
    const darkMode = settings.darkMode
    const [focused, setFocused] = useState();
    const [secure, setSecure] = useState()
    const styles = createStyles(colors, focused);
    return (
        <View style={[styles.wrapper]}>
            {inputProps.title && <Text style={styles.inputTitle}>{inputProps.title}</Text>}

            {inputProps.name === 'phoneNumber' ? (
                <PhoneInput
                    containerStyle={styles.phoneNumberInput}
                    codeTextStyle={{alignItems: 'center'}}
                    // codeTextStyle={{ color: colors.text }}
                    // placeholder={{
                    //     color: inputProps.disabled ? 'white' : colors.gray
                    // }}
                    textInputStyle={{ color: colors.text }}
                    textContainerStyle={{
                        height: '100%',
                        padding: 0,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onChangeFormattedText={inputProps.handleChange(inputProps.name)}
                    defaultCode='US'
                    name={inputProps.name}
                />
            ) : (
                <View style={[
                    styles.input,
                    inputProps.disabled && styles.disabledInput,
                    inputProps.icon && styles.inputWithIcon,
                    inputProps.toggleIcon && styles.inputWithIcon
                ]}>
                    <TextInput
                        placeholder={inputProps.placeHolder}
                        placeholderTextColor={inputProps.disabled ? 'white' : colors.gray}
                        name={inputProps.name}
                        value={inputProps.initialValue}
                        onChangeText={inputProps.handleChange(inputProps.name)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        style={[styles.textInput]}
                        editable={!inputProps.disabled}
                        keyboardType={inputProps.keyboardType}
                        secureTextEntry={inputProps.secureTextEntry}
                    />
                    {inputProps.toggleIcon && (
                        <View style={styles.icon}>
                            {inputProps.toggleIcon}
                        </View>
                    )
                    }
                    {inputProps.icon && (
                        <View style={styles.icon}>
                            {inputProps.icon}
                        </View>
                    )
                    }

                </View>
            )
            }


            {(inputProps.errors[inputProps.name] && inputProps.touched[inputProps.name]) && <Text style={{ fontSize: 10, color: 'red' }}>{inputProps.errors[inputProps.name]}</Text>}
        </View>
    )
}

const createStyles = (colors, focused) => (StyleSheet.create({
    wrapper: {
        marginBottom: 20,
        width: '100%'
    },
    inputTitle: {
        color: colors.text,
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 10
    },
    disabledInput: {
        backgroundColor: colors.gray,
    },
    input: {
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
    phoneNumberInput: {
        height: 55,
        borderWidth: 1,
        borderColor: focused ? colors.color1 : colors.gray,
        width: "100%",
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    inputWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        paddingLeft: 10,
        height: '100%',
        width: "90%",
        fontWeight: '500',
        color: colors.text
    },
    
    icon: {
        marginRight: 10,
    }
}))
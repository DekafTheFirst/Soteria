import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAuth } from '../../../context/AuthContext';
import { createStyles } from '../Connect/styles';
import { ImageBackground } from 'expo-image';

const SodipCard = ({footerText}) => {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    const { currentUser, logout } = useAuth()
    const navigation = useNavigation()

    return (
        <View style={styles.card}>
            <View style={styles.darkOverlay}></View>
            <ImageBackground
                source={require('../../../Assets/abstract-5.jpg')}
                resizeMethod='scale'
                style={styles.imageBackground}
            >
                <View style={[styles.contentWrapper]}>
                    <Text style={styles.contentTitle}>Sodip</Text>
                </View>
                {footerText && <Text style={styles.footerText}>{footerText}</Text>}
            </ImageBackground>
        </View>
    )
}

export default SodipCard
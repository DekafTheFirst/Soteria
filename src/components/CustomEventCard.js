import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';

const CustomEventCard = ({item}) => {
  const { colors } = useTheme();
    const navigation = useNavigation()
    const styles = createStyles(colors)

  return (
    <TouchableOpacity>
      <Text style={{color: colors.text}}>{item.attributes.title}</Text>
    </TouchableOpacity>
  )
}

export default CustomEventCard

const createStyles = (colors) => {
  const brightShadow = {
    shadowColor: '#fff', // White shadow color
    shadowOffset: { width: 0.4, height: 0.4 },
    shadowOpacity: 0.01,
    shadowRadius: 5,
    elevation: 5, // For Android
  }


  return StyleSheet.create({
    event: {
      height: 220,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      overflow: 'hidden',

    },

    eventContentInner: {
      padding: 10,
      height: "100%",
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
      backgroundColor: 'transparent',

    },

    eventTitle: {
      fontSize: 28,
      width: "90%",
      textAlign: "center",
      color: 'white',
      fontWeight: '900',

    },

    eventDate: {
      fontSize: 16,
      textAlign: "center",
      color: 'white',
      fontWeight: '500'
    },

    eventTime: {
      fontSize: 16,
      textAlign: "center",
      color: 'white',
      fontWeight: '800'
    }
  })
}
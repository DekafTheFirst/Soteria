import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './styles';
import { Image } from 'expo-image';
import { Entypo } from '@expo/vector-icons';

const Media = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors)

  const navigation = useNavigation()
  const [loading, setLoading] = useState(false);

  const handleLoadStart = () => {
    setLoading(true);
  };

  const handleLoadEnd = () => {
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerImage}>
        {loading && <ActivityIndicator size="large" color={colors.text} />}  
        <Image
          source={require('../../Assets/media.jpg')}
          resizeMethod='scale'
          style={styles.imageBackground}
          onLoadStart={handleLoadStart}
          onLoadEnd={handleLoadEnd}
        />
        
      </View>
      <View style={styles.btnContainer}>
        
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('LiveStream')}>
        <Image source={require('../../Assets/live-stream.jpg')} style={styles.btnImage}/>
        <View style={styles.btnContent}>
          <Text style={styles.btnText}>Live Stream</Text>
          <Entypo name="chevron-small-right" size={24} color="black"  style={styles.btnCaret}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Sermons')}>
        <Image source={require('../../Assets/preaching.jpg')} style={styles.btnImage}/>
        <View style={styles.btnContent}>
          <Text style={styles.btnText}>Sermons</Text>
          <Entypo name="chevron-small-right" size={24} color="black"  style={styles.btnCaret}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Media
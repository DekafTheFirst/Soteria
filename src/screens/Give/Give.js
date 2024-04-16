import { View, Text, Linking, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './styles';

const Give = () => {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const styles = createStyles(colors)

  const redirect = () => {
    const url = 'https://stripe.com/pricing';

    // Open the URL in the browser
    Linking.openURL(url);
  }


  // Return null or any other content you want to render
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={redirect}
          style={{
            backgroundColor: colors.green,
            height: 50,
            borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
          }}>
          <Text style={{ color: 'white', marginRight: 5, fontWeight: '600' }}>
            Give
          </Text>
        </TouchableOpacity>
      </View>
      </View>
  );
}

export default Give
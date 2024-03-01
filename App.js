import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { darkTheme, lightTheme } from './src/constants';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from './src/context/AuthContext';
import { RobotoSlab_700Bold, RobotoSlab_500Medium, RobotoSlab_400Regular, useFonts } from '@expo-google-fonts/roboto-slab';
import { SettingsContext, SettingsProvider, useSettingsContext } from './src/context/SettingsContext';
import { useContext } from 'react';
import Toast from 'react-native-toast-message';

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoSlab_700Bold: RobotoSlab_700Bold,
    RobotoSlab_500Medium, 
    RobotoSlab_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <SettingsProvider>
          <RootNavigation />
      </SettingsProvider>
      <Toast/>
    </AuthProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

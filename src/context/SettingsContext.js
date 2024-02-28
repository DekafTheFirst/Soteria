import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a new context for settings
export const SettingsContext = createContext();
export const useSettingsContext = () => useContext(SettingsContext)
// Create a provider component to wrap your app and provide the settings context
export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true
  });


  useEffect(()=> {
    const loadSettings = async () => {
      try {
        const storedSettings = await AsyncStorage.getItem('settings');
        if(storedSettings) {
          setSettings(JSON.parse(storedSettings));
        }
      }
      catch (error) {
        console.error('Error loading settings from Async Storage:', error);

      }
    };

    loadSettings();
  }, [])


  // Define methods for updating settings
  const updateSettings = async (settingTitle) => {
    // Toggle the setting with the given title
    setSettings((prevState) => {
      const updatedSettings = { ...prevState, [settingTitle]: !prevState[settingTitle] };
      // Update AsyncStorage with the updated settings
      AsyncStorage.setItem('settings', JSON.stringify(updatedSettings))
        .catch((error) => console.error('Error saving settings to AsyncStorage:', error));
      return updatedSettings;
    });
  };


  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to consume the settings context
export const useSettings = () => useContext(SettingsContext);
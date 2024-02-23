import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/navigation';
import { Provider } from 'react-redux';
import reduxStore from './src/redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { useEffect } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';


export const reduxPersistStore = persistStore(reduxStore)



export default function App() {

  EStyleSheet.build()
  

  
  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={reduxPersistStore}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

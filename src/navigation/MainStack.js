import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs';
import SplashScreen from '../screens/styles.js/index.js';
import About from '../screens/About/index.js';
import EventDetails from '../screens/EventDetails/index.js';

const MainStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Tab" component={Tabs} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export default MainStack
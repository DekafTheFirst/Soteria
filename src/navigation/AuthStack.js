import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs';
import About from '../screens/About/index.js';
import EventDetails from '../screens/EventDetails/index.js';
import Home from '../screens/Home/index.js';
import SplashScreen from '../screens/SplashScreen/index.js';
import Onboarding from '../screens/Onboarding.js/index.js';
import Login  from '../screens/Authentication/Login.js';
import Register  from '../screens/Authentication/Register.js';

const AuthStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Home'>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export default AuthStack
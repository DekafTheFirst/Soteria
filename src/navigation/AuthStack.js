import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs';
import About from '../screens/About/About.js';
import EventDetails from '../components/EventDetails.js';
import Home from '../screens/Home/Home.js';
import SplashScreen from '../screens/SplashScreen/SplashScreen.js';
import Login from '../screens/Authentication/Login.js';
import Register from '../screens/Authentication/Register.js';
import SOCITH from '../screens/Connect/socith/socith.js';
import SODIP from '../screens/Connect/Sodip/Sodip.js';
import PrayerRequests from '../screens/Connect/prayerRequests/prayerRequests.js';
import BecomeAMember from '../screens/Connect/becomeAMember/becomeAMember.js';
import Media from '../screens/Media/Media.js';

const AuthStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Login'>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen options={{
                headerShown: true,
            }} name="SODIP" component={SODIP} />
            <Stack.Screen options={{
                headerShown: true,
            }} name="SOCITH" component={SOCITH} />
            <Stack.Screen options={{
                headerShown: true,
            }} name="BecomeAMember" component={BecomeAMember} />
            <Stack.Screen options={{
                headerShown: true,
            }} name="PrayerRequests" component={PrayerRequests} />

            <Stack.Screen options={{
                headerShown: true,
                animationEnabled: true
            }} name="Media" component={Media} />

            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export default AuthStack
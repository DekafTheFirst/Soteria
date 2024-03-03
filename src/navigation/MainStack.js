import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs';
import About from '../screens/About/About.js';
import EventDetails from '../screens/EventDetails/EventDetails.js';
import UpdateProfile from '../screens/More/EditProfile/EditProfile.js';
import EditProfile from '../screens/More/EditProfile/EditProfile.js';
import Login from '../screens/Authentication/Login.js';
import AuthStack from './AuthStack.js';
import SODIP from '../screens/Connect/Sodip/Sodip.js';
import SOCITH from '../screens/Connect/socith/socith.js';
import PrayerRequests from '../screens/Connect/prayerRequests/prayerRequests.js';
import Media from '../screens/Media/Media.js';

const MainStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='EditProfile' screenOptions={{ headerShown: false, headerBackTitle: false }}>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen options={{
                headerShown: true,
            }} name="Edit Profile" component={EditProfile} />
            <Stack.Screen options={{
                headerShown: true,
            }} name="SODIP" component={SODIP} />
            <Stack.Screen options={{
                headerShown: true,
            }} name="SOCITH" component={SOCITH} />
            <Stack.Screen options={{
                headerShown: true,
            }} name="PrayerRequests" component={PrayerRequests} />
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="Media" component={Media} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export default MainStack
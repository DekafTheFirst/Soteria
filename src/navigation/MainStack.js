import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs';
import About from '../screens/About/About.js';
import UpdateProfile from '../screens/More/EditProfile/EditProfile.js';
import EditProfile from '../screens/More/EditProfile/EditProfile.js';
import SODIP from '../screens/Connect/Sodip/Sodip.js';
import SOCITH from '../screens/Connect/socith/socith.js';
import PrayerRequests from '../screens/Connect/prayerRequests/prayerRequests.js';
import Media from '../screens/Media/Media.js';
import Sermons from '../screens/Media/Sermons/Sermons.js';
import SermonDetails from '../screens/Media/SermonDetail/SermonDetail.js';
import EventDetails from '../components/EventDetails.js';
import Login from '../screens/Authentication/Login.js';
import Register from '../screens/Authentication/Register.js';



const MainStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='EditProfile' screenOptions={{ headerShown: false, headerBackTitle: false }}>
            <Stack.Screen name="Tabs" component={Tabs} />

            <Stack.Screen
                options={{
                    headerShown: true,
                }}
                name="Edit Profile"
                component={EditProfile}
            />

            <Stack.Screen
                options={{
                    headerShown: true,
                }}
                name="SODIP"
                component={SODIP}
            />

            <Stack.Screen
                options={{
                    headerShown: true,
                }}
                name="SOCITH"
                component={SOCITH}
            />

            <Stack.Screen
                options={{
                    headerShown: true,
                }}
                name="PrayerRequests"
                component={PrayerRequests}
            />

           

            <Stack.Screen
                options={{
                    headerShown: true,
                }}
                name="Media"
                component={Media}
            />

            <Stack.Screen
                options={{
                    headerShown: true,
                }}
                name="Sermons"
                component={Sermons}
            />

            <Stack.Screen
                options={({ route }) => ({
                    headerShown: true,
                    title: route.params.sermon.title
                })} name="SermonDetail"
                component={SermonDetails}
            />

            <Stack.Screen
                options={({ route }) => ({
                    headerShown: true,
                    title: route.params.event.attributes.title
                })}
                name="EventDetails"
                component={EventDetails}
            />

            <Stack.Screen
                name="About"
                component={About}
            />

            <Stack.Screen
                name="Login"
                component={Login}
            />

            <Stack.Screen
                name="Register"
                component={Register}
            />
        </Stack.Navigator>
    )
}

export default MainStack
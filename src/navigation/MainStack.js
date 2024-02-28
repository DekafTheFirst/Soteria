import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs';
import About from '../screens/About/index.js';
import EventDetails from '../screens/EventDetails/index.js';
import UpdateProfile from '../screens/More/EditProfile/index.js';
import EditProfile from '../screens/More/EditProfile/index.js';

const MainStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='EditProfile' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tab" component={Tabs} />
            <Stack.Screen options={{
                headerShown: true,
            }} name="EditProfile" component={EditProfile} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export default MainStack
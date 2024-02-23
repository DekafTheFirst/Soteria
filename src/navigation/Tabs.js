import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import { Feather, Ionicons } from '@expo/vector-icons';
import Connect from '../screens/Connect';
import Media from '../screens/Media';
import More from '../screens/More';
import { moderateScale } from 'react-native-size-matters';


const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: '#A96F00',
            }}>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: (()=>{
                        return <Ionicons name="home" size={24} color="#A96F00" />
                    })
                
            }} />

            <Tab.Screen 
                name="Connect" 
                component={Connect}
                options={{
                    tabBarIcon: (()=>{
                        return <Ionicons name="people-outline" size={24} color="black" />
                    }),
                    
            }} />

            <Tab.Screen 
                name="Give" 
                component={Connect}
                options={{
                    tabBarIcon: ((size, color) => { 
                        return <Ionicons name="gift-outline" size={24} color="black" />
                })
            }} />

            <Tab.Screen 
                name="Media" 
                component={Media}
                options={{
                    tabBarIcon: ((size, color) => {
                        return <Ionicons name="play-circle-outline" size={24} color="black" />
                })
            }} />

            <Tab.Screen 
                name="More" 
                component={More}
                options={{
                    tabBarIcon: ((size, color) => {
                        return <Feather name="more-horizontal" size={24} color="black" />
                })
            }} />
        </Tab.Navigator>
    )
}

export default Tabs
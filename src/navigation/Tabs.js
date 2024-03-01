import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home';
import { Feather, Ionicons } from '@expo/vector-icons';
import Connect from '../screens/Connect/Connect';
import Media from '../screens/Media/Media';
import More from '../screens/More/Options/Options';
import { moderateScale } from 'react-native-size-matters';
import { useTheme } from '@react-navigation/native';
import Give from '../screens/Give/Give';


const Tabs = () => {
    const {colors}  = useTheme()
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='Connect' 
            screenOptions={{
                tabBarActiveTintColor: '#A96F00',
                tabBarStyle: {
                    paddingTop: 10,
                    height: 90,
                    borderTopColor: colors.gold,
                    borderTopWidth: 2
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '500'
                },
                headerStyle: {
                    backgroundColor: colors.cardBackground
                },
                tabBarIconStyle: {
                    color: colors.text
                }
            
                
            }}>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: (({focused})=>{
                        return <Ionicons name={focused ? "home" : 'home-outline'} size={24} color={focused ? colors.gold : colors.text} />
                    })
                
            }} />

            <Tab.Screen 
                name="Connect" 
                component={Connect}
                options={{
                    tabBarIcon: (({focused})=>{
                        return <Ionicons name={focused ? "people": "people-outline"} size={24} color={focused ? colors.gold : colors.text} />
                    }),
                    
            }} />

            <Tab.Screen 
                name="Give" 
                component={Give}
                options={{
                    tabBarIcon: (({size, color, focused}) => { 
                        return <Ionicons name={focused ? 'gift': 'gift-outline'} size={24} color={focused ? colors.gold : colors.text} />
                })
            }} />

            <Tab.Screen 
                name="Media" 
                component={Media}
                options={{
                    tabBarIcon: (({size, color, focused}) => {
                        return <Ionicons name={focused ? "play-circle" : "play-circle-outline"} size={24} color={focused ? colors.gold : colors.text} />
                })
            }} />

            <Tab.Screen 
                name="More" 
                component={More}
                options={{
                    tabBarIcon: (({size, color, focused}) => {
                        return <Feather name="more-horizontal" size={24} color={focused ? colors.gold : colors.text} />
                })
            }} />
        </Tab.Navigator>
    )
}

export default Tabs
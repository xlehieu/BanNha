import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Categories from './Categories';
import Search from './Search';
const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='Home'>
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? 'home' : 'home-outline'} size={25} color={focused ? '#20C065' : 'gray'} />
                    },
                    tabBarActiveTintColor: '#20C065',
                    tabBarInactiveTintColor: 'gray'
                }} />
            <Tab.Screen name='Categories' component={Categories}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? 'list' : 'list-outline'} size={25} color={focused ? '#20C065' : 'gray'} />
                    },
                    tabBarActiveTintColor: '#20C065',
                    tabBarInactiveTintColor: 'gray'
                }} />
            <Tab.Screen name='Search' component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? 'search' : 'search-outline'} size={25} color={focused ? '#20C065' : 'gray'} />
                    },
                    headerShown:false,
                    tabBarActiveTintColor: '#20C065',
                    tabBarInactiveTintColor: 'gray'
                }} />
        </Tab.Navigator>
    )
}
export default BottomNavigation;

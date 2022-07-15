import React from 'react';
import {StyleSheet, Text, View} from "react-native";

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CategoriesScreen from "./CategoriesScreen";
import EventsList from "../Events/EventsList";

const Tab = createMaterialTopTabNavigator();

const EventsScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Мероприятия"
            tabBarOptions={{
                indicatorStyle: {
                    borderBottomColor: '#3D8182',
                    borderBottomWidth: 2,
                },
            }}
            screenOptions={{
                tabBarActiveTintColor: '#3D8182',
                tabBarLabelStyle: {fontSize: 14},
                tabBarShowLabel: 'false',
                activeTintColor: '#000',
                tabBarStyle: {backgroundColor: '#fff'},
            }}
        >
            <Tab.Screen
                name="Мероприятия"
                component={EventsList}
                options={{tabBarLabel: 'Мероприятия'}}
            />
            <Tab.Screen
                name="Категории"
                component={CategoriesScreen}
                options={{tabBarLabel: 'Категории'}}
            />
        </Tab.Navigator>
    );
};

export default EventsScreen;


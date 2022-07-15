import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import EventsList from "../Events/EventsList";
import CategoriesScreen from "./CategoriesScreen";

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StatusBar} from "react-native";


const Tab = createMaterialTopTabNavigator();

const WelcomeScreen = ({setAuth}) => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff"/>
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
                    name="Логин"
                    children={() => <LoginScreen setAuth={setAuth}/>}
                    options={{tabBarLabel: 'Логин'}}
                />
                <Tab.Screen
                    name="Регистрация"
                    children={() => <RegistrationScreen setAuth={setAuth}/>}
                    options={{tabBarLabel: 'Регистрация'}}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
};

export default WelcomeScreen;


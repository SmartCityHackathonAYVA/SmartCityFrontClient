import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FeedScreen from "../Screens/FeedScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import MessengerScreen from "../Screens/MessengerScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import ProfileScreen from "../Screens/ProfileScreen";
import EventsScreen from "../Screens/EventsScreen";
import {setAuth} from "../utils/auth";


const Tab = createMaterialBottomTabNavigator()
const Navigator = ({setAuth}) => {
    return (
        <Tab.Navigator

            initialRouteName="Новости"
            barStyle={{backgroundColor: '#fff', borderTop: '2px solid #212121',}}
            activeColor='#3D8182'
            labeled={false}
        >
            <Tab.Screen name='Новости' component={FeedScreen}
                        options={{
                            tabBarIcon: ({color}) => (
                                <Icon name="home" color={color} size={28}/>
                            ),
                        }}
            />
            <Tab.Screen name='Прямой эфир'
                        options={{
                            tabBarLabel: 'Прямой эфир',
                            tabBarIcon: ({color}) => (
                                <MaterialCommunityIcons name="broadcast" color={color} size={26}/>
                            ),
                        }}
                        component={NotificationScreen}/>
            <Tab.Screen name='Сообщения'
                        options={{
                            tabBarLabel: 'Сообщения',
                            tabBarIcon: ({color}) => (
                                <Icon5 name="comment-dots" color={color} size={24}/>
                            ),
                        }}
                        component={MessengerScreen}

            />

            <Tab.Screen name='Events'
                        options={{
                            tabBarLabel: 'Events',
                            tabBarIcon: ({color}) => (
                                <MaterialIcons name="event" color={color} size={26}/>
                            ),
                        }}
                        component={EventsScreen}/>
            <Tab.Screen name='Профиль'
                        options={{
                            tabBarLabel: 'Профиль',
                            tabBarIcon: ({color}) => (
                                <MaterialCommunityIcons name="dots-horizontal" color={color} size={26}/>
                            ),
                        }}
                        children={() => <ProfileScreen setAuth={setAuth}/>}
            />
        </Tab.Navigator>
    );
};

export default Navigator;

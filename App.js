import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from "./components/Navigation/Navigator";
import 'react-native-gesture-handler';
import {StatusBar} from "react-native";
import LoginScreen from "./components/Screens/LoginScreen";
import WelcomeScreen from "./components/Screens/WelcomeScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {


    const [auth, setAuth] = useState(false)

    if (auth) {
        return (
            <NavigationContainer>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff"/>
                <Navigator setAuth={setAuth}/>
            </NavigationContainer>
        );
    } else {
        return <WelcomeScreen setAuth={setAuth}/>
    }

}



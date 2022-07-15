import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import MessagesList from "../Messages/MessagesList";

const MessengerScreen = () => {
    return (
        <MessagesList/>
    );
};

export default MessengerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

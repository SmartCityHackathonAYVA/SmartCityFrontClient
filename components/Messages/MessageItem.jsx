import React, {useEffect, useState} from 'react';
import {Image, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MessageItem = () => {

    const [userData, setUserData] = useState({})

    const getData = async (key) => {
        try {
            const data = await AsyncStorage.getItem(key);
            if (data !== null) {
                const test = JSON.parse(data)
                setUserData(test)
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData('user')
    }, [])

    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            borderBottomWidth: 0.5
        }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: userData.profileImage}} style={{width: 50, height: 50, borderRadius: 100}}/>
                <View style={{paddingHorizontal: 10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{userData.firstName} {userData.lastName}</Text>
                    <Text>Some message...</Text>
                </View>
            </View>
            <View>
                <Text>19:44</Text>
            </View>
        </View>
    );
};

export default MessageItem;

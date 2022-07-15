import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Text, View, Image} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = ({setAuth}) => {

    const [userData, setUserData] = useState({})

    const getData = async (key) => {
        try {
            const data = await AsyncStorage.getItem(key);
            if (data !== null) {
                const test = JSON.parse(data)
                console.log(test.email)
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
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileInfo}>
                <View>
                    <View style={styles.upperProfile}>
                        <Image
                            style={{
                                width: 125,
                                height: 125,
                                borderRadius: 1000
                            }}
                            source={{uri: userData.profileImage}}/>
                        <View style={styles.profileDetails}>
                            <View style={{
                                justifyContent: 'flex-end',
                                flexDirection: 'row'
                            }}>
                                <Fontisto style={{backgroundColor: '#3D8182', padding: 10, borderRadius: 100}}
                                          name='player-settings'
                                          color='#fff'
                                          size={34}/>
                            </View>
                            <View style={styles.profileData}>
                                <View>
                                    <Text style={{
                                        fontSize: 21,
                                        fontWeight: 'bold'
                                    }}>{userData.firstName} {userData.lastName}</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={styles.text}>{userData.email}</Text>
                                    <Text style={styles.text}>{userData.age}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={{fontSize: 18, paddingVertical: 20}}> {userData.phoneNumber} </Text>
                <Text style={{fontSize: 14, paddingBottom: 10}}> {userData.description} </Text>
            </View>
            <View style={[styles.card, {height: 150}]}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Сообщество</Text>
                    <Text style={{color: '#3D8182'}}>ПОДРОБНЕЕ</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{justifyContent: 'space-around'}}>
                        <Text style={styles.text}>Публикации</Text>
                        <Text style={styles.text}>Подписки</Text>
                        <Text style={styles.text}>Подписчики</Text>
                    </View>
                    <View style={{justifyContent: 'space-around', paddingLeft: 10}}>
                        <Text style={{fontSize: 20, fontWeight: '300'}}>2</Text>
                        <Text style={{fontSize: 20, fontWeight: '300'}}>91</Text>
                        <Text style={{fontSize: 20, fontWeight: '300'}}>239</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.card, {height: 150}]}>
                <View
                    style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Команда</Text>
                    <Text style={{color: '#3D8182'}}>ПОДРОБНЕЕ</Text>
                </View>
                <View style={{justifyContent: 'space-around', flex: 1}}>
                    <Text style={styles.text}>Актуальные команды: pellentesque, purus.</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: '#3D8182'}}>Найти команду</Text>
                        <Text style={{color: '#3D8182'}}>Создать команду</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.card]}>
                <View style={{justifyContent: 'space-around', height: 100}}>
                    <View
                        style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Страхование</Text>
                        <Text style={{color: '#3D8182'}}>ПОДРОБНЕЕ</Text>
                    </View>
                    <Text style={styles.text}>Актуальный страховой полис: нет</Text>
                </View>
            </View>
            <View style={[styles.card, {height: 150}]}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Другое</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Feather name='info' size={30}/><Text style={styles.text}> Правовая
                    информация</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialCommunityIcons name='exit-to-app' size={30}/>
                    <Text style={styles.text} onPress={() => setAuth(false)}>Выйти</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        justifyContent: 'space-around',
        backgroundColor: '#fff',
    },
    card: {
        height: 100,
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.84,

        elevation: 5,
        padding: 10
    },
    profileInfo: {
        justifyContent: 'space-around',
        paddingTop: 50,
        alignItems: 'stretch',
        flexDirection: 'column',
    },
    upperProfile: {
        justifyContent: 'space-around',
        flexDirection: 'row',

    },
    profileDetails: {
        justifyContent: "space-around",
        flexDirection: 'column'
    },
    profileData: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        fontSize: 20,
    },
});

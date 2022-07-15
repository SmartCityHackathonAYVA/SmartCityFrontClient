import React, {useState} from 'react';
import {Image, Pressable, Text, TextInput, View, StyleSheet, Linking, ScrollView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({setAuth}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [wrong, setWrong] = useState(false)

    const logInAccount = async () => {
        const response = await fetch(`https://a8775-8f1b.s.d-f.pw/api/user/login?login=${login}&password=${password}`, {
            method: "POST",
            headers: {"Accept": "application/json", "Content-Type": "application/json"},
        });
        let data = await response.json()
        if (data[0].id) {
            await AsyncStorage.clear()
            await AsyncStorage.setItem('user', JSON.stringify(data[0]))
            setAuth(true)
        } else {
            setWrong(true)
        }
    }

    return (

        <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View>
                <Image source={require('../assets/logo.png')}/>
            </View>
            <View>
                <Text style={{textAlign: 'center', fontWeight: '300', marginBottom: 30, marginTop: 50, fontSize: 16}}>Войдите
                    или
                    зарегистрируйтесь</Text>
            </View>
            <View style={{justifyContent: 'space-around', flexDirection: 'row', width: 300, alignItems: 'center'}}>
                <Pressable onPress={() => Linking.openURL('https://vk.com/')}><Image
                    source={require('../assets/vk.png')}
                    style={{width: 50, height: 50}}/></Pressable>
                <Pressable onPress={() => Linking.openURL('https://www.google.com/')}>
                    <Image source={require('../assets/google.png')} style={{width: 45, height: 45}}/>
                </Pressable>
                <Pressable onPress={() => Linking.openURL('https://www.gosuslugi.ru/')}>
                    <Image source={require('../assets/gosuslugi.png')} style={{width: 50, height: 50}}/>
                </Pressable>
            </View>
            <View style={{width: 250, marginVertical: 30}}>
                <Text style={[{fontWeight: '300', fontSize: 18}, !wrong ? null : {color: 'red'}]}>Логин</Text>
                <TextInput onChangeText={text => {
                    setLogin(text)
                    setWrong(wrong ? !wrong : wrong)
                }}
                           style={{borderBottomWidth: 1.0, fontSize: 20}}/>
                <Text style={[{
                    fontWeight: '300',
                    fontSize: 18,
                    marginTop: 20
                }, !wrong ? null : {color: 'red'}]}>Пароль</Text>
                <TextInput onChangeText={text => setPassword(text)}
                           style={{borderBottomWidth: 1.0, fontSize: 20}}/>
            </View>
            <View style={{flexDirection: 'row', width: 270, justifyContent: 'space-around'}}>
                <Pressable style={[styles.button, {width: 100}]} onPress={() => {
                    logInAccount()
                }}>
                    <Text style={{color: '#323232', fontSize: 18}}>Вход</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: '#323232',
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15
    }
})

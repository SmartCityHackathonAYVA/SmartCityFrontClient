import React, {useState} from 'react';
import {Image, Pressable, Text, TextInput, View, StyleSheet, ScrollView} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegistrationScreen = ({setAuth}) => {

    const [regData, setRegData] = useState({
        login: '',
        firstName: '',
        lastName: '',
        password: '',
        age: '',
        phoneNumber: '',
        email: '',
        description: '',
    })

    const url = `https://a8775-8f1b.s.d-f.pw/api/User/Register?Id=123&FirstName=${regData.firstName}&LastName=${regData.lastName}&Age=${regData.age}&Description=${regData.description}&ProfileImage=123&PhoneNumber=${regData.phoneNumber}&Email=${regData.email}&Role=123&Password=${regData.password}`

    const registerUser = async () => {
        try {
            await fetch(url, {
                method: "POST",
                headers: {"Accept": "application/json", "Content-Type": "application/json"},
            });
            await AsyncStorage.setItem('user', JSON.stringify(regData))
            setAuth(true)
        } catch (e) {
            alert(e.message)
        }

    }

    return (
        <ScrollView
            contentContainerStyle={{
                flexBasis: 600,
                marginTop: 40,
                justifyContent: 'space-around',
                paddingHorizontal: 40,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Регистрация</Text>
            <Text style={{fontWeight: '300'}}>Логин</Text>
            <TextInput onChangeText={text => setRegData({...regData, login: text})}
                       style={{borderBottomWidth: 0.7, fontSize: 20}}/>
            <Text style={{fontWeight: '300'}}>Имя</Text>
            <TextInput onChangeText={text => setRegData({...regData, firstName: text})}
                       style={{borderBottomWidth: 0.7, fontSize: 20}}/>
            <Text style={{fontWeight: '300'}}>Фамилия</Text>
            <TextInput onChangeText={text => setRegData({...regData, lastName: text})}
                       style={{borderBottomWidth: 0.7, fontSize: 20}}/>
            <Text style={{fontWeight: '300'}}>Пароль</Text>
            <TextInput onChangeText={text => setRegData({...regData, password: text})}
                       style={{borderBottomWidth: 0.7, fontSize: 20}}/>
            <Text style={{fontWeight: '300'}}>Возраст</Text>
            <TextInput onChangeText={text => setRegData({...regData, age: text})}
                       style={{borderBottomWidth: 0.7, fontSize: 20}}/>
            <Text style={{fontWeight: '300'}}>Email</Text>
            <TextInput onChangeText={text => setRegData({...regData, email: text})}
                       style={{borderBottomWidth: 0.7, fontSize: 20}}/>
            <Text style={{fontWeight: '300'}}>Телефон</Text>
            <TextInput onChangeText={text => setRegData({...regData, phoneNumber: text})}
                       style={{borderBottomWidth: 0.7, fontSize: 20}}/>
            <Text style={{fontWeight: '300'}}>О себе</Text>
            <TextInput onChangeText={text => setRegData({...regData, description: text})}
                       style={{borderBottomWidth: 0.7, fontSize: 20}}/>
            <Pressable style={[styles.button, {borderColor: '#3D8182'}]}
                       onPress={() => registerUser()}>
                <Text style={{color: '#3D8182', fontSize: 18}}>Зарегистрироваться</Text>
            </Pressable>
        </ScrollView>
    );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: '#323232',
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15
    }
})

import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AsyncStorage from "@react-native-async-storage/async-storage";


const CategoryCard = ({id, type, color, title, changeActive, userId, icon}) => {

    const [active, setActive] = useState(false)

    let parsedData, Id

    const getData = async (key) => {
        try {
            const data = await AsyncStorage.getItem(key);
            if (data !== null) {
                parsedData = await JSON.parse(data)
                Id = await JSON.parse(data).id
                console.log(parsedData)
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let tempArr = []
        const fetchData = async () => {
            await getData('user')
            console.log(id)
                parsedData.categories.map(item => {
                    tempArr.push(item.id)
                })
            setActive(tempArr.includes(id))
        }
        fetchData()

    }, [])

    const unActiveColor = '#424242'
    const activeColor = '#3D8182'




    const checkCategory = async () => {
        if (!active) {
            await fetch(`https://a8775-8f1b.s.d-f.pw/api/Bind/SetUserCategory?userId=${Id}&categoryId=${id}`, {
                method: "POST",
                headers: {"Accept": "application/json", "Content-Type": "application/json"},
            });
            setActive(true)
        } else {
            await fetch(`https://a8775-8f1b.s.d-f.pw/api/Bind/DeleteUserCategory?userId=${Id}&categoryId=${id}`, {
                method: "POST",
                headers: {"Accept": "application/json", "Content-Type": "application/json"},
            });
            setActive(false)
        }
    }


    return (
        <Pressable style={[styles.category, active ? {backgroundColor: '#3D8182'} : null]}
                   onPress={() => checkCategory()}>
            {icon}
            <Text style={{
                color: active ? '#000' : '#fff',
                fontSize: 24,
                flexWrap: 'wrap',
                textAlign: 'center',
            }}>{title}</Text>
        </Pressable>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    category: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#b4b4b4',
        textAlign: 'center',
        paddingVertical: 20,
        paddingHorizontal: 2,
        borderRadius: 10,
        margin: 20,
        flexBasis: 150,
        height: 150
    },
    active: {}
});

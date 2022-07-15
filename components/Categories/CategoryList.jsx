import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
    return (
        <ScrollView>
            <CategoryCard id={1} title='Футбол' color='#000' icon={<MaterialCommunityIcons type='soccer' color={'black'} name='soccer' size={100}/> }/>
            <CategoryCard id={2} title='Воллейбол' color='#000' icon={<FontAwesome5 type='volleyball' color={'black'} name='volleyball-ball' size={100}/> }/>
            <CategoryCard id={3} title='Баскетбол' color='#000' icon={<FontAwesome5 type='basketball-ball' color={'black'} name='basketball-ball' size={100}/> }/>
            <CategoryCard id={4} title='Плавание' color='#000' icon={<FontAwesome5 type='swimmer' color={'black'} name='swimmer' size={100}/> }/>
            <CategoryCard id={5} title='Шахматы' color='#000' icon={<FontAwesome5 type='chess' color={'black'} name='chess' size={100}/> }/>
            <CategoryCard id={6} title='Легкая атлетика' color='#000' icon={<FontAwesome5 type='running' color={'black'} name='running' size={100}/> }/>
            <CategoryCard id={7} title='Хоккей' color='#000' icon={<MaterialCommunityIcons type='hockey-sticks' color={'black'} name='hockey-sticks' size={100}/> }/>
            <CategoryCard id={8} title='Настольный теннис' color='#000' icon={<FontAwesome5 type='table-tennis' color={'black'} name='table-tennis' size={100}/> }/>
        </ScrollView>
    );
};

export default CategoryList;

const styles = StyleSheet.create({
    categoryList: {
        backgroundColor: '#fff',
    }
})

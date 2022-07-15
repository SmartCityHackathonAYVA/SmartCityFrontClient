import React from 'react';
import {StyleSheet, View, Text} from "react-native";



const NewsCard = () => {
    return (
        <View style={styles.newsCard}>
            <Text style={{fontSize: 40}}>Привет</Text>
            <Text style={{fontSize: 20}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequatur cum eius fugiat, harum id iure labore libero magni nam natus nemo nostrum quas rem sed soluta temporibus vel voluptatum.</Text>
        </View>
    );
};

export default NewsCard;

const styles = StyleSheet.create({
    newsCard: {
        flex: 1,
        padding: 20,
        margin: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

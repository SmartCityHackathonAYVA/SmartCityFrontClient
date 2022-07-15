import React from 'react';
import {Image, View, Text, Pressable, StyleSheet} from "react-native";

const EventCard = ({title, eventDate, text, image}) => {
    return (
        <View style={{padding: 20, backgroundColor: '#fff', marginBottom: 2}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={{uri: image}} style={{width: 50, height: 50, borderRadius: 100}}/>
                <View style={{paddingHorizontal: 20}}>
                    <Text style={{paddingBottom: 10, fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
                    <Text>{eventDate}</Text>
                </View>
            </View>
            <View style={{paddingVertical: 10}}>
                <Text>{text}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Pressable style={styles.button}>
                    <Text style={{color: '#3D8182', fontWeight: 'bold'}}>Записаться</Text>
                </Pressable>
                <Pressable style={[styles.button, {borderColor: '#898888'}]}>
                    <Text style={{color: '#898888', fontWeight: 'bold'}}>Информация</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default EventCard;

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: '#3D8182',
        paddingVertical: 3,
        paddingHorizontal: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 15
    }
})

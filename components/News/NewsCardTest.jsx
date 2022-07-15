import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, Pressable} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const NewsCardTest = ({title, publisher, image, text, created}) => {
    return (
        <View style={styles.newsCard}>
            <View style={styles.newsCardInfo}>
                <Text style={{fontSize: 35, color: '#000000'}}>{title}</Text>
                <Text style={{fontSize: 20, color: '#000000'}}>{publisher}</Text>
                <Text style={{fontSize: 20, color: '#000000'}}>{text}</Text>
                <Text style={{fontSize: 15, color: '#3d3d3d'}}>Created at: {created}</Text>
            </View>
            <Image source={{uri: image}} style={{
                resizeMode: 'contain',
                width: '100%',
                height: undefined,
                aspectRatio: 1,
            }}/>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center'}}>
                <Pressable style={styles.like}>
                    <Icon name='heart-o' size={24} color={'#676767'}/>
                    <Text style={{color: '#676767', fontWeight: 'bold', fontSize: 16}}> 1K</Text>
                </Pressable>
                <Pressable style={styles.like}>
                    <FeatherIcon name='message-circle' size={24}
                                 color={'#676767'}/>
                    <Text style={{color: '#676767', fontWeight: 'bold', fontSize: 16}}>112</Text>
                </Pressable>
                <Pressable style={styles.like}><MaterialCommunityIcons name='share-outline' size={24}
                                                                       color={'#676767'}/><Text
                    style={{color: '#676767', fontWeight: 'bold', fontSize: 16}}> 1K</Text></Pressable>
            </View>
        </View>
    );
};

export default NewsCardTest;

const styles = StyleSheet.create({
    newsCard: {
        flex: 1,
        marginTop: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    newsCardInfo: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    like: {
        backgroundColor: 'rgba(137, 136, 136, 0.4)',
        borderRadius: 1000,
        flexBasis: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingVertical: 4,
        marginHorizontal: 10,
        marginVertical: 5
    }
});

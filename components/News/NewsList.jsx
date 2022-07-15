import React, {useRef} from 'react';
import {FlatList, SafeAreaView, Text, TextInput, View, Animated, StyleSheet, StatusBar} from "react-native";
import NewsCardTest from "./NewsCardTest";
import Header from "../Header";


const NewsList = ({data}) => {
    const headerHeight = 60

    return (
        <SafeAreaView
            style={styles.container}
        >

            <Header {...{headerHeight}} />
            <Animated.FlatList
                data={data}
                keyExtractor={item => item.id}
                scrollEventThrottle={16}
                renderItem={({item}) => (
                    <NewsCardTest title={item.title} image={item.image} publisher={item.publisher} text={item.text}
                                  created={item.publicationDate}/>
                )}
            />

        </SafeAreaView>
    );
};

export default NewsList;

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        backgroundColor: '#fff',
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1,
    },
    subHeader: {
        height: 58,
        width: '100%',
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

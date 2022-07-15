import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
    const {headerHeight} = props;
    return (
        <>
            <View
                style={[styles.subHeader,
                    {
                        height: headerHeight,
                    },
                ]}>
                <Text style={styles.conversation}>Лента</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    subHeader: {
        width: '100%',
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    conversation: {color: 'black', fontSize: 30, fontWeight: 'bold'},
});
export default Header;

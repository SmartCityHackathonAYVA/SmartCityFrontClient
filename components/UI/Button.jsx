import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button({onPress, title, background, textColor}) {
    return (
        <Pressable style={[styles.button, {backgroundColor: background}]} onPress={onPress}>
            <Text style={[styles.text, {color: textColor}]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
});

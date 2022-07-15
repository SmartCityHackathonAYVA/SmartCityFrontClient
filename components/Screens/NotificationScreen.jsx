import React, {useCallback, useState} from 'react';
import {Alert, StyleSheet, Text, ScrollView, View} from "react-native";
import WebView from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";

const NotificationScreen = () => {

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={"YG0lEwYLaxk"}
                    onChangeState={onStateChange}
                />
            </View>
            <View>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={"SmPtp-tA8hY"}
                    onChangeState={onStateChange}
                />
            </View>
            <View>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={"SmPtp-tA8hY"}
                    onChangeState={onStateChange}
                />
            </View>
        </ScrollView>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20
    },
});

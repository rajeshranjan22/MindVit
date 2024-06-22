import React, { useRef } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import WebView from 'react-native-webview';

const VideoPlayer = () => {
    const webViewRef = useRef(null);

    const playVideo = () => {
        webViewRef.current?.injectJavaScript('document.getElementsByTagName("video")[0].play();');
    };

    const pauseVideo = () => {
        webViewRef.current?.injectJavaScript('document.getElementsByTagName("video")[0].pause();');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.description}>
                This video explains the Circle of Control concept.
            </Text>
            <WebView
                ref={webViewRef}
                source={{ uri: 'https://www.youtube.com/embed/1h-I7fm1lQw?rel=0' }}
                style={styles.video}
            />
            <View style={styles.controls}>
                <Button title="Play" onPress={playVideo} />
                <Button title="Pause" onPress={pauseVideo} />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        width: 300,
        marginTop: 20,
        alignSelf: 'center',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 40,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    description: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
});

export default VideoPlayer;

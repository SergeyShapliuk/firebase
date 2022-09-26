import React, {useEffect} from "react";
import {BackHandler, FlatList, StyleSheet, Text, View} from "react-native";
import WebView from "react-native-webview";
import {GAP, PADDING, WIDTH} from "../../constants/constants";
import {WebViewProps} from "../../types/types";
import {data} from "../../data/data";


export const WebViewScreen = ({route}: WebViewProps) => {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    })
    console.log("web",route.params.url)
    return (
        <View style={styles.container}>
            <WebView source={{uri: route.params.url}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

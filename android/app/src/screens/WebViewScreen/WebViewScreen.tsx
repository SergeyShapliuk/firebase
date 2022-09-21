import React, {useEffect} from "react";
import {BackHandler, FlatList, StyleSheet, View} from "react-native";
import WebView from "react-native-webview";
import {GAP, PADDING, WIDTH} from "../../constants/constants";
import {WebViewProps} from "../../types/types";
import {data} from "../../data/data";


export const WebViewScreen = ({route}: WebViewProps) => {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    })
    return (
        <View style={styles.container}>
            <WebView source={{uri: route.params.url}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    item: {
        width: ((WIDTH - PADDING)) - GAP,
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 6,
    },
    title: {
        color: "blue",
        fontSize: 14,
        fontWeight: "700"
    },
    text: {
        width: WIDTH / 2,
        color: "white",
        marginLeft: 10,
        fontSize: 14,
        fontWeight: "500"
    }
});

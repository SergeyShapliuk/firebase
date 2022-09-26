import React, {useCallback, useEffect, useState} from "react";
import remoteConfig from '@react-native-firebase/remote-config';
import {useAppNavigation} from "../../types/types";
import DeviceInfo from "react-native-device-info";
import {
    ActivityIndicator,
    BackHandler,
    Image,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {GAP, PADDING, WIDTH} from "../../constants/constants";
import {fetchUrl} from "../../api/api";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getUrl} from "../../store/mainReducer";
import WebView from "react-native-webview";


export function StartScreen() {

    const navigation = useAppNavigation()

    useEffect(() => {
        fetchUrl().then(response =>
            getLocalStorage().then(localValue => {
                start(localValue, response)
            })
        )
    }, [])

    const start = (value: string | null | undefined, url: string | null) => {
        if (!value) {
            loadFire(url)
        } else {
            return navigation.navigate("WebView", {url: value})
        }
    }
    const localStorage = async (value: string) => {
        await AsyncStorage.setItem("url", value)
    }
    const getLocalStorage = async () => {
        const jsonValue = await AsyncStorage.getItem("url")
        return jsonValue !== null ? jsonValue : null
    }
    const loadFire = (url: string | null) => {
        const getUrl = url
        const brandDevice = DeviceInfo.getBrand()
        const simDevice = DeviceInfo.getCarrierSync()
        if (!getUrl || brandDevice === "google" || !simDevice) {
            navigation.navigate("HomeList")
        } else {
            localStorage(getUrl)
            navigation.navigate("WebView", {url: getUrl})
        }
    }
    return null
}



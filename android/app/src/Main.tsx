import React, {useEffect} from "react";
import {BackHandler, StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./types/types";
import {StartScreen} from "./screens/Home/StartScreen";
import {WebViewScreen} from "./screens/WebViewScreen/WebViewScreen";
import {HomeScreenList} from "./screens/Home/HomeScreenList";
import {HomeScreenItem} from "./screens/Home/HomeScreenItem";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Main() {

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Start" component={StartScreen}/>
                    <Stack.Screen name="HomeList" component={HomeScreenList}/>
                    <Stack.Screen name="HomeItem" component={HomeScreenItem}/>
                    <Stack.Screen name="WebView" component={WebViewScreen}/>
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
        }
    })
;

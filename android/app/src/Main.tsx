import * as React from "react";
import {StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./types/types";
import {WebViewScreen} from "./screens/WebViewScreen/WebViewScreen";
import {HomeScreen} from "./screens/Home/HomeScreen";
import {StartScreen} from "./screens/Home/StartScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Main() {

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Stack.Navigator>
                    <Stack.Screen name="Start" options={ {headerShown: false}} component={StartScreen} />
                    <Stack.Screen name="Home" options={{headerBackVisible:false}} component={HomeScreen} />
                    <Stack.Screen name="WebView" options={{headerBackVisible:false}}  component={WebViewScreen}/>
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

import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import {GAP, PADDING, WIDTH} from "../../constants/constants";
import {HomeItemProps} from "../../types/types";


export function HomeScreenItem({route}: HomeItemProps) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image style={{width: ((WIDTH - PADDING)), height: 200}} source={{uri: route.params.photo}}/>
                <Text style={styles.text}>
                    <Text style={styles.title}>{route.params.title}</Text>
                    <Text>{"\n"}{route.params.description}</Text>
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
    item: {
        width: WIDTH - PADDING,
        paddingVertical: 10,
        // paddingHorizontal: 6,
    },
    title: {
        textAlign: "center",
        textAlignVertical: "auto",
        color: "#4545b6",
        fontSize: 16,
        fontWeight: "700"
    },
    text: {
        margin: 15,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "500"
    }
});




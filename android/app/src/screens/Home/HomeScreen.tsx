import React from "react";
import {FlatList, Text, View, StyleSheet, Image} from "react-native";
import {data} from "../../data/data";
import {GAP, PADDING, WIDTH} from "../../constants/constants";


export function HomeScreen() {

    return (
        <View style={styles.container}>
            <FlatList data={data}
                      renderItem={({item}) => {
                          return <View style={styles.item}>
                              <Image style={{width: 130, height: 100}} source={{uri: item.photo}}/>
                              <Text style={styles.text} numberOfLines={7}>
                                  <Text style={styles.title}>{item.title}</Text>
                                  <Text>{"\n"}{item.description}</Text>
                              </Text>
                          </View>
                      }}
                      keyExtractor={(item, index) => `${item.id}.${index}`}
            />
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
        color: "#8d8dea",
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




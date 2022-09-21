import React from "react";
import {StyleSheet, View} from "react-native";
import Main from "./android/app/src/Main";


const App = () => {

    return (

        <View style={styles.container}>
            <Main/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;

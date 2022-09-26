import React, { useEffect } from "react";
import {BackHandler, StyleSheet, View} from "react-native";
import Main from "./android/app/src/Main";
import SplashScreen from 'react-native-splash-screen';


 const App = () => {
     useEffect(()=>{
         setTimeout(() => SplashScreen.hide() , 2000);
      
     },[])
    return (

        <View style={styles.container}>
            <Main/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default App;

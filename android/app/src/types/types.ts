import {CompositeScreenProps, NavigationProp, useNavigation} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList={
    Start:undefined
    HomeList:undefined
    HomeItem: { 
        id:number
        title:string
        photo:string
        description:string
    }
    WebView: {
        url:string
    }
}

export type UseNavigationType=NavigationProp<RootStackParamList>

export type HomeItemProps=NativeStackScreenProps<RootStackParamList,"HomeItem">
export type WebViewProps=NativeStackScreenProps<RootStackParamList,"WebView">

export const useAppNavigation=()=>useNavigation<UseNavigationType>()

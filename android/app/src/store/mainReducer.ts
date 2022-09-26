import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AsyncThunkFulfilledActionCreator} from "@reduxjs/toolkit/dist/createAsyncThunk";
import remoteConfig from '@react-native-firebase/remote-config';


export const getUrl = createAsyncThunk<string | undefined, string>(
    "mainReducer/getUrl",async (params)=>{
        await remoteConfig().setConfigSettings({
            minimumFetchIntervalMillis: 300,
            fetchTimeMillis: 100
        })
        await remoteConfig().setDefaults({
            url: ""
        })
            .then(() => remoteConfig().fetchAndActivate())
        try {
            const response = await remoteConfig().getValue(params)
            return response.asString()

        } catch (e) {
console.log("errror")
        }
    }
)

const mainSlice = createSlice({
    name: "mainReducer",
    initialState: {
        url: "" as string,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUrl.fulfilled, (state, action) => {
            state.url = action.payload ? action.payload : ""
        })
    }
})
export const mainReducer = mainSlice.reducer


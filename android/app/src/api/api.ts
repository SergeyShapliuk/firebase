import remoteConfig from '@react-native-firebase/remote-config';

export const fetchUrl = async () => {
    await remoteConfig().setConfigSettings({
        minimumFetchIntervalMillis: 300,
        fetchTimeMillis: 100
    })
    await remoteConfig().setDefaults({
        url: ""
    })
        .then(() => remoteConfig().fetchAndActivate())
    
    const url = remoteConfig().getValue("url").asString()
    return url
}

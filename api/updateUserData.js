import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
};

const getUserId = async () => {
    try {
        const data = await AsyncStorage.getItem('user');
        if (data !== null) {
            console.log(data)
            return data;
        }
    } catch (error) {
        console.log(error);
    }
};


export default getUserId

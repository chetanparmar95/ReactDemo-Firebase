import {Dimensions, AsyncStorage} from 'react-native';

const {height, width} = Dimensions.get("window");


export class Functions {

    static getHeight(percentage) {
        return (height * percentage) / 100
    }

    static getWidth(percentage) {
        return (width * percentage) / 100
    }

    static storeAuth = async (auth) => {
        try {
            await AsyncStorage.setItem('Auth', auth);
        } catch (error) {
            // Error saving data
        }
    }


}

export default new Functions();
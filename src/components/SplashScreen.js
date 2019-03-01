import React, {PureComponent} from 'react'
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
} from 'react-native'
import firebase from 'firebase';
import {Colors} from "../utils/Colors";
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonText: {
        width: '100%',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        color: Colors.white,
    },
});
export default class SplashScreen extends PureComponent {

    getAuth = async() => {
        return await AsyncStorage.getItem('Auth');
    };

    componentDidMount() {
        setTimeout(() => {
            this.getAuth().then(auth => {
                console.log('auth', auth);
                if(auth){
                    this.props.navigation.navigate('Home')
                }else{
                    this.props.navigation.navigate('Login')
                }
            });
        }, 1000);
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <LinearGradient colors={Colors.gradientBackground} style={styles.linearGradient}>
                <Text style={styles.buttonText}>Welcome</Text>
            </LinearGradient>
        )
    }
}
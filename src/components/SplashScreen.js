import React, {PureComponent} from 'react'
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
} from 'react-native'
import {Colors} from "../utils/Colors";
import LinearGradient from 'react-native-linear-gradient';
import Actions from "../internal/modules/Actions";
import {connect} from "react-redux";

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

class SplashScreen extends PureComponent {

    getAuth = async() => {
        return await AsyncStorage.getItem('Auth');
    };

    componentDidMount() {
        setTimeout(() => {
            this.getAuth().then(auth => {
                this.props.navigate(auth ? "Home" : "Login",{clearStack: true})
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


export default connect(
    appState => ({
    }),
    dispatch => ({
        navigate: (view, navigationData) => dispatch(Actions.common.navigate(view, navigationData)),
    }),
)(SplashScreen);
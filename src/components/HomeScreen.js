import React, {PureComponent} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    AsyncStorage,
    BackHandler,
    Alert
} from 'react-native'
import firebase from 'firebase';
import {Colors} from "../utils/Colors";
import {Functions} from "../utils/Functions";
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from './common/GradientButton'
import Actions from "../internal/modules/Actions";
import {connect} from "react-redux";


class HomeScreen extends PureComponent {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {
        Alert.alert(
            'Exit App',
            'Do you want to exit?',
            [
                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Yes', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: false });
        return true;
    };

    clearStorage = async() => {
        await AsyncStorage.clear();
    };

    signOut(){
        this.clearStorage().then(() => {
            firebase.auth().signOut();
            this.props.navigate("Login",{clearStack: true});
            // this.props.navigation.navigate('Login');
        });
    }

    render() {
        return (
            <LinearGradient colors={Colors.gradientBackground} style={styles.linearGradient}>

                <Image
                    source={{uri: 'https://randomuser.me/api/portraits/men/10.jpg'}}
                    style={styles.imageStyle}/>

                <Text style={styles.nameStyle}>Ray Berry</Text>

                <View style = {styles.buttonContainer}>
                    <GradientButton
                        title={"Sign Out"}
                        fontSize={18}
                        height = {Functions.getHeight(5)}
                        onPress={()=>{this.signOut()}}/>
                </View>
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
)(HomeScreen);


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        width: '100%',
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        color: Colors.white,
    },
    buttonContainer:{
        marginHorizontal: 20,
        marginTop: 30,
        width: '80%'
    },
    imageStyle:{
        height: Functions.getWidth(30),
        width: Functions.getWidth(30),
        borderRadius: Functions.getWidth(30) / 2,
        marginTop: Functions.getHeight(30)
    },
    nameStyle:{
        fontSize: 14,
        color: 'white',
        marginTop: 10,
    }
});
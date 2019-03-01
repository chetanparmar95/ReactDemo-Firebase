import React, {PureComponent} from 'react'
import {
    ActivityIndicator,
    StyleSheet, Text, KeyboardAvoidingView,
    View, Alert, TouchableOpacity, BackHandler
} from 'react-native'
import EditTextView from "./common/EditTextView";
import {Colors} from "../utils/Colors";
import GradientButton from "./common/GradientButton";
import Actions from "../internal/modules/Actions";
import {connect} from "react-redux";
import {Functions} from "../utils/Functions";
import Validation from "../internal/validation/ValidationManager";


class LoginScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: null,
            emailError: null,
            password: null,
            passwordError: null,
        };
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {
        BackHandler.exitApp();
        return true;
    }

    signIn(){
        if(Validation.validateLoginForm(this.state, (state) => {
                this.setState(state)
            })){
            this.props.login({email:this.state.email,password: this.state.password})
        }
    }

    validateEmail(email){
        if(!Validation.isValidEmail(email)){
            this.setState({email ,emailError: 'Please enter valid email'})
        }else{
            this.setState({email, emailError: null })
        }
    }

    showError(error){
        if(error)
            return <Text style = {styles.errorText}>{error}</Text>
    }

    componentWillReceiveProps(nextProps){
        console.log('next props',nextProps);
        this.setState({
            loading: nextProps.loading,
            emailError: nextProps.emailError,
            passwordError: nextProps.passwordError,
        });
    }

    render() {
        const {loading, email, emailError, password, passwordError} = this.state;

        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.container}>
                <View style={{flex: 0.8, justifyContent: 'center'}}>
                    <Text style={styles.buttonText} onPress={ () => {}}>Login</Text>
                </View>
                <View style={{flex: 1, marginHorizontal: 20}}>
                    <EditTextView
                        onChangeText = {(email) => {this.validateEmail(email)}}
                        value = {email}
                        onPress = {() => {this.setState({email: null, emailError: null,})}}
                        iconName = {"md-close"}
                        showRightIcon = {true}
                        placeholder={"Email"}/>
                    {this.showError(emailError)}

                    <EditTextView
                        onChangeText = {(password) => {this.setState({password, passwordError: null})}}
                        value = {password}
                        onPress = {() => {}}
                        marginTop={20}
                        secureTextEntry={true}
                        placeholder={"Password"}/>
                    {this.showError(passwordError)}

                    <View style={styles.buttonContainer}>
                        {loading ?
                            <ActivityIndicator size="large" color={Colors.blue} style = {styles.progressStyle} />
                            :
                            <GradientButton
                                title={"Sign In"}
                                fontSize={18}
                                onPress={()=>{this.signIn()}}/>}
                    </View>

                    <TouchableOpacity activeOpacity = {0.8} onPress = {() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.forgetPasswordTextStyle}>create an account?</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(
    appState => ({
        loading: appState.user.get('loading'),
        emailError: appState.user.get('emailError'),
        passwordError: appState.user.get('passwordError'),
    }),
    dispatch => ({
        login: (user) => dispatch(Actions.user.login(dispatch, user)),
        navigate: (view, navigationData) => dispatch(Actions.common.navigate(view, navigationData)),
    }),
)(LoginScreen);



const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:24,
    },
    buttonText: {
        width: '100%',
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        color: Colors.black,
    },
    errorText:{
        alignSelf: 'center',
        color: Colors.errorColor,
        marginTop: 5,
        fontSize: 12,
    },
    progressStyle:{
        height: Functions.getHeight(6),
        alignSelf: 'center'
    },
    buttonContainer:{
        justifyContent: 'center',
        marginTop: 30
    },
    forgetPasswordTextStyle:{
        marginTop: 30,
        color: Colors.blue,
        alignSelf: 'center',
    }
});
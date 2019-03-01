import React, {PureComponent} from 'react'
import {
    StyleSheet, Text,
    View, ActivityIndicator,
} from 'react-native'
import EditTextView from "./common/EditTextView";
import {Colors} from "../utils/Colors";
import GradientButton from "./common/GradientButton";
import {connect} from "react-redux";
import Actions from "../internal/modules/Actions";
import {Functions} from "../utils/Functions";
import Validation from '../internal/validation/ValidationManager'
import TermsAndConditions from './modal/TermsAndConditions'

class SignupScreen extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            email: null,
            emailError: null,
            password: null,
            passwordError: null,
            confirmPassword: null,
            confirmPasswordError: null,

            showTAndC: false,
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(nextProps){
        this.setState({
            loading: nextProps.loading,
            emailError: nextProps.emailError,
            email: nextProps.success ? null : this.state.email,
            password: nextProps.success ? null : this.state.password,
            confirmPassword: nextProps.success ? null : this.state.confirmPassword,
        })
    }

    signUp(){
            this.setState({showTAndC: true});
        // if(Validation.validateSignUpForm(this.state, (state) => {
        //     this.setState(state)
        // })){
        //     this.props.register({email:this.state.email,password: this.state.password})
        // }
    }

    validateEmail(email){
        if(!Validation.isValidEmail(email)){
            this.setState({email ,emailError: 'Please enter valid email'})
        }else{
            this.setState({email, emailError: null })
        }
    }

    validatePassword(password){
        if(!Validation.passwordLength(password,6)){
            this.setState({password, passwordError: 'Password length should be minimum 6 character'})
        }else{
            this.setState({password, passwordError: null})
        }
    }

    validateConfirmPassword(confirmPassword){
        this.setState({confirmPassword:confirmPassword},() => {
            if(!Validation.passwordLength(confirmPassword,6)){
                this.setState({confirmPassword, confirmPasswordError: 'Password length should be minimum 6 character'})
            }else{
                if(!Validation.isSamePassword(this.state.password, this.state.confirmPassword)){
                    this.setState({confirmPassword , confirmPasswordError: 'Password Mismatched'})
                }else{
                    this.setState({confirmPassword, confirmPasswordError: null})
                }
            }
        });

    }

    showError(error){
        if(error)
            return <Text style = {styles.errorText}>{error}</Text>
    }

    render() {
        // console.log('loading state', this.props.loading, this.props.emailError);
        const {loading, email, emailError, password, passwordError, confirmPassword, confirmPasswordError} = this.state;
        return (
            <View style={styles.container}>
                <View style={{flex: 0.5, justifyContent: 'center'}}>
                    <Text style={styles.buttonText}>Register</Text>
                </View>
                <View style={{flex: 1, marginHorizontal: 20}}>
                    <EditTextView
                        onChangeText = {(email) => {this.validateEmail(email)}}
                        value = {email}
                        onPress = {() => {this.setState({email:null})}}
                        iconName = {"md-close"}
                        showRightIcon = {true}
                        placeholder={"Email"}/>
                    {this.showError(emailError)}

                    <EditTextView
                        onChangeText = {(password) => {this.validatePassword(password)}}
                        value = {password}
                        onPress = {() => {}}
                        marginTop={15}
                        secureTextEntry={true}
                        placeholder={"Password"}/>
                    {this.showError(passwordError)}

                    <EditTextView
                        onChangeText = {(confirmPassword) => {this.validateConfirmPassword(confirmPassword)}}
                        value = {confirmPassword}
                        onPress = {() => {}}
                        marginTop={15}
                        secureTextEntry={true}
                        placeholder={"Confirm Password"}/>
                    {this.showError(confirmPasswordError)}

                    <View style={styles.buttonContainer}>
                        {loading ?
                            <ActivityIndicator size="large" color={Colors.blue} style = {styles.progressStyle} />
                            :
                            <GradientButton
                            title={"Sign Up"}
                            fontSize={18}
                            onPress={()=>{this.signUp()}}/>}
                    </View>

                    <View style={styles.bottomSignInLayoutStyle}>
                        <Text>Have an account?</Text>
                        <Text style={styles.signInTextStyle} onPress={()=>{this.props.navigation.navigate('Login')}}>Sign In</Text>
                    </View>
                </View>

                <TermsAndConditions
                    visible = {this.state.showTAndC}
                    onPress={() => {
                        this.setState({showTAndC: false})
                    }}
                />
            </View>
        )
    }
}

export default connect(
    appState => ({
        loading: appState.user.get('loading'),
        emailError: appState.user.get('emailError')
    }),
    dispatch => ({
        register: (user) => dispatch(Actions.user.register(dispatch,user)),
    }),
)(SignupScreen);


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
    profileTextStyle:{
        fontSize: 20,
        marginTop: 25,
        color: Colors.blue,
        alignSelf: 'center',
        textAlign: 'center',
    },
    bottomSignInLayoutStyle:{
        flex: 0.8,
        justifyContent: 'center',
        marginTop:20,
        flexDirection:'row'
    },
    signInTextStyle:{
        color: Colors.blue,
        marginStart: 5
    },
    errorText:{
        alignSelf: 'center',
        color: Colors.errorColor,
        marginTop: 5,
        fontSize: 12,
    },
    progressStyle:{
        height: Functions.getHeight(6),alignSelf: 'center'
    },
    buttonContainer:{
        justifyContent: 'center',
        marginTop: 30
    }
});
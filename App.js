import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import {createStackNavigator} from "react-navigation";
import {Root} from 'native-base'
import { Provider } from 'react-redux';
import firebase from 'firebase';

import NavigationService from "./src/utils/NavigationService";
import SplashScreen from "./src/components/SplashScreen";
import LoginScreen from "./src/components/LoginScreen";
import SignupScreen from "./src/components/SignupScreen";
import HomeScreen from "./src/components/HomeScreen";

import configureStore from './src/internal/store';
const store = configureStore();

global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

const RootStack = createStackNavigator({
        SplashScreen: {
            screen: SplashScreen,
        },
        Login: {
            screen: LoginScreen,
        },
        Register: {
            screen: SignupScreen,
        },
        Home:{
            screen: HomeScreen,
        }
    },{
        initialRouteName: "SplashScreen",
        headerMode: "none"
    }
);



export default class App extends Component {

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDmhfXRkVopKycBb3jtVRQzz73eEeuYMX4",
            authDomain: "reactnative-auth-f4051.firebaseapp.com",
            databaseURL: "https://reactnative-auth-f4051.firebaseio.com",
            projectId: "reactnative-auth-f4051",
            storageBucket: "reactnative-auth-f4051.appspot.com",
            messagingSenderId: "1003965980109"
        });

    }

  render() {
    return (
        <Provider store={ store } >
            <Root>
              <View style={{flex: 1}}>
                <StatusBar
                    hidden={true}/>
                <RootStack
                    ref = {navigationRef => {NavigationService.setTopLevelNavigator(navigationRef)}}
                />
              </View>
            </Root>
        </Provider>
    );
  }
}


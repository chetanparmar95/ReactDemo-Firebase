import React from 'react';
import {Map} from 'immutable'
import {ModuleEvents} from './Actions';

const InitialState = new Map({
    user: null,
    token: null,
    loading: false,
    emailError: null,
    passwordError: null,
    success: false,
    errorMessage: null,
    loginErrorMessage: null,
});

export const Reducer = (state = InitialState, action) => {
    const {payload, type} = action;
    switch (type) {
        case ModuleEvents.LOADING:{
            return state.set('loading', true).set('emailError', null)
        }

        case ModuleEvents.LOGIN:{
            console.log('login res ', payload);
            // console.log('login res ', payload.message);
            if(payload.code){ //error
                switch(payload.code){
                    case 'auth/wrong-password':
                        return state.set('loading', false).set('passwordError', payload.message).set('success',false);
                    case 'auth/user-not-found':
                        return state.set('loading', false).set('emailError', 'Email not found').set('success',false);
                }
                return state.set('loading', false).set('success', false)
            }else{
                return state.set('loading', false).set('success', true).set('user', payload.user)
            }
        }

        case ModuleEvents.REGISTER:{
            console.log('register res ', payload);
            // console.log('register res ', payload.message);
            if(payload.code){ //error
                switch(payload.code){
                    case 'auth/email-already-in-use':
                        return state.set('loading', false).set('emailError', payload.message).set('success',false)
                }
                return state.set('loading', false).set('success', false)
            }else{
                return state.set('loading', false).set('success', true).set('user', payload.user)
            }
        }
        default:
            return state;
    }
};

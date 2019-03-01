import React from 'react';
import {AsyncStorage} from 'react-native';
import {Actions} from '../../internal/modules/Actions';
import {ModuleEvents} from './Actions';
import {Functions} from "../../utils/Functions";


export default {

    [ModuleEvents.LOGIN]: ({dispatch, payload, appState}) => {
        if(payload.user){
            Functions.storeAuth(payload.user.refreshToken);
            dispatch(Actions.common.navigate("Home"))
        }
    },

    [ModuleEvents.REGISTER]: ({dispatch, payload, appState}) => {
        if(payload.user){
            Functions.storeAuth(payload.user.refreshToken);
            dispatch(Actions.common.navigate("Home"))
        }
    },


}


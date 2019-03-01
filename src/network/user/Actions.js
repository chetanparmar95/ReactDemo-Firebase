import React from 'react';
import {createAction} from "../../utils/AppUtils";
import UserAPI from "../UserAPI";

export const ModuleEvents = {
    LOADING: 'LOADING',
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
};

export default {

    login: createAction(ModuleEvents.LOGIN, async(dispatch,user) => {
        dispatch({type: ModuleEvents.LOADING});
        return await UserAPI.login(user)
    }),

    register: createAction(ModuleEvents.REGISTER, async(dispatch,user) => {
        dispatch({type: ModuleEvents.LOADING});
        return await UserAPI.register(user)
    })




};

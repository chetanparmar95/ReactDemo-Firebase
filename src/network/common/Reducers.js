import React from 'react';
import {Map} from 'immutable'
import {ModuleEvents} from './Actions';

const InitialState = new Map({
});

export const Reducer = (state = InitialState, action) => {
    const {payload, type} = action;
    switch (type) {
        default:
            return state;
    }
};

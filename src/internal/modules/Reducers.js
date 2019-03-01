import React from 'react';
import ModuleSet from './AppModules';
import dataReducer from "./Reducers";

const _ = require('lodash');
const reducerModule = {
    user: require("./../../network/user/Reducers"),
    common: require("./../../network/common/Reducers"),
};

const Reducers = _(ModuleSet)
    .keyBy(module => module)
    .mapValues(module => {
        return reducerModule[module];
    })
    .mapValues(module => module.Reducer)
    .value();

export default Reducers;

import React from 'react';
var _ = require("lodash");


const createAction = (type, action) => {
    return (...args) => ( { type, payload: action.apply(null, args) })
};

const emptyLogger = {
    log: () => {},
    warn: () => {},
    error: () => {},
    info: () => {},
};

const getLogger = __DEV__ ? console : emptyLogger;

const createLogger = (module = 'default', level = 'debug') => ({
    log: (...args) => {
        getLogger.log([`${module}`, ...args].join(' '));
    },
    info: (...args) => {
        getLogger.info([`${module}`, ...args].join(' '));
    },
    warn: (...args) => {
        getLogger.warn([`${module}`, ...args].join(' '));
    },
    error: (...args) => {
        getLogger.error([`${module}`, ...args].join(' '));
    },
});

const Logger = (module, file) => ({
    log: (...args) => {},
    warn: (...args) => {},
    error: (...args) => {},
});

export {
    _,
    createAction,
    createLogger,
    Logger,
}

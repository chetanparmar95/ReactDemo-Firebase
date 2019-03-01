import React from 'react';
import _ from 'lodash';
import { AllHandlers } from '../modules/Handlers';
import { Actions } from '../modules/Actions';
import { createLogger } from './../../utils/AppUtils';
import NetworkError from '../../internal/models/NetworkError';

const logger = createLogger('[Action]');

export const actionMiddleware = (args) => {
    return ({ dispatch, getState }) => next => action => {
        const handlers = AllHandlers[action.type];
        _.defer(() => {
        });

        const { payload: data, error, type } = action;

        if (error) {
            if (data instanceof NetworkError) {
                console.log("++++++++++++++++++++++++++++++", data)
            } else {
                if (error.code) {
                    logger.error(`Unhandled probable network error in ${type} : ${JSON.stringify(error)} `)
                } else {
                    logger.warn(`Unhandled error in ${type} : ${JSON.stringify(error)} `)
                }
            }
        }

        const nextResult = next(action);

        _.forEach(handlers, handler => {
            handler({ dispatch, payload: action.payload, appState: getState() })
        });

        return nextResult;
    };
}

export default actionMiddleware;


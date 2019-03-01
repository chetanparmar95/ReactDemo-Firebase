import React from "react";
const _ = require("lodash");
import ModuleSet from "./AppModules";

const handlerModule = {
    user: require('./../../network/user/Handlers'),
    common: require('./../../network/common/Handlers'),
};
export const Handlers = _(ModuleSet)
    .keyBy(module => module)
    .mapValues(module => {
        try {
            console.log(module);
            const moduleHandler = handlerModule[module];
            return moduleHandler.default;
        } catch (e) {
            console.warn("ok", e);
            return {default: {}};
        }
    })
    .value();
export const AllHandlers = _(Handlers)
    .transform((result, handler) => {
        _.mapKeys(handler, (fn, key) => {
            if (key === "default") {
                return;
            }
            result[key] = result[key] ? _.concat(result[key], fn) : [fn];
        });
        return result;
    }, {})
    .value();
export default Handlers;

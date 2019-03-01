import ModuleSet from './AppModules';

var _ = require("lodash");
const actionModule = {
    user: require("./../../network/user/Actions"),
    common: require("./../../network/common/Actions"),
};

export const Actions = _(ModuleSet)
    .keyBy(module => module)
    .mapValues(module => {
        return actionModule[module];
    })
    .mapValues(module => module.default)
    .value();

export default Actions;


import {NavigationActions} from 'react-navigation';

let _navigator;
const setTopLevelNavigator = (navigatorRef) => {
    _navigator = navigatorRef;
};
const navigate = (routeName, params) => {
    console.log(routeName);
    _navigator.dispatch(NavigationActions.navigate({type: NavigationActions.NAVIGATE, routeName, params,}));
};

const navigateAction = (action) => {
    _navigator.dispatch(action);
};

// add other navigation functions that you need and export themexport default {  navigate,  setTopLevelNavigator,};
export default {
    navigate,
    navigateAction,
    setTopLevelNavigator
}
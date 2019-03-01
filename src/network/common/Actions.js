import React from 'react';
import {createAction} from "../../utils/AppUtils";
import NavigationService from "../../utils/NavigationService";
import {StackActions, NavigationActions} from "react-navigation";

export const ModuleEvents = {
    NAVIGATE: 'NAVIGATE',
};

export default {
    navigate: createAction(ModuleEvents.NAVIGATE, (view, navigateData) => {
        if(navigateData.clearStack){
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: view})
                ]
            });
            NavigationService.navigateAction(resetAction)
        }else{
            NavigationService.navigate(view,navigateData)
        }
    }),
};

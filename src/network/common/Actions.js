import React from 'react';
import {createAction} from "../../utils/AppUtils";
import NavigationService from "../../utils/NavigationService";

export const ModuleEvents = {
    NAVIGATE: 'NAVIGATE',
}

export default {
    navigate: createAction(ModuleEvents.NAVIGATE, (view, navigateData) => {
        NavigationService.navigate(view,navigateData)
    }),
};

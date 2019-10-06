import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import { reducer as toastr } from 'react-redux-toastr';

import user from "./user.reducer";
import dashboard from "./dashboard.reducer";

const rootReducer = combineReducers({
    user,
    dashboard,
    form,
    toastr,
});

export default rootReducer;
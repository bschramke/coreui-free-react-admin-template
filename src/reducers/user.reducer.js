import * as userAction from "../actions/user.actions";

export default function (state = null, action) {
    switch (action.type) {
        case userAction.USER_LOGGED_IN:
            return action.payload;
        case userAction.USER_LOGGED_OUT:
            return null;
        default:
            return state;
    }
}
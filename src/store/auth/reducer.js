import { actionTypeUser } from "./action-type";

const initialState = {
    auth: false,
    token: '',
    username: '',
}

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypeUser.LOGIN:
            return { ...state, auth: action.payload.auth, token: action.payload.token, username: action.payload.username }
        case actionTypeUser.LOGOUT:
            return { ...state, auth: false, token: '' };
        default:
            return state;
    }
}

export default reducer;
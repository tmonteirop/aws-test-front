import { actionTypeMessage } from "./action-type";

const initialState = {
    title: '',
    description: '',
    status: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypeMessage.INFO:
            return { ...state, title: action.payload.title, description: action.payload.description, status: 'info' };
        case actionTypeMessage.WARNING:
            return { ...state, title: action.payload.title, description: action.payload.description, status: 'warning' };
        case actionTypeMessage.SUCCESS:
            return { ...state, title: action.payload.title, description: action.payload.description, status: 'success' };
        case actionTypeMessage.ERROR:
            return { ...state, title: action.payload.title, description: action.payload.description, status: 'error' };
        default:
            return { ...state, title: '', description: '', status: '' };
    }
}

export default reducer;
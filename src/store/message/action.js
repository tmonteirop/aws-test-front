import { actionTypeMessage } from "./action-type";

export const infoMessage = (message) => {
    return async (dispatch) => {
        dispatch({
            type: actionTypeMessage.INFO,
            payload: message
        });
    }
}

export const warningMessage = (message) => {
    return async (dispatch) => {
        dispatch({
            type: actionTypeMessage.WARNING,
            payload: message
        });
    }
}

export const successMessage = (message) => {
    return async (dispatch) => {
        dispatch({
            type: actionTypeMessage.SUCCESS,
            payload: message
        });
    }
}

export const errorMessage = (message) => {
    return async (dispatch) => {
        dispatch({
            type: actionTypeMessage.ERROR,
            payload: message
        });
    }
}

export const clearMessage = () => {
    return async (dispatch) => {
        dispatch({
            type: 'clear',
            payload: ''
        });
    }
}
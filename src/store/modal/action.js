import { actionTypeModal } from "./action-type";

export const openModal = (message) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypeModal.OPEN,
      payload: true,
    });
  };
};

export const closeModal = (message) => {
    return async (dispatch) => {
      dispatch({
        type: actionTypeModal.CLOSE,
        payload: false,
      });
    };
  };

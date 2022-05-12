import { actionTypeModal } from "./action-type";

const initialState = {
  modalState: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypeModal.OPEN:
      return { ...state, modalState: action.payload };
    case actionTypeModal.CLOSE:
      return { ...state, modalState: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;

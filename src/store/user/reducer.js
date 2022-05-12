import { actionTypeUser } from "./action-type";

const initialState = {
  selectedUser: {},
  users: [],
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypeUser.GET:
      return {
        ...state,
        users: action.payload.usersList,
      };

    case actionTypeUser.CLEARCURRENTUSER:
      return { ...state, selectedUser: {} };

    case actionTypeUser.SETCURRENTUSER:
      return {
        ...state,
        // selectedUser: { ...action.payload.selectedUser, password: "" },
        selectedUser: action.payload.selectedUser,
      };

    case actionTypeUser.POST:
      return {
        ...state,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      };
    case actionTypeUser.LOGOUT:
      return { ...state, auth: false, token: "" };
    default:
      return state;
  }
};

export default reducer;

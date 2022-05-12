import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import userReducer from "./user/reducer";
import messageReducer from "./message/reducer";
import modalStateReducer from "./modal/reducer";

const reducers = combineReducers({
  loggedUser: authReducer,
  message: messageReducer,
  user: userReducer,
  isopenmodal: modalStateReducer,
});

export default reducers;

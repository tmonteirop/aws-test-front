import { api } from "../../services/api";

import { actionTypeUser } from "./action-type";

export const getUserRequest = () => {
  return async (dispatch) => {
    const getUsers = await api.get("/users");

    const usersList = await getUsers.data;

    // SEND DATA TO REDUCER
    dispatch({
      type: actionTypeUser.GET,
      payload: { usersList },
    });
  };
};

export const clearCurrentUser = () => {
  return async (dispatch) => {
    // SEND DATA TO REDUCER
    dispatch({
      type: actionTypeUser.SETCURRENTUSER,
      payload: { dispatch },
    });
  };
};

export const setCurrentUser = (id) => {
  return async (dispatch) => {
    const getUser = await api.get(`/user/${id}`);

    const selectedUser = await getUser.data;

    // SEND DATA TO REDUCER
    dispatch({
      type: actionTypeUser.SETCURRENTUSER,
      payload: { selectedUser },
    });
  };
};

export const postUser = (user) => {
  return async (dispatch) => {
    const newUser = {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
    };

    const postUser = await api.post("/user", newUser);

    const responsePostUser = await postUser.data;

    if (responsePostUser) {
      dispatch(getUserRequest());
      dispatch({
        type: actionTypeUser.POST,
        payload: {
          responsePostUser,
        },
      });
    }
  };
};

// export const successMessage = (message) => {
//   return async (dispatch) => {
//     dispatch({
//       type: actionTypeUser.UPDATE,
//       payload: message,
//     });
//   };
// };

// export const errorMessage = (message) => {
//   return async (dispatch) => {
//     dispatch({
//       type: actionTypeUser.DELETE,
//       payload: message,
//     });
//   };
// };

// export const clearMessage = () => {
//   return async (dispatch) => {
//     dispatch({
//       type: "clear",
//       payload: "",
//     });
//   };
// };

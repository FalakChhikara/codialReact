import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  AUTHENTICATE_USER,
  LOGOUT,
  CLEAR_AUTH_STATE,
} from "../actions/actionTypes";

export const currAuthState = {
  user: {},
  error: null,
  isLogin: false,
  isProgress: false,
};

export default function auth(currState = currAuthState, action) {
  switch (action.type) {
    case SIGNUP_START:
    case LOGIN_START:
      return {
        ...currState,
        isProgress: true,
        error: null,
      };
    case SIGNUP_SUCCESS:
    case AUTHENTICATE_USER:
    case LOGIN_SUCCESS:
      return {
        ...currState,
        user: action.user,
        isLogin: true,
        isProgress: false,
        error: null,
      };
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...currState,
        isProgress: false,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...currState,
        user: {},
        isLogin: false,
        isProgress: false,
      };
    case CLEAR_AUTH_STATE:
      return {
        ...currState,
        error: null,
      };
    default:
      return currState;
  }
}

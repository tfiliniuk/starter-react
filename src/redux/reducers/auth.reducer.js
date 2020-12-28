import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  GET_USER,
  GET_USER_SUCCESS,
  UPDATE_DETAILS,
  UPDATE_DETAILS_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
} from '../actions/auth.actions';
import {
  UPLOAD_AVATAR,
  UPLOAD_AVATAR_SUCCESS,
  DELETE_AVATAR_SUCCESS,
} from '../../pages/Profile/store/actions';
import { localStorageService } from '../../common/helpers/localStorageService';

const initialState = {
  loading: false,
  loaded: false,
  user: {},
  isSigned: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, loaded: false };
    case LOGIN_USER_SUCCESS:
      const { accessToken, refreshToken } = action.payload;
      localStorageService.setToken({
        accessToken,
        refreshToken,
      });
      return {
        ...state,
        loading: false,
        loaded: true,
        isSigned: true,
      };
    case GET_USER:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload,
      };
    case LOGOUT_USER:
      localStorageService.clearToken();
      return {
        ...state,
        loading: false,
        loaded: false,
        user: {},
        isSigned: false,
      };
    case UPDATE_DETAILS:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case UPDATE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload.data,
      };

    case UPLOAD_AVATAR:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case UPLOAD_AVATAR_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload,
      };
    case DELETE_AVATAR_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loaded: false,
      };
    default:
      return state;
  }
}

export default authReducer;

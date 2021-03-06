export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

export const loginUser = (payload) => {
  return {
    type: LOGIN_USER,
    payload: payload,
  };
};

export const loginUserSuccess = (payload) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: payload,
  };
};

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const getUser = () => {
  return {
    type: GET_USER,
  };
};
export const getUserSuccess = (payload) => {
  return {
    type: GET_USER_SUCCESS,
    payload,
  };
};

export const LOGOUT_USER = 'LOGOUT_USER';

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const UPDATE_DETAILS = 'UPDATE_DETAILS';
export const UPDATE_DETAILS_SUCCESS = 'UPDATE_DETAILS_SUCCESS';

export const updateDetails = (payload) => {
  return {
    type: UPDATE_DETAILS,
    payload,
  };
};
export const updateDetailsSuccess = (payload) => {
  return {
    type: UPDATE_DETAILS_SUCCESS,
    payload,
  };
};

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';

export const forgotPassword = (payload) => {
  return {
    type: FORGOT_PASSWORD,
    payload,
  };
};
export const forgotPasswordSuccess = () => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
};

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';

export const resetPassword = (resetToken, payload) => {
  return {
    type: RESET_PASSWORD,
    resetToken,
    payload,
  };
};
export const resetPasswordSuccess = () => {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
};

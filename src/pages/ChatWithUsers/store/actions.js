export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';

export const getAllUsers = () => {
  return {
    type: GET_ALL_USERS,
  };
};

export const getAllUsersSuccess = (payload) => {
  return {
    type: GET_ALL_USERS_SUCCESS,
    payload,
  };
};

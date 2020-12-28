import { GET_ALL_USERS, GET_ALL_USERS_SUCCESS } from './actions';

const initialState = {
  loading: false,
  loaded: false,
  users: null,
};

function chatWithUsersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: action.payload,
      };

    default:
      return state;
  }
}

export default chatWithUsersReducer;

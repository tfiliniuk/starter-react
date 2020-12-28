import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './auth.reducer';
import chatWithUsersReducer from '../../pages/ChatWithUsers/store/reducer';

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    chat: chatWithUsersReducer,
  });

export default reducers;

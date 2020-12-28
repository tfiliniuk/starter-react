import { all } from 'redux-saga/effects';
import { watchAuthSaga } from './auth.saga';
import { watchUserSaga } from '../../pages/Profile/store/saga';
import { watchChatWithUsersSaga } from '../../pages/ChatWithUsers/store/saga';

export default function* rootSaga() {
  yield all([watchAuthSaga(), watchUserSaga(), watchChatWithUsersSaga()]);
}

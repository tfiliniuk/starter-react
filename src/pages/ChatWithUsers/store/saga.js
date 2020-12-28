import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_ALL_USERS, getAllUsersSuccess } from './actions';

import ApiBase from '../../../common/api/api.base';

function* workerGetAllUsers(action) {
  try {
    const result = yield call(ApiBase.get, '/user/all-users');
    yield put(getAllUsersSuccess(result.data));
  } catch (error) {}
}

export function* watchChatWithUsersSaga() {
  yield takeEvery(GET_ALL_USERS, workerGetAllUsers);
}

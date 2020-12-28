import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  LOGIN_USER,
  loginUserSuccess,
  GET_USER,
  getUserSuccess,
  LOGOUT_USER,
  UPDATE_DETAILS,
  updateDetailsSuccess,
  FORGOT_PASSWORD,
  forgotPasswordSuccess,
  RESET_PASSWORD,
  resetPasswordSuccess,
} from '../actions/auth.actions';

import ApiBase from '../../common/api/api.base';

function* login(action) {
  try {
    const result = yield call(ApiBase.post, '/auth/login', action.payload);
    yield put(loginUserSuccess(result));
    yield put(push('/'));
  } catch (error) {
    console.log('error login', error);
  }
}

function* getUser() {
  try {
    const result = yield call(ApiBase.get, '/auth/me');
    yield put(getUserSuccess(result.data));
  } catch (error) {
    // yield put({ type: LOGOUT_USER });
    console.log('error get user', error);
  }
}

function* logout() {
  try {
    yield put(push('/login'));
  } catch (error) {
    console.log('error', error);
  }
}

function* updatedUser(action) {
  try {
    const result = yield call(
      ApiBase.put,
      '/auth/update-details',
      action.payload
    );
    yield put(updateDetailsSuccess(result));
  } catch (error) {}
}

function* workerForgotPassword(action) {
  try {
    yield call(ApiBase.post, '/auth/forgot-password', action.payload);
    yield put(forgotPasswordSuccess());
  } catch (error) {
    console.log(error);
  }
}

function* workerResetPassword(action) {
  try {
    const result = yield call(
      ApiBase.put,
      `/auth/reset-password/${action.resetToken}`,
      action.payload
    );
    yield put(resetPasswordSuccess());
    yield put(push('/login'));
  } catch (error) {}
}

export function* watchAuthSaga() {
  yield takeEvery(LOGIN_USER, login);
  yield takeEvery(GET_USER, getUser);
  yield takeEvery(LOGOUT_USER, logout);
  yield takeEvery(UPDATE_DETAILS, updatedUser);
  yield takeEvery(FORGOT_PASSWORD, workerForgotPassword);
  yield takeEvery(RESET_PASSWORD, workerResetPassword);
}

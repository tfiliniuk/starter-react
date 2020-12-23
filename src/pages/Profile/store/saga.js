import { call, put, takeEvery } from 'redux-saga/effects';
import {
  UPLOAD_AVATAR,
  uploadProfileAvatarSuccess,
  DELETE_AVATAR,
  deleteProfileAvatarSuccess,
} from './actions';

import ApiBase from '../../../common/api/api.base';

function* workerUploadProfileAvatar(action) {
  try {
    const result = yield call(
      ApiBase.file,
      '/user/upload-avatar',
      action.payload
    );

    yield put(uploadProfileAvatarSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
}

function* workerDeleteProfileAvatar() {
  try {
    const result = yield call(ApiBase.delete, '/user/delete-avatar');
    yield put(deleteProfileAvatarSuccess(result.data));
  } catch (error) {}
}

export function* watchUserSaga() {
  yield takeEvery(UPLOAD_AVATAR, workerUploadProfileAvatar);
  yield takeEvery(DELETE_AVATAR, workerDeleteProfileAvatar);
}

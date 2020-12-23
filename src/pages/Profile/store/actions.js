export const UPLOAD_AVATAR = 'UPLOAD_AVATAR';
export const UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS';

export const uploadProfileAvatar = (payload) => {
  return {
    type: UPLOAD_AVATAR,
    payload,
  };
};
export const uploadProfileAvatarSuccess = (payload) => {
  return {
    type: UPLOAD_AVATAR_SUCCESS,
    payload,
  };
};

export const DELETE_AVATAR = 'DELETE_AVATAR';
export const DELETE_AVATAR_SUCCESS = 'DELETE_AVATAR_SUCCESS';

export const deleteProfileAvatar = () => {
  return {
    type: DELETE_AVATAR,
  };
};
export const deleteProfileAvatarSuccess = (payload) => {
  return {
    type: DELETE_AVATAR_SUCCESS,
    payload,
  };
};

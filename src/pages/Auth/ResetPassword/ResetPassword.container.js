import React from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../../redux/actions/auth.actions';
import { ResetPasswordForm } from './components/ResetPasswordForm';

export const ResetPasswordContainer = (props) => {
  const dispatch = useDispatch();
  const resetToken = props.match.params.resettoken;

  const onResetPassword = (token, password) =>
    dispatch(resetPassword(token, password));
  return (
    <ResetPasswordForm
      onResetPassword={onResetPassword}
      resetToken={resetToken}
    />
  );
};

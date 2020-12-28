import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../../redux/actions/auth.actions';
import { ForgotPasswordForm } from './components/ForgotPasswordForm';

export const ForgotPasswordContainer = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const loaded = useSelector((state) => state.auth.loaded);

  const onForgotPassword = (data) => dispatch(forgotPassword(data));
  return (
    <ForgotPasswordForm
      onForgotPassword={onForgotPassword}
      loading={loading}
      loaded={loaded}
    />
  );
};

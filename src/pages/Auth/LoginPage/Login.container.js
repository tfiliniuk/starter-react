import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/actions/auth.actions';
import { LoginForm } from './components/LoginForm';

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const onLogin = (payload) => dispatch(loginUser(payload));
  return <LoginForm onLogin={onLogin} />;
};

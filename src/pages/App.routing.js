import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Switch, Route } from 'react-router-dom';
import { LoginContainer } from './Auth/LoginPage/Login.container';
import { RegisterContainer } from './Auth/Register/Register.container';
import { HomeContainer } from './Home/Home.container';
import { ProfileContainer } from './Profile/Profile.container';
import { PrivateRoute } from '../common/components/PrivateRoute/PrivateRoute';
import { ForgotPasswordContainer } from './Auth/ForgotPassword/ForgotPassword.container';
import { ResetPasswordContainer } from './Auth/ResetPassword/ResetPassword.container';
import { ChatWithUsersContainer } from './ChatWithUsers/ChatWithUsers.container';
//import pages

export const AppRouting = () => {
  const [socket, setSocket] = React.useState(null);
  const setupSocket = () => {
    if (!socket) {
      const newSocket = io('http://localhost:5000');
      newSocket.on('connect', () => {
        console.log('Socket connected');
      });

      setSocket(newSocket);
    }
  };
  useEffect(() => {
    setupSocket();
  }, []);
  return (
    <Switch>
      <Route exact path={'/login'} component={LoginContainer} />
      <Route
        exact
        path={'/forgot-password'}
        component={ForgotPasswordContainer}
      />
      <Route
        exact
        path={'/reset-password/:resettoken'}
        component={ResetPasswordContainer}
      />
      <Route path={'/register'} component={RegisterContainer} />
      <PrivateRoute exact path={'/profile'} component={ProfileContainer} />
      <PrivateRoute
        path={'/chat'}
        socket={socket}
        component={ChatWithUsersContainer}
      />
      <PrivateRoute
        exact
        path={'/'}
        component={HomeContainer}
        socket={socket}
      />
      <Route path="/**" render={() => <div>Not Found</div>} />
    </Switch>
  );
};

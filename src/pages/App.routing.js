import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginContainer } from './Auth/LoginPage/Login.container';
import { RegisterContainer } from './Auth/Register/Register.container';
import { HomeContainer } from './Home/Home.container';
import { ProfileContainer } from './Profile/Profile.container';
import { PrivateRoute } from '../common/components/PrivateRoute/PrivateRoute';
import { ForgotPasswordContainer } from './Auth/ForgotPassword/ForgotPassword.container';
//import pages

export const AppRouting = () => {
  return (
    <Switch>
      <Route exact path={'/login'} component={LoginContainer} />
      <Route
        exact
        path={'/forgot-password'}
        component={ForgotPasswordContainer}
      />
      <Route path={'/register'} component={RegisterContainer} />
      <PrivateRoute exact path={'/profile'} component={ProfileContainer} />
      <PrivateRoute exact path={'/'} component={HomeContainer} />
      <Route path="/**" render={() => <div>Not Found</div>} />
    </Switch>
  );
};

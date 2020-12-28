import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, exact, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <Route
      exact={exact}
      render={(props) => {
        if (!auth.isSigned) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        } else {
          return <Component {...props} {...rest} />;
        }
      }}
    />
  );
};

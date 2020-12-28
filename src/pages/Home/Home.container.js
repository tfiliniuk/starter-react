import React, { useEffect } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Preloader } from 'common/components/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from '../../redux/actions/auth.actions';

export const HomeContainer = ({ socket }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (socket) {
      socket.emit('listOfUsers', auth.user);
      socket.on('onlineUsers', (data) => {
        let listOfUsers = Object.values(data);
        // users.map((user) => {
        //   if (listOfUsers.includes(user._id)) {
        //     // return setIsOnline(true);
        //   } else {
        //     // return setIsOnline(false);
        //   }
        // });
      });
    }
  }, [socket, auth.user]);
  const onLogout = () => dispatch(logout());

  if (auth.loading) return <Preloader />;
  return (
    <div>
      <Alert variant="secondary">Hello {auth.user.name}</Alert>
      <Alert variant="dark">
        <NavLink to="/profile">Profile</NavLink>
      </Alert>
      <Alert variant="success">
        <NavLink to="/chat">Chat</NavLink>
      </Alert>
      <Alert variant="danger">
        <Button variant="info" onClick={onLogout}>
          Logout
        </Button>
      </Alert>
    </div>
  );
};

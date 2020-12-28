import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from './store/actions';
import { Container, Row, Col } from 'react-bootstrap';
import { Preloader } from '../../common/components/Preloader';
import { Sidebar } from './components/Sidebar/Sidebar';

export const ChatWithUsersContainer = ({ socket }) => {
  const chat = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (chat.loading) return <Preloader />;

  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <Sidebar users={chat.users} socket={socket} />
        </Col>
        <Col xs={12} md={9}></Col>
      </Row>
    </Container>
  );
};

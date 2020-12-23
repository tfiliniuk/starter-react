import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Alert, Button, Container, Col, Image } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { updateDetails } from '../../redux/actions/auth.actions';
import { uploadProfileAvatar, deleteProfileAvatar } from './store/actions';
import { Preloader } from 'common/components/Preloader';

export const ProfileContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const { register, handleSubmit, errors } = useForm();

  const onAvatarChange = (e) => {
    dispatch(uploadProfileAvatar(e.target.files[0]));
  };

  const onDeleteAvatar = () => dispatch(deleteProfileAvatar());
  // const onSubmitAvatar = (image) => dispatch(uploadProfileAvatar(image));

  const onUpdate = (data) => dispatch(updateDetails(data));
  const onSubmit = (data) => onUpdate(data);

  return (
    <Container>
      <Alert variant="secondary">Profile</Alert>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          {user.avatar && (
            <Col xs={6} md={2} style={{ display: 'flex' }}>
              {loading ? (
                <Preloader />
              ) : (
                <Image
                  style={{ width: '100%' }}
                  src={user.avatar}
                  roundedCircle
                />
              )}
              <Button onClick={onDeleteAvatar}>Delete image</Button>
            </Col>
          )}
          <Form.File
            id="file"
            name="file"
            ref={register}
            onChange={onAvatarChange}
            label="Example file input"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            ref={register({ required: true })}
            defaultValue={user.email}
          />
          {errors.email && (
            <Form.Text className="text-muted">Email is required</Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            ref={register({ required: true })}
            defaultValue={user.name}
          />
          {errors.name && (
            <Form.Text className="text-muted">Name is required</Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            placeholder="Role"
            name="role"
            ref={register({ required: true })}
            defaultValue={user.role}
          />
          {errors.role && (
            <Form.Text className="text-muted">Role is required</Form.Text>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

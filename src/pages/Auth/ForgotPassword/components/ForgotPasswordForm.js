import React, { useState } from 'react';
import { Form, Alert, Button, Container, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

export const ForgotPasswordForm = ({ onForgotPassword, loaded, loading }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    onForgotPassword(data);
  };
  return (
    <Container>
      {!loaded ? (
        <>
          <Alert variant="secondary">Forgot Password</Alert>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                ref={register({ required: true })}
              />
              {errors.email && (
                <Form.Text className="text-muted">Email is required</Form.Text>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Alert variant="dark">
            Go to login page
            <NavLink className="btn btn-info" to="/login">
              {loading && <Spinner animation="border" />}
              Login
            </NavLink>
          </Alert>
        </>
      ) : (
        <Alert variant="success">Check your email</Alert>
      )}
    </Container>
  );
};

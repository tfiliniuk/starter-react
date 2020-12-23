import React from 'react';
import { Form, Alert, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

export const LoginForm = ({ onLogin }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => onLogin(data);
  return (
    <div>
      <Container>
        <Alert variant="secondary">Login</Alert>
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
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              ref={register({ required: true })}
            />
            {errors.password && (
              <Form.Text className="text-muted">Password is required</Form.Text>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Alert variant="dark">
          Already have account?{' '}
          <NavLink className="btn btn-info" to="/">
            Login
          </NavLink>
        </Alert>
        <Alert variant="dark">
          Forgot Password?
          <NavLink className="btn btn-info" to="/forgot-password">
            Go here
          </NavLink>
        </Alert>
      </Container>
    </div>
  );
};

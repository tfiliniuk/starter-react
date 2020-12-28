import React from 'react';
import { Form, Alert, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

export const ResetPasswordForm = ({ onResetPassword, resetToken }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    onResetPassword(resetToken, data);
  };
  return (
    <div>
      <Container>
        <Alert variant="secondary">Reset Password</Alert>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
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

        {/* <Alert variant="dark">
          Forgot Password?
          <NavLink className="btn btn-info" to="/forgot-password">
            Go here
          </NavLink>
        </Alert> */}
      </Container>
    </div>
  );
};

import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleForm = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const FooterForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  margin: 0 5px 0 0;
`;

export const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <TitleForm>
        <h3>Register</h3>
      </TitleForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control-group">
          <input
            className="form-control"
            placeholder="Email"
            ref={register({ required: true })}
            name="email"
            type="text"
          />
          {errors.email && (
            <div className="form-control-error">Email is required</div>
          )}
        </div>
        <div className="form-control-group">
          <input
            className="form-control"
            placeholder="Password"
            ref={register({ required: true })}
            name="password"
            type="text"
          />
          {errors.password && (
            <div className="form-control-error">Password is required</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Continue
        </button>
        <FooterForm>
          <Paragraph>Already have account? </Paragraph>
          <NavLink to="/login" className="btn-secondary">
            Login
          </NavLink>
        </FooterForm>
      </Form>
    </div>
  );
};

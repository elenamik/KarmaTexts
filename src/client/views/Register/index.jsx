import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { getServerURL } from '../../config/urls';
import { useHistory } from 'react-router-dom';

function Register (props) {
  const { register, handleSubmit, errors } = useForm();
  const [userError, setUserError] = useState(false);
  const history = useHistory();

  const onSubmit = (data) => {
    axios.post(getServerURL() + '/user/create', {
      email: data.email,
      password: data.password
    }).then(res => {
      props.setUser(res.data.user);
      history.push('/dashboard');
    }).catch(err => {
      setUserError(true);
      console.log(err);
    });
  };

  return (
    <div id='button-container'>
      <form id='login-form' onSubmit={handleSubmit(onSubmit)}>
        <label>username</label>
        <input name='email' type='email' ref={register({ required: true })} />
        {errors.email && 'email is required'}
        <label>password</label>
        <input name='password' type='password' minLength='6' ref={register({ required: true })} />
        {errors.password && 'password is required'}
        <button id='login-btn' type='submit'>Sign Up</button>
        {userError && 'Please check email and password'}
      </form>
    </div>
  );
}

export default Register;
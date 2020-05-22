import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

const Register = ({
  username,
  email,
  password,
  changeUsername,
  changeEmail,
  changePassword,
  login,
  isLoggedIn,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '' || email === '') {
      console.log('Please enter your username and email and password ');
    } else {
      login();
    }
  };

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <div className='col-md-6 m-auto'>
      <div className='card card-body mt-5'>
        <h2 className='text-center'>Register</h2>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label>Username</label>
            <input
              type='text'
              className='form-control'
              name='username'
              onChange={(e) => changeUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              className='form-control'
              name='email'
              onChange={(e) => changeEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              onChange={(e) => changePassword(e.target.value)}
              value={password}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              {' '}
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to='/'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  changeUsername: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Register;

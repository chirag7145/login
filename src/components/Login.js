import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

const Login = ({
  username,
  password,
  changeUsername,
  changePassword,
  login,
  isLoggedIn,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      console.log('Please enter your username and password ');
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
        <h2 className='text-center'>Login</h2>
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
              Login
            </button>
          </div>
          <p>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeUsername: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Login;

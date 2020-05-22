import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Success = ({ isLoggedIn, username, clearState }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    clearState();
  };

  if (!isLoggedIn) {
    return <Redirect to='/login' />;
  } else {
    return (
      <div>
        <div className='card card-body text-primary mt-5'>
          {' '}
          <h4 className='mb-4'>Welcome {username} !!</h4>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <button className='btn btn-primary'>Logout</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

Success.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  clearState: PropTypes.func.isRequired,
};

export default Success;

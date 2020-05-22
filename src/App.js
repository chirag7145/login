import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Success from './components/Success';

const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeUsername = (username) => {
    setUsername(username);
  };
  const changePassword = (password) => {
    setPassword(password);
  };
  const changeEmail = (email) => {
    setEmail(email);
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const clearState = () => {
    setIsLoggedIn(false);
    setPassword('');
    setUsername('');
    setEmail('');
  };

  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Success
                  username={username}
                  isLoggedIn={isLoggedIn}
                  clearState={clearState}
                />
              )}
            />
            <Route
              exact
              path='/login'
              render={(props) => (
                <Login
                  username={username}
                  password={password}
                  changeUsername={changeUsername}
                  changePassword={changePassword}
                  login={login}
                  isLoggedIn={isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path='/register'
              render={(props) => (
                <Register
                  username={username}
                  email={email}
                  password={password}
                  changeUsername={changeUsername}
                  changeEmail={changeEmail}
                  changePassword={changePassword}
                  login={login}
                  isLoggedIn={isLoggedIn}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

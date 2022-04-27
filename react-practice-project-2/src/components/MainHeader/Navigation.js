import React from 'react';

import classes from './Navigation.module.css';
import AutoContext from '../store/auth-context';

const Navigation = (props) => {
  return (
    <AutoContext.Consumer>
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href='/'>Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href='/'>Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AutoContext.Consumer>
  );
};

export default Navigation;

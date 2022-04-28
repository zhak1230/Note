import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <a href='/'>
        <h1>A Typical Page</h1>
      </a>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;

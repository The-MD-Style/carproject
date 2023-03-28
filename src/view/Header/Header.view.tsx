import React from 'react';

import NavBar from 'view/NavBar/NavBar';
import TopBar from 'view/TopBar/TopBar';

import classes from './Header.module.scss';

type Props = {};

const HeaderView = (props: Props) => {
  return (
    <header className={classes['wrapper']}>
      <div className={classes['inner']}>
        <TopBar></TopBar>
        <NavBar></NavBar>
      </div>
    </header>
  );
};

export default HeaderView;
